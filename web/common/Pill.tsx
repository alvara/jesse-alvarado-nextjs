import React from 'react'
import PropTypes from 'prop-types'



export default function Pill({title, active}) {
  return (
    <span className={`pill ${active ? 'active' : ''}`} >{title}</span>
  )
}

Pill.propTypes = {
  title: PropTypes.string,
  // slug: PropTypes.string,
  active: PropTypes.bool,
  // setSelected: PropTypes.func
}