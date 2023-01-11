/**
 *
 * @param {number} n 선수의 수, 1~100
 * @param {*} results 경기 결과 [a, b] => a가 b를 이김
 * @return {number} 정확하게 순위를 매길 수 있는 선수의 수
 */
const solution = (n, results) => {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
  console.log(graph);
  result.map((i) => {
    const [win, lose] = i;
    graph[win][lose] = 1;
    graph[lose][win] = -1;
    graph[win][win] = 0;
    graph[lose][lose] = 0;
  });

  //graph를 순회할 index 배열을 만들어준다.
  const rangeN = Array.from({ length: n }, (v, i) => i + 1);
  console.log([...Array(n).keys()].map((e) => e + 1));
  for (const mid of rangeN) {
    for (const a of rangeN) {
      for (const b of rangeN) {
        //a가 mid를 이기고, mid가 b를 이기면 a가 b를 이김
        if (graph[a][mid] === 1 && graph[mid][b] === 1) {
          graph[a][b] = 1;
        }

        //a가 mid에게 지고, mid가 b에게 지면 a가 b에게 짐
        if (graph[a][mid] === -1 && graph[mid][b] === -1) {
          graph[a][b] = -1;
        }
      }
    }
  }
  console.log(graph);

  let ans = 0;
  for (const self of rangeN) {
    let hasFalse = false;
    for (const other of rangeN) {
      if (graph[self][other] === false) {
        hasFalse = true;
        break;
      }
    }
    ans += hasFalse ? 0 : 1;
  }

  return ans;
};

const n = 5;
const result = [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
];

//return : 2
console.log(solution(n, result));
