import React, { useState } from 'react';
import { MenuItems } from "./MenuItems";
import Logo from "../../public/img/logo-redflower.png";
import {BurgerMenu} from "../../public/Icons/BurgerMenu";
import {Close} from "../../public/Icons/Close";
import Link from 'next/link';
import SocialLinks from '../SocialLinks';
import navStyles from '../../styles/Nav.module.css';

export default function Nav() {

    const [menuOpen, setMenuOpen]= useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }
    
    return (
        <nav className={navStyles.Navbar}>
            <Link href='/'>
                <img className={navStyles.logo} src={Logo} alt="logo redflower débarras"/>
            </Link>
            <div className={navStyles.menuIcon} onClick={handleClick}>
                {menuOpen ? <Close /> : <BurgerMenu />}
            </div>
            <ul className= {menuOpen ? `${navStyles.active}`: `${navStyles.navMenu}`} >
                {MenuItems && MenuItems.map((item,index) => {
                    return (
                        <li key={index}>
                            <Link
                            href={item.url} key={index}>
                                <a className= {navStyles.navLinks} onClick={e => setMenuOpen(false)}>
                                    {item.title}
                                    <span className={navStyles.linkBorder} />
                                </a>
                            </Link>
                        </li>
                    )
                })}
                <SocialLinks />
            </ul>       
        </nav>
    )
}
