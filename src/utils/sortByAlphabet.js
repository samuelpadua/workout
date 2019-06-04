const sortByAlphabet = (items = [], orderBy, key) => {
  const asc = (a, b) => {
    if (a[key] > b[key]) return 1
    if (a[key] < b[key]) return -1
    return 0
  }

  const desc = (a, b) => {
    if (a[key] < b[key]) return 1
    if (a[key] > b[key]) return -1
    return 0
  }

  const order = orderBy === 'asc' ? asc : desc

  const ordered = items.sort(order)

  return ordered
}

export default sortByAlphabet
