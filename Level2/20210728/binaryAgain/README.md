# 이진 변환 반복하기

## 원하는 것

`[이진 변환의 횟수, s가 1이 될때 까지 제거된 모든 0의 개수]`

## 아는 것

주어진 문자열 : s

이진 변환 과정

1. x의 모든 0을 제거
2. x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿈

## 조건

1. 1 <= s의 길이 <= 150,000
2. s에는 '1'이 최소 하나 이상 포함

## 계획

모든 0이 몇개인지 찾고 지우기
지운 문자열dml 길이를 2진법수로 변환
1이 될때까지 반복

## 반성

match로 찾는 모든 문자 배열을 반환할 수 있다. 
