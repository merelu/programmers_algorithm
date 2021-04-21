const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridge = Array.from({ length: bridge_length }, () => 0);

  while (bridge.length) {
    bridge.shift();
    answer += 1;

    if (truck_weights.length) {
      let sum = bridge.reduce((a, c) => a + c);

      if (sum + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
  }

  //   for (let i = 0; i < len; i++) {
  //     if (!isEmpty(truck_weights)) {
  //       bridge.push(truck_weights.shift());
  //       if (bridge.reduce((a, c) => a + c) <= weight) {
  //         continue;
  //       } else {
  //         bridge.shift();
  //         answer += bridge_length;
  //       }
  //     }
  //   }
  //   answer;

  return answer;
}

console.log(solution(bridge_length, weight, truck_weights));
