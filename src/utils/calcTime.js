function calcTimes(time) {
  const startTime = new Date('1970-1-1 00:00')
  const endTime = new Date(`1970-1-1 ${time}`)
  const diff = (endTime - startTime) / 1000 / 60 / 60

  return diff
}

export default calcTimes
