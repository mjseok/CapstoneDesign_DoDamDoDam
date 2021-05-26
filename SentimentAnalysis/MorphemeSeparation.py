from konlpy.tag import Mecab
from collections import Counter
mecab = Mecab()


def count_word_freq(data) :
 
   nouns = mecab.nouns(data)
   nouns = [n for n in nouns if len(n) > 1]
   
   count = Counter(nouns)
   tags = count.most_common(40)
    
   return tags

