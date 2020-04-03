var monitor = function(start, tag){
  if(start){
    // count how much time elapsed from the definition/provision of the start variable
    var totalTime = process.hrtime(start);
    // process.hrtime always returns two value, total seconds and total microseconds
    // multiply the seconds by 1000 to conver to micro seconds, then add to the second argument which represents the remaining microseconds and divide  by 1m to get ms
    var elapsedTimeToLog =  parseInt((totalTime[0] * 1000) + (totalTime[1]/1000000));
    console.log("Total time elpased : ", elapsedTimeToLog)
  }
  else{
    return process.hrtime()
  }
}

module.exports = monitor