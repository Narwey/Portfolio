"use client";
import { useState, useEffect,useRef } from 'react';
import Styles from "../styles/header.module.css";
import useSmoothScroll from '../hooks/useSmoothScroll';


export default function Header() {
  useSmoothScroll();
  const [menu, setMenu] = useState(false);
  function toggleMenu() {
    setMenu(!menu);
  }
  const navbarRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      let prevScrollpos = window.pageYOffset;
      
      window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        let navbar = navbarRef.current;
        
        if (navbar) {
          if (prevScrollpos > currentScrollPos) {
            navbar.style.top = "0";
          } else {
            navbar.style.top = "-20rem";
          }
        }
        prevScrollpos = currentScrollPos;
      };
      
      // Cleanup on component unmount
      return () => {
        window.onscroll = null;
      };
    }
  }, []);
  
  return (
    <header ref={navbarRef} className={Styles.container} id='#navbar'>
      <div className={Styles.header_cont}>
        <div className={Styles.header_content}>
          <div className={Styles.header_content_upper}>
            <div className={Styles.header_left}>
              <a href="/" className={Styles.header_name}>
                <img src="./mylogo.webp" alt="Logo" className={Styles.logo} />
                <span>BENMBARK ANOUAR</span>
              </a>
            </div>
            <button className={Styles.menu_btn} type="button" onClick={toggleMenu}>
              {menu ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>            
              : 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>          
              }
            </button>
          </div>
          <ul className={`${!menu && Styles.hidden} ${Styles.header_right}`}>
            <li className={Styles.header_list_element}><a href="#Home">Home</a></li>
            <li className={Styles.header_list_element}><a href="#About">About</a></li>
            <li className={Styles.header_list_element}><a href="#Projects">Project</a></li>
            <li className={Styles.header_list_element}><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
