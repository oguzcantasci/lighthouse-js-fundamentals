const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'



function judgeVegetable(vegetables,metric) {
  let winnerMetric = 0
  let winnerSubmitter = ""
  for (const vegetable of vegetables) {
    if(winnerMetric < vegetable[metric]) {
      winnerMetric = vegetable[metric]
      winnerSubmitter = vegetable["submitter"]
    }
  }
    return winnerSubmitter
}

console.log(judgeVegetable(vegetables, metric))