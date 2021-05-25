#-*- coding: utf-8 -*-
import sys
sys.path.append("../SentimentAnalysis")

import SentimentAnalysis as sa
import MorphemeSeparation as ms

import pymysql

import datetime

days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

'''
conn = pymysql.connect(host='localhost', user='root', password='0000', charset='utf8', db='database_production') #DB local 연결
'''
conn = pymysql.connect(host='115.85.181.160', port=3306, user='root', password='0000', charset='utf8', db='database_production')

def updateSentimentAnalysis(index, diary):
#DB server 연결

    score = sa.sentiment_predict(str(diary))

    result = [0 for i in range(5)]
    
    print(score)
    
    for i in range(5):
        result[i] = float(score[0][i] * 100)
    
    sentiment = ""
    max_index = result.index(max(result))
    
    if max_index == 0:
        sentiment = "두려움"
    elif max_index == 1:
        sentiment = "중립"
    elif max_index == 2:
        sentiment = "불행"
    elif max_index == 3:
        sentiment = "슬픔"
    elif max_index == 4:
        sentiment = "행복"


    sql = """update journals
         set happy = %s, neutral = %s, fear = %s, anger = %s, sadness = %s, main_emotion = %s
         where idx = '%s' """
         
    cur = conn.cursor()
    cur.execute(sql, (result[4], result[1], result[0], result[2], result[3], sentiment, index))
    
    '''
    print("""update journals
         set happy = %s, neutral = %s, fear = %s, anger = %s, sadness = %s, main_emotion = "%s"
         where idx = '%s' """ %(result[4], result[1], result[0], result[2], result[3], sentiment, index))
    '''
    conn.commit()
    cur.close()
    conn.close()
         

def getData(index) :
    cur = conn.cursor() #디폴트 커서 생성

    query = "select * from journals where idx = '" + str(index) + "'";
    
    cur.execute(query)
    cur.close()
    
    return cur.fetchone()


def updateWordCloud(diary, teacher_id, day):
    conn = pymysql.connect(host='115.85.181.160', port=3306, user='root', password='0000', charset='utf8', db='database_production')
    words = ms.count_word_freq(diary)
    
    for tup in words :
        query = "SELECT * FROM wordclouds where teacher_id = %s and word = %s"
        cur = conn.cursor()
        cur.execute(query, (teacher_id, tup[0]))
        line = cur.fetchone()
        cur.close()
        
        count = int(tup[1])
        
        if line is None :
            query = """INSERT INTO wordclouds (teacher_id, word)
            VALUES (%s, %s)
            """
            
            cur = conn.cursor()
            cur.execute(query, (teacher_id, tup[0]))
            cur.close()
            conn.commit()
            
        else :
            count = count + line[3+day]
            

        query = " UPDATE wordclouds set " + str(days[day]) + " = %s where word = %s and teacher_id = %s "
            
        cur = conn.cursor()
        
        cur.execute(query, (count, tup[0], teacher_id))
        conn.commit()
        cur.close()
            
    conn.close()

def run(index) :
    data = getData(index)
    updateSentimentAnalysis(index, data[4])
    current_time = datetime.datetime.now()
    updateWordCloud(data[4], data[2], int(current_time.weekday()))

