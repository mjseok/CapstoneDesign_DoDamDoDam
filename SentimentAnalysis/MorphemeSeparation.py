from konlpy.tag import Mecab
from collections import Counter
mecab = Mecab()


def count_word_freq(data) :
 
   nouns = mecab.nouns(data)
   nouns = [n for n in nouns if len(n) > 1]
   
   count = Counter(nouns)
   tags = count.most_common(40)


   print(tags[0])
   return tags

print(count_word_freq("한강에서 친구와 술을 마시고 실종됐다 숨진 채 발견된 손정민 씨 사인에 대한 정밀 부검 결과, 국립과학수사연구원이 사인을 '익사'로 추정했습니다. 국과수는 또 머리 두 곳에 있는 상처는 사인으로 고려하기 어렵다는 의견을 냈습니다. 경찰은 당일 새벽 4시 20분 대에 친구 A 씨 홀로 한강변 잔디밭 끝자락 경사면에 누워 잠든 걸 깨운 목격자가 있다며, 앞서 손 씨가 A 씨와 마지막으로 목격된 새벽 3시 37분 이후 행적을 재구성하는 데 수사력을 집중하고 있다고 밝혔습니다."))