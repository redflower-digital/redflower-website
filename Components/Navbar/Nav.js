import React, { useState } from 'react';
import Image from "next/image";
import { MenuItems } from "./MenuItems";
import {BurgerMenu} from "../../public/Icons/BurgerMenu";
import {Close} from "../../public/Icons/Close";
import Link from 'next/link';
import SocialLinks from '../SocialLinks';
import navStyles from '../../styles/Nav.module.css';

const Logo = "/img/logo-redflower.png";

export default function Nav() {

    const [menuOpen, setMenuOpen]= useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }
    
    return (
        <nav className={navStyles.Navbar}>
            <Link href='/'>
            <div className={navStyles.logo}>
              <Image              
                alt="Redflower débarras maison & appartement."
                src={Logo}
                layout="fill"
                objectFit="contain"
              />
            </div>
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
