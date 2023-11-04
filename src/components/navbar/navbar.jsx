import './navbar.scss'

const Navbar = () => {
    return (
        <header>
           <div>

             <div className='logo-wrapper'>
                  <div><img src="echo.png" alt="" /></div>
                  <span>Your Resonance in Every Connection</span>
             </div>

             <div><button>Sign up</button></div>

           </div>
        </header>
      );
}

export default Navbar;