import React from 'react'
import './progressbar.css'
import { images } from './progressData'

const ProgressBar = (props) => {
  const { html, css3, js, react, redux, node, sass, git } = props

  const progressStyle = [
    {
      style: {
        width: `${html}%`,
      },
    },
    {
      style: {
        width: `${css3}%`,
      },
    },
    {
      style: {
        width: `${js}%`,
      },
    },
    {
      style: {
        width: `${react}%`,
      },
    },
    {
      style: {
        width: `${redux}%`,
      },
    },
    {
      style: {
        width: `${node}%`,
      },
    },
    {
      style: {
        width: `${sass}%`,
      },
    },
    {
      style: {
        width: `${git}%`,
      },
    },
  ]

  return (
    <div className='main-wrapper'>
      <h1>MY SKILLS</h1>
      <div className='row d-flex pb-5'>
        <div className='col-md-3 icon-wrapper pr-0'>
          {images.map((img, key) => (
            <img
              src={img.src}
              alt={img.alt}
              className={img.className}
              key={key}
            />
          ))}
        </div>
        <div className='col-md-6 progress-wrapper'>
          {progressStyle.map((item, key) => (
            <div className='progress-container' key={key}>
              <div className='progress-bar-style' style={item.style}>
                <span className='label-style'>{item.style.width}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
