import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import InfoCard from '../widgets/InfoCard'
export default function Portfolio({portfolio, tags}) {

  // TODO: Move featured tag to the front of the array
  // move 'featured' tab to the front of the array
  // const featured = tags.find(tag => tag.title === "featured");

  // remove tags that are empty

  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])

  useEffect(()=>{
    const filteredItems = portfolio.filter((item) => item.tagList.includes(selected))
    setData(filteredItems)
  },[portfolio, selected])

  return (
    <div id="portfolio" className="h-100 text-center d-flex flex-column justify-content-center">
    <h1><strong>Projects</strong>  I&apos;ve worked on</h1>
    <div className='row'>
      <div className='col'>
          {tags.length > 0 && tags.map(
            ({title, slug, _id}) => (
              <span onClick={()=>setSelected(slug)} key={_id} className={`pill ${selected === slug ? 'active' : ''}`} >{title}</span>
            )
          )}
      </div>
    </div>
    <div className="row ow-cols-sm-4 row-cols-md-3 ">
      {data.length > 0 && data.map(({_id, title,summary, mainImage, tagList})=>
        (
          <div key={_id}><InfoCard className='portfolioCard'  href={'#'} as={'#'} title={title} subtitle={summary} mainImage={mainImage} tags={tagList} /></div>
        )
      )}
    </div>
  </div>
  )
}

Portfolio.propTypes = {
  // Portfolio Tags
  portfolio: PropTypes.arrayOf(PropTypes.object),
  tags: PropTypes.arrayOf(PropTypes.object)
}
