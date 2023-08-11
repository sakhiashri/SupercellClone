import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<div className="hero z-1 position-absoute">
<div className="navbar">
    <img className='navbar-logo' src="https://supercell.com/_next/static/media/supercell_logo.38ec5826.webp" alt="" />
    <ul className='d-flex justify-content-between my-auto w-full bg-primary w'> 
      <div className='text-header'>
        <li><a href="#">Games</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">About us</a></li>
      </div>
      <div className="icon-nav">
        <li>
        <img className='icon-nav-cell' src="https://supercell.com/_next/static/media/supercell_creators_grey.f699541d.svg" alt="" srcset="" />
        </li>
        <li>
        <img className='icon-nav-cell' src="https://supercell.com/_next/static/media/supercell_creators_grey.f699541d.svg" alt="" srcset="" />
        </li>
        <li>
        <img className='icon-nav-cell' src="https://supercell.com/_next/static/media/supercell_creators_grey.f699541d.svg" alt="" srcset="" />
        </li>
        
        {/* <img className='icon-nav-cell' src="https://supercell.com/_next/static/media/supercell_make_grey.964b2d8d.svg" alt="" srcset="" />
        <img className='icon-nav-cell' src="https://supercell.com/_next/static/media/supercell_id_grey.62affa0b.svg" alt="" srcset="" /> */}
      </div>
    </ul>
  </div>
</div>

    {/* <div classNameName='body'>
    <img classNameName='i' src="coc.png" alt="" />
     <nav className="navbar">
      
      
      
    </nav>
    
    
    </div> */}


<div className="gambar">
    <img className='image' src="p.png" alt="" />
    <img className='image' src="k.png" alt="" />
    </div>




      {/* <h1>Vite + React</h1> */}

      

      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App