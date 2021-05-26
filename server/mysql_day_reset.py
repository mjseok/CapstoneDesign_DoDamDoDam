#-*- coding: utf-8 -*-
import datetime

import pymysql

days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']


current_time = datetime.datetime.now()
today = int(current_time.weekday())

conn = pymysql.connect(host='115.85.181.160', port=3306, user='root', password='0000', charset='utf8', db='database_production')

sql = "update wordclouds set " + days[today] + " = '0' "

cur = conn.cursor()

cur.execute(sql)

conn.commit()
cur.close()
conn.close()
