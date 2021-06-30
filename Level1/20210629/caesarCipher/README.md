# 시저암호

## 원하는 것

s를 n만큼 민 암호문

## 아는 것

- 시저 암호: 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식
- s: 문자열
- n: 거리

## 조건

- 공백은 아무리 밀어도 공백
- s는 알파벳 소문자, 대문자, 공백으로만 이루어짐
- s.length <= 8000
- 1 <= n(자연수) <= 25

## 계획

- 문자열을 배열로 쪼개서 n만큼 큰 문자열로 변환한뒤 합친다.

## 반성

- 조건을 잘 살펴봐야한다.
- 변수명을 더 고려해보기.