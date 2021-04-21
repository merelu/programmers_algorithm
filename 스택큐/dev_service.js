const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

function solution(progresses, speeds) {
  let answer = [0];
  let prop = progresses.map((v, index) => {
    let a = 100 - v;
    if (a % speeds[index] === 0) {
      return a / speeds[index];
    } else {
      return Math.floor(a / speeds[index]) + 1;
    }
  });
  console.log(prop);
  let maxDay = prop[0];
  let n = 0;
  for (let i = 0, j = 0; i < prop.length; i++) {
    if (prop[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = prop[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

console.log(solution(progresses, speeds));
