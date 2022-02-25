import React from 'react'
import PropTypes from "prop-types"

// wrap section with bootstrap container
export default function Container({children, wrapperClass}) {
  return (
    <div className={wrapperClass}>
      <div className='container py-5 test'>{children}</div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.object,
  wrapperClass: PropTypes.string
};
