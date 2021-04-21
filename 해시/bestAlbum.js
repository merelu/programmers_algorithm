let genres = ["classic", "pop", "classic", "classic", "pop"];

let plays = [500, 600, 150, 800, 2500];

function cmpGenres(a, b) {
  let sum = 0;
  a.map((v) => (sum += v.play));
  const aplay = sum;
  sum = 0;
  b.map((v) => (sum += v.play));
  const bplay = sum;
  return bplay - aplay;
}

function cmpPlays(a, b) {
  if (a.play == b.play) {
    return a.id - b.id;
  }
  return b.play - a.play;
}

function solution(genres, plays) {
  var answer = [];
  let hash_musics = {};
  let len = genres.length;
  for (let i = 0; i < len; i++) {
    if (!hash_musics[genres[i]]) {
      hash_musics[genres[i]] = [{ id: i, play: plays[i] }];
      continue;
    }
    hash_musics[genres[i]].push({ id: i, play: plays[i] });
  }
  console.log("결과1", hash_musics);

  let musics = [];
  let index = 0;
  for (let key in hash_musics) {
    musics.push(hash_musics[key]);
    musics[index++].sort(cmpPlays);
  }
  console.log("결과2", musics);

  musics.sort(cmpGenres);

  console.log("결과3", musics);

  for (let i = 0; i < index; i++) {
    answer.push(musics[i][0].id);
    if (musics[i].length > 1) answer.push(musics[i][1].id);
  }
  return answer;
}

console.log("solution: ", solution(genres, plays));
