# 문제1 
## 오픈채팅방

1. 원하는 것
- 채팅창에 입력된 문구들의 배열
2. 내가 아는 것 
- 모든 유저는 유저 아이디로 구분된다. 
- 입력문구들:
- Enter[유저아이디][닉네임] - 채팅장에 들어왔을 때
- Leave[유저아이디] - 채팅장을 떠났을때
- Change[유저아이디][닉네임] - 닉네임 변경
3. 조건 
- 첫 단어는 Enter, Leave, Change 중 하나이다.
- 각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어져있다.
- 유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
- 유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
- 채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못 된 입력은 주어지지 않는다.
4. 계획
- enter, leave, change를 객체로 묶어서 동작시킨다. 
- enter: answer ===[] 라면 answer.push(message);
-  아니라면 if answer.find()로 유저아이디가 같은 사람이 있다면 닉네임 변경, 아니면 새로 그냥 추가 
- leave: answer.push(message);
- Change: 만약 유저아이디롸 같은 사람이 있다면 닉네임 모두 변경 
- 마지막에 문구에 맞는 메세지로 map순환 

- 두번째 계획 
- 메세지를 남기는 배열하나와 Map으로 아이디를 따로 관리하자. 
5. 반성 
- 이것이 고유한 값인지 아닌지를 빨리 파악하고 그에 맞는 자료형을 고르자. 이 문제에서도 id를 이용한 map으로 푸니 코드도 훨씬 깔끔하고 속도도 빠르게 풀렸다. 고유한 id값을 따로 관리해주면 로직을 분리해서 에러를 예측할 수 있다. 


- 링크: https://programmers.co.kr/learn/courses/30/lessons/42888
