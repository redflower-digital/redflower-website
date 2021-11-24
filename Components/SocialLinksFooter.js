import React from 'react';
import { Facebook } from '../public/Icons/Facebook';
import { Instagram } from '../public/Icons/Instagram';
import socialStyles from '../styles/Footer.module.css';

function SocialLinksFooter() {
    return (
        <div className={socialStyles.socialLinks}>
            <a href="https://www.facebook.com/Redflowerdebarras/" target="blank">
                <div className={socialStyles.facebook}>
                    <Facebook />
                </div>
            </a>
            <a href="https://www.instagram.com/redflower_debarras?utm_medium=copy_link" target="blank">
                <div className={socialStyles.instagram}>
                    <Instagram />
                </div>
            </a>
        </div>
    )
}

export default SocialLinksFooter
