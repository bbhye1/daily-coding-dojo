# 올바른 괄호

## 원하는 것

문자열 괄호가 올바른 괄호인지 아닌지

## 아는 것

- '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다

## 조건

- 문자열 s의 길이 : 100,000 이하의 자연수
- 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

## 계획

괄호가 열려서 시작해야한다. 
열린게 있으면 닫힌게 있어야 한다. 
하나의 스택구조를 만들어 쌓고 남은게 있는지 없는지 검사한다. 