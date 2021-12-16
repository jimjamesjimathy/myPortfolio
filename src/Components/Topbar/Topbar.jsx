import './topbar.scss';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}> 
            {/* Inner wrapper for flex  */}

            <div className='wrapper'>

                {/* Left side of topbar  */}
                <div className='left'>
                    <a href='#introduction' className='logo'>
                        <div className='JK'>
                            <h4>JK</h4>
                        </div>
                        <div className='webDev'>
                            <h4>Web Developement</h4>
                        </div>
                    </a>
                </div>

                {/* Middle section of the top bar  */}
                <div className='middle'>
                    <div className='links'>
                            <a href=''>
                                <i class='fab fa-github'></i>
                            </a>
                            <a href=''>
                                <i class='fab fa-linkedin'></i>
                            </a>
                            <a href=''>
                                <i class='fab fa-instagram'></i>
                            </a>
                    </div>
                </div>

                {/* Right side of topbar  */}
                <div className='right'>
                    <div className='hamburger' onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>

            </div>
        </div>
    )
}
