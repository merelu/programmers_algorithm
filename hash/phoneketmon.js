const solution = (nums) => {
  const answer = [];
  const max = nums.length / 2;

  nums.map((v) => {
    if (answer.length < max && !answer.includes(v)) {
      console.log(v);
      answer.push(v);
    }
  });

  return answer.length;
};

console.log(solution([3, 3, 3, 2, 2, 4]));
