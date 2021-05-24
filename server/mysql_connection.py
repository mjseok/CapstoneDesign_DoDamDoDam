import sys
sys.path.append("../SentimentAnalysis")

import SentimentAnalysis as sa
import MorphemeSeparation as ms

import pymysql

'''
conn = pymysql.connect(host='localhost', user='root', password='0000', charset='utf8', db='database_production') #DB local 연결
'''


def updateSentimentAnalysis(index):
    conn = pymysql.connect(host='115.85.181.160', port=3306, user='root', password='0000', charset='utf8', db='database_production') #DB server 연결

    cur = conn.cursor() #디폴트 커서 생성

    query = "select content from journals where idx = '" + str(index) + "'";
    
    cur.execute(query)
    cur.close()
    
    diary = cur.fetchone()
    
    print(diary[0])
    
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
    cur.execute(sql, (result[4], result[1], result[0], result[3], result[3], sentiment, index))
    
    print("""update journals
         set happy = %s, neutral = %s, fear = %s, anger = %s, sadness = %s, main_emotion = "%s"
         where idx = '%s' """ %(result[4], result[1], result[0], result[3], result[3], sentiment, index))
    conn.commit();
    cur.close()
    conn.close()
         
updateSentimentAnalysis(0)


