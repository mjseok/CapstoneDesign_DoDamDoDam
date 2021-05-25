import sys
import re
import konlpy
from konlpy.tag import Kkma, Komoran, Hannanum, Okt
from konlpy.utils import pprint
from konlpy.tag import Mecab
import time
import numpy as np
import sys
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.layers import Embedding, Dense, LSTM, Bidirectional
from tensorflow.keras.models import Sequential
from tensorflow.keras.models import load_model
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint
import tensorflow as tf
from tensorflow.keras.preprocessing.sequence import pad_sequences
import pickle
import argparse
import json
import os
import pathlib

os.environ['TF_CPP_MIN_LOG_lEVEL'] = '2'

parser = argparse.ArgumentParser(description='python Implementation')
parser.add_argument('--diary', type = str, default = None, help='input_diary')

args = parser.parse_args()

with open("../SentimentAnalysis/" + 'tokenizer.p', 'rb') as file:    # james.p 파일을 바이너리 읽기 모드(rb)로 열기
    tokenizer = pickle.load(file)

def sentiment_predict(new_sentence):
  stopwords = ['도', '는', '다', '의', '가', '이', '은', '한', '에', '하', '고', '을', '를', '인', '듯', '과', '와', '네', '들', '듯', '지', '임', '게', '만', '게임', '겜', '되', '음', '면' , '"']
  loaded_model = tf.keras.models.load_model('../SentimentAnalysis/best_model.h5')
  max_len = 40
  new_sentence = re.sub(r'[^ㄱ-ㅎㅏ-ㅣ가-힣 ]','', new_sentence)
  mecab = Mecab()
  new_sentence = mecab.morphs(new_sentence) # 토큰화
  new_sentence = [word for word in new_sentence if not word in stopwords] # 불용어 제거
  encoded = tokenizer.texts_to_sequences([new_sentence]) # 정수 인코딩
  pad_new = pad_sequences(encoded, maxlen = max_len) # 패딩
  #val_predict = np.argmax(np.asarray(loaded_model.predict(pad_new)), axis=1)
  score = loaded_model.predict(pad_new)

  '''
  if val_predict[0] == 0:
        print("두려움")
  elif val_predict[0] == 1:
        print("중립")
  elif val_predict[0] == 2:
        print("불행")
  elif val_predict[0] == 3:
        print("슬픔")
  elif val_predict[0] == 4:
        print("행복")
  else:
        print(val_predict[0], "잘못된 분류값입니다.")
  '''
  
  return score

def main() :
    sentiment_predict("안녕하");
    
if __name__ == '__main__':
    main()
