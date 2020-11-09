// 숫자로 이루어진 배열을 입력받아 숫자들의 평균값 구하기 

function solution(arr) {
    return arr.reduce((acc, cur) =>  acc += cur, 0) / arr.length;
}