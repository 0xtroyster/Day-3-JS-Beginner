const scores = [55, 80, 92, 40];
const passingScores = scores.filter(function (score) {
  return score >= 70;
});
console.log(passingScores);
