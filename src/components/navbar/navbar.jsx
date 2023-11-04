import './navbar.scss'

const Navbar = () => {
    return (
        <header>
           <div className="logo">
                <img src="echo.png" alt="" />
           </div>

           <div>Your Resonance in Every Connection</div>
           <div><button>Sign up</button></div>
        </header>
      );
}

export default Navbar;