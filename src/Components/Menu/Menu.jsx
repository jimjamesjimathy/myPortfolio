import './menu.scss';

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href='#introduction'>Home</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href='#portfolio'>Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href='#works'>Photos</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href='#reviews'>Reviews</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}
