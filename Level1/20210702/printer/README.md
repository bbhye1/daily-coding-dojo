# 프린터

## 원하는 것

내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지

## 아는 것

프린터 규칙

1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.

- 문서의 중요도가 순서대로 담긴 배열 priorities
- 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location

## 조건

- 1 <= 현재 대기목록 문서 수 <= 100
- 인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻
- 0 <= location <= 현재 대기목록에 있는 작업 수 - 1
- 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현 (인덱스로 표현)

## 계획

- 각 문서의 현재 인덱스를 표시한다.
- 대기목록에서 하나씩 꺼낸다.
- 대기목록에 중요도가 높은 문서가 있다면 다시 대기목록 마지막에 넣는다.
- 아니면 인쇄 목록에 넣는다.
- 인쇄목록에 다 넣어지면 표시한 인덱스로 인쇄 순서를 찾는다.
