const orderByDate = (items = [], orderBy) => {
  const desc = (a, b) => new Date(b.date) - new Date(a.date)
  const asc = (a, b) => new Date(a.date) - new Date(b.date)

  const order = orderBy === 'asc' ? asc : desc

  const ordered = items.sort(order)

  return ordered
}

export default orderByDate
