import React from 'react'
import PortfolioCard from '../widgets/PortfolioCard'

export default function Portfolio() {
  return (
    <div id="portfolio" className="h-100 text-center d-flex flex-column justify-content-center">
    <h1><strong>Projects</strong>  I&apos;ve worked on</h1>
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
