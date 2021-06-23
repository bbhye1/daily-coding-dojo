# 음양더하기

## 원하는 것

실제 정수들의 합

## 아는 것

- absolutes: 절댓값을 차례대로 담은 정수 배열
- signs: 정수들의 부호를 차례대로 담은 불리언 배열

## 조건

1. 1 <= absolutes.length <= 1,000
2. 1 <= absolutes의 모든 수 <= 1,000
3. signs의 길이 = absolutes의 길이
4. signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미

## 계획

1. absolutes 배열을 순회해서 부호에 맞는 수로 바꾼다.
2. 모두 더한다.

## 반성

-
