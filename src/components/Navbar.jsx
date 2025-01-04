import './Navbar.css'

function Navbar(){
    return(
        
        <nav>
           
            <img src="/Logo-AA.png" alt="logo"  className='logo' />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

    )
}

export default Navbar;