# 완주하지 못한 선수

## 원하는 것

완주하지 못한 선수의 이름

## 아는 것

- participant: 마라톤에 참여한 선수들의 이름
- completion: 완주한 선수들의 이름

## 조건

- 1 <= 마라돈 경기에 참여한 선수의 수 <= 1000
- participant.length - 1 = completion.length
- 참가자의 이름은 1 이상 20 이하의 알파벳 소문자로 이루어짐
- 동명이인이 있을 수 있음

## 계획

1. 선수 명단에서 완주자를 하나씩 지운다.
2. 남은 한명이 완주 못한 사람!

## 두번째 계획

1. 선수 명단의 이름을 카운팅한다.
2. 완주자 명단의 이름을 카운팅한다.
3. 둘을 비교해서 불일치를 찾아낸다.

## 반성

- 시간 복잡도를 전혀 고려 안하고 풀어서 시간 초과가 되었다. 계획 1은 시간 복잡도 O(n), 두번째 계획은 O(n).
