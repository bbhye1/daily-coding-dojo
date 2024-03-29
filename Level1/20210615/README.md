# 크레인 인형뽑기 게임

## 원하는 것

크레인을 모두 작동시킨 후 터뜨려져 사리진 인형의 개수

## 아는 것

- "1 * 1" 크기의 칸들로 이루어진 "N * N" 크기의 정사각 격자

- 모든 인형은 하나의 격자를 차지하고 가장 아래부터 쌓인다.

- 크레인을 좌우로 움직여서 가장 위에 있는 인형을 집어올려서  바구니에 가장 아래칸 부터 쌓는다.

- 같은 모양의 인형 두개가 바구니에 연속해서 쌓이게 되면 두 인형은 모두 사라진다. 

- 크레인 작동시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는곳에서 작동시키면 아무일도 일어나지 않는다.

- 인형이 담긴 격자의 상태가 담긴 2차원 배열: board
- 크레인을 작동시킨 위치가 담긴 배열: moves

## 조건

1. "5 x 5" <= board 크기 <= "30 x 30" 이하입니다.
2. board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
    1. 0은 빈 칸을 나타냅니다.
    2. 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.
3. 1 <= moves <= 1,000
4. 1 <= moves 배열 각 원소들의 값 <= board 배열의 가로 크기 이하인 자연수.

## 계획

1. board에서 인형(숫자)를 꺼낸다.

2. basket에 인형을 넣는다.

3. 동일한 인형이 basket 안에 연속으로 들어가면 터뜨려져서 사라진다.

## 반성

- 코드가 너무 길고 지저분하다. 리팩토링이 필요하다. 
- 배열과 객체의 복사는 값복사가 아닌 참조복사하는 것을 명심하자. 
- 이름 지을 때 더 의미있는 이름으로 지으려고 노력하자.
