# 문제1
## 바둑이 승차(DFS)

### 원하는 것

### 내가 아는 것
입력값: 트럭에 태울 수 있는 무게 c, 바둑이들의 무게 배열 weights

### 조건
1. 1 <= c <= 100,000,000
2. 바둑이는 30마리를 넘지 않음.

### 계획
바둑이들의 무게를 구해서 가장 트럭의 무게와 가장 가까운 무게를 고르기. 

### 반성
재귀를 사용할 때 조심해야 할 점은 불필요한 탐색으로 결론까지 도달하는 속도가 커진다는 점이다. 항상 불필요한 탐색은 더 없는지 일찍 종결할 방법은 없는지 살펴봐야한다. 이번 문제에서도 재귀로 풀면 금방은 풀릴 수 있으나 케이스가 많아질 경우 모든 케이스를 다 살펴보기에는 너무 많은 탐색이 필요하다. 탐색을 절약하자. 