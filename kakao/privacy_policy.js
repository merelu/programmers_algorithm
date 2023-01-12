const YEAR_DAY = 28 * 12;
const MONTH_DAY = 28;

function solution(today, terms, privacies) {
  let todayToFormat = today.split(".");
  let todaySum = daySum(todayToFormat);

  let termsToFormat = new Map();

  terms.map((v) => {
    const tmp = v.split(" ");
    termsToFormat.set(tmp[0], tmp[1]);
  });

  let privaciesToFormat = new Map();

  privacies.map((v, i) => {
    const tmp = v.split(" ");
    const date = daySum(tmp[0].split("."));
    const termDate = parseInt(termsToFormat.get(tmp[1])) * MONTH_DAY;
    privaciesToFormat.set(i, date + termDate - 1);
  });

  const result = [];

  for ([key, value] of privaciesToFormat) {
    console.log(key, value);
    console.log(todaySum);
    if (todaySum > value) {
      result.push(key + 1);
    }
  }
  return result;
}

function daySum(arr) {
  return arr.reduce((result, cur, index) => {
    if (index === 0) {
      return result + (parseInt(cur) - 1) * YEAR_DAY;
    } else if (index === 1) {
      return result + (parseInt(cur) - 1) * MONTH_DAY;
    } else {
      return result + parseInt(cur);
    }
  }, 0);
}

const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = [
  "2021.05.02 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];

const result = solution(today, terms, privacies);

console.log("testcase1", result);

const case2Today = "2020.01.01";
const case2Terms = ["Z 3", "D 5"];
const case2Privacies = [
  "2019.01.01 D",
  "2019.11.15 Z",
  "2019.08.02 D",
  "2019.07.01 D",
  "2018.12.28 Z",
];

const case2Result = solution(case2Today, case2Terms, case2Privacies);

console.log("testcase2", case2Result);
