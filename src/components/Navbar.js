import './navbar.css';
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (

        <nav id="navbar">

            <div className="same-style">
            <img src="https://flowbite.com/docs/images/logo.svg" alt=""/>
            <h1>GeekFoods</h1>
            </div>

            <div className="same-style" >
                <p ><NavLink to='/' className='different-style' >Home</NavLink></p>
                <p ><NavLink to='/quotes'  className='different-style' >Quote</NavLink></p>
                <p ><NavLink  className='different-style' to='/restaurant'>Restaurants</NavLink></p>
                <p ><NavLink  className='different-style' to='/food' > Food</NavLink></p>
                <p ><NavLink  className='different-style' to='/contact' >Contact</NavLink></p>
            </div>

                <button id="btn">Get Started</button>
            
        </nav>
    )
}