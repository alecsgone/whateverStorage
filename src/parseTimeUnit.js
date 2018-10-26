function parseTimeUnit(unit = '') {
  // remove the s on plural time units e.g. minute-s
  const timeUnit = unit.replace('s', '').toLowerCase()
  const time = {
    minute: () => 60 * 1000,
    hour: () => 60 * time.minute(),
    day: () => 24 * time.hour(),
    week: () => 7 * time.day(),
    month: () => 30 * time.day(),
    year: () => 365 * time.day(),
  }

  if (time[timeUnit]) {
    return time[timeUnit]()
  }

  return time.minute()
}

export default parseTimeUnit
