import './Navbar.css'

function Navbar(){
    return(
        
        <nav>
            <img src="/Logo-AA.png" alt="logo"  className='logo' />
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>

    )
}

export default Navbar;