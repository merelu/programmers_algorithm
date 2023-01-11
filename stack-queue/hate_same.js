function solution(arr) {
  var answer = [];
  arr.forEach((value) => {
    if (answer.length === 0) {
      answer.push(value);
    }
    if (answer[answer.length - 1] !== value) {
      answer.push(value);
    }
  });

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
