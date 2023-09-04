import React from 'react'

function About() {
  return (
    <Content/>
  )
}

function Content() {
    return(
        <>
        <div>
            <img className='w-100 z-1 position-absolute' src="https://supercell.com/_next/static/media/aboutus_hero.64e1d553.webp" width='10px' height='600px'/>
            <p className="about z-2 fw-bold text-light" style={{ fontFamily:'serif' }}>About</p>
        </div>
        </>
    )
}

export default About;