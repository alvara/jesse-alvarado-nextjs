import React, {useState} from 'react'
import PropTypes from 'prop-types'

import PortfolioCard from '../widgets/PortfolioCard'
import Pill from '../../common/Pill'

export default function Portfolio({portfolio, tags}) {

  // TODO: Move featured tag to the front of the array
  // move 'featured' tab to the front of the array
  // const featured = tags.find(tag => tag.title === "featured");

  const [selected, setSelected] = useState("featured")



  return (
    <div id="portfolio" className="h-100 text-center d-flex flex-column justify-content-center">
    <h1><strong>Projects</strong>  I&apos;ve worked on</h1>
    <div className='row'>
      <div className='col'>
          {tags.length > 0 && tags.map(
            ({title, slug, _id}) => (
              <Pill key={_id} title={title} active={selected === slug}  />
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