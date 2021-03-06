import './topbar.scss';
import '../../App.scss';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}> 
            {/* Inner wrapper for flex  */}

            <div className='wrapper'>

                {/* Left side of topbar  */}
                <div className='left'>
                    <a href='/introduction'>
                        <img src='Assets/topbar-logo.png' alt=''/>
                    </a>
                </div>

                {/* Middle section of the top bar  */}
                <div className='middle'>
                    <div className='links'>
                            <a target='_blank' rel='noreferrer' href='https://github.com/jimjamesjimathy'>
                                <i className='fab fa-github'></i>
                            </a>
                            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jimjamesjimathy/'>
                                <i className='fab fa-linkedin'></i>
                            </a>
                            <a target='_blank' rel='noreferrer' href='https://www.instagram.com/jim.james.jimathy/'>
                                <i className='fab fa-instagram'></i>
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
