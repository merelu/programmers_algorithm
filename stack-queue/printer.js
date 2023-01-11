const priorities = [2, 1, 3, 2];
const location = 2;

function solution(priorities, location) {
  let target_index = location;
  let answer = 1;
  let first = -1;

  while (priorities.length > 0) {
    first = priorities.shift();
    if (priorities.some((v, i) => v > first)) {
      priorities.push(first);
    } else {
      if (target_index === 0) {
        break;
      } else answer++;
    }

    if (target_index === 0) {
      target_index = priorities.length - 1;
    } else {
      target_index--;
    }
  }
  return answer;
}

console.log(solution(priorities, location));
