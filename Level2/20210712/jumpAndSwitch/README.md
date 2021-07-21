# 점프와 순간 이동

## 원하는 것

사용해야하는 건전지 사용량의 최솟값

## 아는 것

- 아이언 슈트 구매자가 이동하려는 거리 N
- 한번에 k칸을 점프하면 k만큼 배터리가 사용됨
- 현재까지 온 거리 * 2 까지 순간이동하면 사용량이 줄지 않음

## 조건

- 2 <= n <= 10
- n <= words의 길이 <= 100
- 2 <= 단어의 길이 <= 50
- 모든 단어는 알파벳 소문자로만 이루어짐
- 만약 주어진 단어들로 탈락자가 생기지 않는다면, [0, 0]이 답

## 계획

순간이동 =  a * 2 ** m
a가 1부터 점점 증가하면서 순환,
m을 1씩 증가하면서 순환하다가 n보다 커지면 그 전 숫자로 칸 이동의 수를 비교한다.
기본 최고 이동 수를 정해놓고 그것보다 작으면 그 수를 기준으로 정해준다.
그것보다 크면 멈추고 기준을 답으로 한다.

## 반성

여기서 중요한건 순간이동( 반씩 곱해서 이동 = 반씩 나누어 이동)을 얼마나 많이 할 수 있는냐이다. 
짝수의 경우 나누어 떨어지기 때문에 바로 이동이 가능하지만 홀수는 그렇지 못하기 때문에 짝수로 바꾸어 순간이동을 해주기 위해 한 칸씩 점프를 해주어야 하고 그때마다 배터리가 소모된다.
때문에 1칸씩 이동할 때인 홀수인 순간에 배터리가 소모되고 이 때들만 카운트 해주면 정답이 된다.