const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
function solution(array, commands) {
  let answer = [];
  for (let item of commands) {
    let [command1, command2, command3] = item;
    let arr = array.slice(command1 - 1, command2);
    arr.sort((a, b) => a - b);
    answer.push(arr[command3 - 1]);
  }
  return answer;
}

console.log(solution(array, commands));
