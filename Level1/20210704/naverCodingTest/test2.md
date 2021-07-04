# 문제 2

## 원하는 것

주어진 예산 내에서 엘리베이터가 운행되도록 공사할 수 있는 가장 긴 연속된 층의 길이

## 아는 것

- 사용할 수 있는 예산 money, 빌딩의 각 층별로 필요한 공사 비용 cost

## 조건

- 0 <= money <= 500,000,000
- cost는 정수형 배열이며, 길이(=빌딩의 층 수)는 1 이상 500,000 이하입니다.
- cost의 모든 원소는 0 이상 1,000 이하인 정수입니다.
- cost[i] 는 i + 1층에 필요한 공사 비용입니다.

## 계획

앞에서부터 순환 
합이 420에 최대한 가까운 것을 고른다.
배열에 길이를 저장한다.
그중 길이가 제일 긴 것을 고른다. 