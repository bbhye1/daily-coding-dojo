# 문제1 
## 기능개발 

1. 원하는 것
각 배포때마다 몇 개의 기능이 배포되는지
2. 내가 아는 것 
입력받는 값: 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses, 각 작업의 개발 속도가 적힌 정수 배열 speeds
작업 수행 방식 : 
- 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
- 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
- 그렇지 않으면 J를 인쇄합니다.
3. 조건 
작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
작업 진도는 100 미만의 자연수입니다.
작업 속도는 100 이하의 자연수입니다.
배포는 앞에 있는 기능이 배포될때 함께 배포된다.
배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.
4. 계획
- 스택 클래스를 구현한다. 추가하는 push() 꺼내는 pop() 하나씩꺼내서 하루가 지나 진행률을 높이는 연산을 수행하는 progress() 배열이 비었는지를 확인하는 isEmpty() 를 이용해 length가 0이 될때까지 연산작업을 통해 개수를 반환하는 새 배열을 만든다. 

5. 반성 
여차저차 클래스로 Stack을 구현해서 문제를 풀었지만 속도면에서 다른 풀이들보다 훨씬 빠른 느낌이 들지는 않았다. 즉 효율성이 떨어진다.
다른 풀이를 보니 접근 방식을 아예 뒤집어서 생각하는 풀이가 있었다. 즉 진행시키면서 값을 구하는 것이 아니라 반대로 최대 며칠이 걸리는지를 먼저 구해놓고 그에 따른 순서를 하나씩 차근이 풀어 나가 반복문을 아예 확 줄여버린 것이다. 답을 구하는 접근 방식을 아예 뒤집어서 생각도 해보면서 풀어야겠다. 