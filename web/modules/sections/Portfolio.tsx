import React from 'react'
import PropTypes from 'prop-types'

import PortfolioCard from '../widgets/PortfolioCard'

export default function Portfolio({portfolio, tags}) {
  console.log(tags)
  console.log(portfolio)

  return (
    <div id="portfolio" className="h-100 text-center d-flex flex-column justify-content-center">
    <h1><strong>Projects</strong>  I&apos;ve worked on</h1>
    <div className='row'>
      <div className='col'>
          {tags.length > 0 && tags.map(
            ({title, slug, _id}) => (
              <span key={_id} className='pill' >{title}</span>
            )
          )}
      </div>
    </div>
    <div className="row">
      <div className="col-md-3"><PortfolioCard /></div>
      <div className="col-md-3"><PortfolioCard /></div>
      <div className="col-md-3"><PortfolioCard /></div>
      <div className="col-md-3"><PortfolioCard /></div>
      <div className="col-md-3"><PortfolioCard /></div>
      <div className="col-md-3"><PortfolioCard /></div>
      <div className="col-md-3"><PortfolioCard /></div>
      <div className="col-md-3"><PortfolioCard /></div>
      <div className="col-md-3"><PortfolioCard /></div>
      <div className="col-md-3"><PortfolioCard /></div>
    </div>
  </div>
  )
}

Portfolio.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.object),
  tags: PropTypes.arrayOf(PropTypes.object),

}