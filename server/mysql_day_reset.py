
import datetime

import pymysql

days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']


current_time = datetime.datetime.now()
yesterday = (6+int(current_time.weekday()))%7

conn = pymysql.connect(host='115.85.181.160', port=3306, user='root', password='0000', charset='utf8', db='database_production')

sql = "update wordclouds set " + days[yesterday] + " = '0' "

cur = conn.cursor()

cur.execute(sql)

conn.commit()
cur.close()
conn.close()
