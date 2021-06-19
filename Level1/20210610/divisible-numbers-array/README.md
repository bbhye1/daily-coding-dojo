# 나누어 떨어지는 숫자 배열

## 원하는 것

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열

## 아는 것

array: 자연수를 담은 길이 1이상의 배열  divisor: 자연수

## 조건

1. 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
 -> 각 요소들중 중복된 수는 없다.
2. 나누어 떨어지는 요소가 없으면 -1을 담은 배열을 반환한다.

## 계획

1. array를 각 element 중 divisor로 나누어 떨어지는 값으로만 이루어진 배열로 변환한다.
2. array를 오름차순으로 정렬한다.

## 반성

- 간단한 로직이라면 또 너무 쪼개지는 말자 ㅎㅎ

- 삼항연산자로 코드 작성을 하는 것과 gaurd clause로 작성하는 것 중 어느게 좋을지를 항상 고민하자