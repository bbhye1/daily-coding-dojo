# 콜라츠추측

## 원하는 것

몇 번이나 반복해야하는지 반환

## 아는 것

1. 입력된 수가 짝수라면 2로 나눕니다.
2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
3. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

## 조건

1. 1 <= num <= 8000000
1. 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환

## 계획

1. 짝수라면 2로 나누고 홀수면 3을 곱하고 1을 더하는 함수를 만들어 1이 될 때까지 반복하고 count를 센다.
2. 500이 될경우 count를 종료한다.

## 반성

- 배열로 만들어 reduce를 쓰려다가 실패했다. 문제를 풀 수 있는 더 다양한 방식은 없을까?  