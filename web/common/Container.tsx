import React from 'react'
import PropTypes from "prop-types"

// wrap section with bootstrap container
export default function Container({children, wrapperClass, className}) {
  return (
    <div className={wrapperClass}>
      <div className={`container ${className}`}>
        <div>{children}</div>
      </div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.object,
  wrapperClass: PropTypes.string,
  className: PropTypes.string
};
