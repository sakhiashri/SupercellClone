
import '../../src/App.css'
import { Link } from 'react-router-dom';

function HomePage() {


    return (
        <>
            <Content />
        </>
    );
}

function Content() {
    return (
        <>
            <div className="hero z-1 position-absoute">
                <div className="navbar d-flex align-items-center">
                    <div className='d-flex align-items-center'>
                        <img className='navbar-logo' src="https://supercell.com/_next/static/media/supercell_logo.38ec5826.webp" alt="" />
                        <div className='text-header'>
                            <li><Link href="Games" to="Games">Games</Link></li>
                            <li><Link href="Careers" to="/careers">Careers</Link></li>
                            <li><Link href="Support" to="/Support">Support</Link></li>
                            <li><Link href="About Us" to="/About">About Us</Link></li>
                        </div>
                    </div>
                    <ul className='d-flex justify-content-between align-items-center'>
                        <div className="icon-nav ">
                            <li>
                                <img className='icon-nav-cell' src="https://supercell.com/_next/static/media/supercell_creators_grey.f699541d.svg" alt="" srcset="" />
                            </li>
                            <li>
                                <img className='icon-nav-cell' src="https://supercell.com/_next/static/media/supercell_make_grey.964b2d8d.svg" alt="" srcset="" />
                            </li>
                            <li>
                                <img className='icon-nav-cell' src="https://supercell.com/_next/static/media/supercell_id_grey.62affa0b.svg" alt="" srcset="" />
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="coc-container">
                <div className="coc-item">
                    <img src="/public/k.png" alt="k" />
                </div>
                <div className="coc-item">
                    <img src="/public/p.png" alt="k" />
                </div>
                <div className="coc-item">
                    <img src="https://supercell.com/images/d36a2e1b3aeeea9ad0ab95f1927670a7/thumbnail_floodrush.webp" alt="" />
                </div>
                <div className="coc-item">
                    <img src="https://supercell.com/images/0356253987983955085bc55a9b527b57/thumbnail-level-up-shanghai.webp" alt="k" />

                </div>
            </div>

        </>
    )
}
export default HomePage