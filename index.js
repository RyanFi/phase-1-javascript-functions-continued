function saturdayFun(satInput="roller-skate") {
  return `This Saturday, I want to ${satInput}!`
}

const mondayWork = function(monInput="go to the office") {
  return `This Monday, I will ${monInput}.`
}

function wrapAdjective(flair="*") {
  return function(adj="special") {
    return `You are ${flair}${adj}${flair}!`
  }
}