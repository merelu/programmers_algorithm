const citations = [3, 0, 6, 1, 5];

function solution(citations) {
  citations.sort((a, b) => b - a);
  let idx = 1;
  while (idx <= citations[idx - 1]) idx += 1;
  return idx - 1;
}

console.log(solution(citations));
