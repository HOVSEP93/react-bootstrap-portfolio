import React from 'react'
import './services.css'
import { servicesContent } from './servicesContent'

const Services = () => {
  return (
    <div className='container-fluid main-services-wrapper'>
      <div className='container services-wrapper my-5'>
        <h1>my offer to you</h1>
        <div className='row'>
          {servicesContent.map((item, key) => (
            <div className='col-md-4 col-sm-12' key={key}>
              <div className='service-box'>
                <span className={item.className}></span>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
