# 문제1 
## H-Index

1. 원하는 것
과학자의 H-Index
2. 내가 아는 것 
입력받는 값: 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations
H-Index: 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값
3. 조건 
과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
논문별 인용 횟수는 0회 이상 10,000회 이하입니다.
4. 계획
length만큼 순회한다. i = 1부터 citations의 최고값만큼 
이상숫자배열: citations에서 i 이상일 경우 배열의 길이
나머지의 수: citations에서 0 이상 i 미만의 배열의 길이 => 이상숫자배열의 나머지 수 중 0이 아닌수 
이상숫자배열의 길이가 i 이하일때 나머지 수가 i보다 작을 때 => anwser++;
answer를 리턴;
5. 반성 
H-index의 정의가 머릿속에 정리가 안되어서 엄청 오랫동안 풀고 결국 12시 넘겨서 다음날 커밋했다. 
엄청 복잡하고 복잡하게 풀었는데 다른 분의 풀이를 보니 너무 간단해서 현타왔다. 
개념정리 개념정리 모든 것은 개념정리부터 잘 되고 시작하자. (개념정리에 한참 신경썼는데 안됐던건 함정);

다른분의 간단한 풀이
``` javascript
function solution(citations) {
     citations = citations.sort(sorting);
     var i = 0;
     while(i + 1 <= citations[i]){
         i++;
     }
     return i;


     function sorting(a, b){
         return b - a;
     }
}
```
