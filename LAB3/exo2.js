function mean(scores) {
  if (scores.length === 0) return 0;
  const sum = scores.reduce((total, score) => total + score, 0);
  return sum / scores.length;
}


const scores1 = [15, 18, 12, 14, 16];
const scores2 = [10, 20, 15, 13, 17, 19];

console.log('Mean of scores1:', mean(scores1));
console.log('Mean of scores2:', mean(scores2));
