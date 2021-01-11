# 문제1 
## 위장

1. 원하는 것
- 서로 다른 옷의 조합의 수
2. 내가 아는 것 
- 입력받는 값: 의상들이 담긴 2차원 배열 clothes
3. 조건
- clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
- 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
- 같은 이름을 가진 의상은 존재하지 않습니다.
- clothes의 모든 원소는 문자열로 이루어져 있습니다.
- 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
- 스파이는 하루에 최소 한 개의 의상은 입습니다. 
4. 계획
- [] 배열에 종류별로 옷을 숫자로 추가한다. [1, 2] 이런식으로 종류별 옷의 개수를 담음 배열을 만들고 가짓수를 만든다. 
- 배열의 길이만큼 순회하며 i번일땐 각 배열을 더해주고 
- 2번째 부터는 n개씩 만들 수 있는 경우의 수를 만든다.
- 두번째
- 의상의 종류 +1 를 모두 곱한 후 -1 
5. 반성 
계속 못풀겠어서 찾아보다가 이 공식이 있다는 것을 알았다. 적용해보니 금받 풀려서 수학적인 지식이 필요한건가... 싶다. 
근데 이게 해시 문제로 되어있는데 무슨 연관이 있는지는 도통 모르겠다. 아직 해시에 대한 지식이 부족한건가 싶다. 
기본을 더 공부해보자. 

- 링크: https://programmers.co.kr/learn/courses/30/lessons/42578
