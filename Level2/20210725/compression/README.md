# 압축

## 원하는 것

주어진 문자열을 압축한 후의 사전 색인 번호를 배열

## 아는 것

LZW 압축

1. 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
3. w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
4. 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
5. 단계 2로 돌아간다.

- 입력: 영문 대문자 문자열 msg (1000글자 이하)

## 계획

압축
사전 : 길이가 1인 모든 대문자 알파벳이 있는 배열

- 해당 글자 + 1 가 사전에 있으면 하나 더 긴 문자열을 검사한다.
- 해당 글자가 사전에 없으면 다음 글자 검사로 넘어가고 해당 글자를 사전 끝에 등록한다.

첫 글자부터 마지막 글자까지 반복하여 반환된 수의 배열을 만든다. 
