## 0529 10시반까지
최대한 많이 해오기!

### 공통

- front 파일로가서 npm start하면 켜져요!

#### CSS 바꾸는 법
- bootstrap 만들어져있는거에서 css를 바꾸고 싶으면, className에 붙은내용 검색해서 assets > scss에 있는 파일을 건드려서 바꾸기
- assets > css 파일은 건드려도 안바뀜!!
- 아니면 그냥 styled-component사용하거나 직접 style 설정
예시(직접 style설정)


```
<div
          style={{
            width: "150px",
            backgroundColor: "#57648C",
            color: "white",
            textAlign: "center",
          }}
        >
```
### reactstrap 참고
https://reactstrap.github.io/
  

1. 사원님
front > src > views >  examples > StudentInfo.js 파일

front > src > views > examples > StudentManagement.js파일 참고해서 학생리스트 보이게 하기
```
1. StudentManagement.js 파일 
import StudentList from "components/Student/StudentList"
2. StudentList.js 파일 
import Student from './Students'
-> 1,2 파일에서 학생 사진+ 번호 + 이름인 카드를 만든다고 생각
(Student는 카드를 만들고 StudentList는 가져온 학생 모두의 카드를 만든다고 생각)
grid 사용하면 4개씩 보이게 할 수 있음(StudentManagement의 Grid참고)
```

2. 지원님

front > src > views> examples > ClassManagement.js 파일

wordcloud 부분은 예전 파일에 db에서 불러오는 부분까지해서 해놨으니까 복붙해서 쓰면됨!
원래 page에 그래프 추가하기!  


3. 기백님 
front > src > views> examples > StudentPage.js 파일

로그인하면 학생페이지로 잘 넘어갑니다!
학생페이지만 구현해주세요!
Calendar파일은 front > src > components > Calendar 에 있습니다!!