import React from 'react'

function Support() {
  return (
    <Content/>
  )
}

function Content() {
    return(
        <>
        <div>
            <img className='w-100 z-1 position-absolute' src="https://supercell.com/_next/static/media/support_hero.4a0d6d1b.webp" width='10px' height='600px'/>
            <p className="support z-2 fw-bold text-light" style={{ fontFamily:'serif' }}>Support</p>
        </div>
        </>
    )
}

export default Support;