function solution(s){
  const letters = s.split('');
  const result = letters.reduce((result, letter) => {
      return {
          p: letter.toUpperCase() == 'P' ? result.p +1 :result.p,  
          y: letter.toUpperCase() == 'Y' ? result.y +1 :result.y, 
      }
  },{
      p:0,
      y:0
  });
  const answer = result.p === result.y;
  return answer;
}