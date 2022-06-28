import React from 'react';
import Link from 'next/link';
import { Facebook } from '../public/Icons/Facebook';
import { Instagram } from '../public/Icons/Instagram';
import socialStyles from '../styles/Nav.module.css';

function SocialLinks() {
    return (
        <li className={socialStyles.socialLinks}>
            <Link href="https://www.facebook.com/Redflowerdebarras/" target="blank">
                <div className={socialStyles.socialLinkContainer} >
                    <div className={socialStyles.facebook}>
                        <Facebook />
                    </div>
                    <p className={socialStyles.socialLinkName} >Facebook</p>
                </div>
            </Link>
            <Link href="https://www.instagram.com/redflower_debarras?utm_medium=copy_link" target="blank">
                <div className={socialStyles.socialLinkContainer} >
                    <div className={socialStyles.instagram}>
                        <Instagram />
                    </div>
                    <p className={socialStyles.socialLinkName} >Instagram</p>
                </div>
            </Link>
        </li>
    )
}

export default SocialLinks
