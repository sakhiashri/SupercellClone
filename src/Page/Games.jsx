import React from 'react'

function Games() {
  return (
    <Content/>
  )
}

function Content() {
    return(
        <>
        <div>
            <img className='w-100 z-1 position-absolute' src="https://supercell.com/_next/static/media/bg_hero_games.7544fb6c.webp"/>
            <p className="games z-2 fw-bold" style={{ fontFamily:'serif' }}>GAMES</p>
        </div>
        </>
    )
}

export default Games;