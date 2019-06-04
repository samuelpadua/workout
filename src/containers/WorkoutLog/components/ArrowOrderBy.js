import React from 'react'
import PropTypes from 'prop-types'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'

function ArrowOrderBy(props) {
  const {
    orderBy,
    column,
    actualColumn,
    changeFilter,
  } = props

  const nextOrderBy = orderBy === 'asc'
    ? 'desc'
    : 'asc'

  const payload = {
    orderBy: nextOrderBy,
    column: actualColumn,
  }

  if (orderBy === 'asc' && column === actualColumn) {
    return <ExpandMoreIcon onClick={() => changeFilter(payload)} />
  }

  if (orderBy === 'desc' && column === actualColumn) {
    return <ExpandLessIcon onClick={() => changeFilter(payload)} />
  }

  return <UnfoldMoreIcon onClick={() => changeFilter(payload)} />
}

ArrowOrderBy.propTypes = {
  orderBy: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  actualColumn: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
}

export default ArrowOrderBy
