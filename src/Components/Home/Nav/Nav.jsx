import React, { useState } from "react";
import "./Nav.css";
import LogoImg from '../../../assets/images/brandoraLogo.svg'


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>

      <div className="navbrandora">
        <div id="logoImg" className="container1">
          <img src={LogoImg} alt="" srcSet="" />
        </div>


        <div className={isOpen ? "button_container active" : "button_container"} onClick={toggleMenu} id="toggle">
          <span className="top"></span>
          {/* <span className="middle"></span> */}
          <span className="bottom"></span>
        </div>

        <div className={isOpen ? "overlay open" : "overlay"} id="overlay">
          <nav className="overlay-menu">
            <ul>
              <li>
                <div style={{ display: 'flex' }}>
            
                  <a href="#work">Work</a>
                </div>
              </li>
              <li>
                <div style={{ display: 'flex' }}>
                  <a id="clientulli" href="/">Clients</a>
              

                </div>
              </li>
              <li>
                <div style={{ display: 'flex' }}>
         
                  <a href="/">About</a>
                </div>
              </li>
              <li>
                <div style={{ display: 'flex' }}>
                  <a id="clientulli1" href="/">Contact</a>
        

                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>


     



    </div>
  );
}

export default App;
