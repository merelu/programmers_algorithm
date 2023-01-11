function solution(clothes) {
  const result = clothes.length;
  const hash = new Map();
  clothes.forEach((cloth) => {
    hash.set(cloth[1], (hash.get(cloth[1]) || 0) + 1);
  });
  let mul = 1;
  for ([key, value] of hash) {
    mul *= value;
  }

  return result + mul;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
