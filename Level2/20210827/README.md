# 후보키

## 원하는 것

후보 키의 최대 개수

## 아는 것

후보키: 유일성과 최소성을 만족시키는 튜플
    - 유일성: 릴레이션에 있는 모든 튜플 중 유일하게 식별되어야한다.
    - 최소성: 유일성을 가진 키 구성 중 하나라도 제외하는 경우 유일성이 깨진다. 식별하는데 꼭 필요한 속성만으로 구성되어야 함

## 조건

- relation은 2차원 문자열 배열이다.
- 1 <= relation 길이 <= 8, 릴레이션의 속성
- 1 <= relation 원소의 길이 <= 20, 릴레이션의 튜플
- 1 <= relation의 모든 문자열의 길이 <= 8, 알파벳 소문자와 숫자
- relation의 모든 튜플은 유일하게 식별 가능하다.

## 계획

- 유일성: 1개씩 골라서 붙였을 때 유일하면 -> 후보 키
- 개수를 늘려가며 후보키를 찾는다.
- 최소성: 후보키를 만드는 요소를 삭제
