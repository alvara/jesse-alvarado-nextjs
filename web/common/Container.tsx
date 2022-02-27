import React from 'react'
import PropTypes from "prop-types"

// wrap section with bootstrap container
export default function Container({children, wrapperClass, className}) {
  return (
    // container wrapper
    <div className={`container-wrapper ${wrapperClass}`}>
      <div className={`container ${className}`}>
        {children}
      </div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.object,
  wrapperClass: PropTypes.string,
  className: PropTypes.string
};
