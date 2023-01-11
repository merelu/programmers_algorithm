const numbers = [3, 30, 34, 5, 9];

function solution(numbers) {
  let answer = numbers
    .map((c) => c + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  return answer[0] === "0" ? "0" : answer;
}

console.log(solution(numbers));
