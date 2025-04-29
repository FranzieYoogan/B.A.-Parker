import './assets/css/footer.css';
import twitter from './assets/images/icons/twitter.png';
import instagram from './assets/images/icons/instagram.png';
import linkedin from './assets/images/icons/linkedin.png';
import { useState } from 'react';

function Footer() {

    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

    return (
        <footer className="footerStyle">
        <div className="containerAllFooter">

            <div>
            <p>Powered by Squarespace</p>
            </div>

            <div className='containerSocials'>

            <div
                onMouseEnter={() => setHoveredIcon('twitter')}
                onMouseLeave={() => setHoveredIcon(null)}
            >
                <img src={twitter} className={`twitterStyle socialIcon 
                    ${hoveredIcon && hoveredIcon !== 'twitter' ? 'dimmed' : ''}`} alt="twitter" />
            </div>

            <div onMouseEnter={() => setHoveredIcon('instagram')}
                onMouseLeave={() => setHoveredIcon(null)}>

                <img src={instagram} className={`instagramStyle socialIcon 
                    ${hoveredIcon && hoveredIcon !== 'instagram' ? 'dimmed' : ''}`} alt="instagram" />

                </div>

            <div onMouseEnter={() => setHoveredIcon('linkedin')}
                onMouseLeave={() => setHoveredIcon(null)}>

                <img src={linkedin} className={`linkedinStyle socialIcon
                    ${hoveredIcon && hoveredIcon !== 'linkedin' ? 'dimmed' : ''}`} alt="linkedin" />

                </div>


            </div>
            
        </div>
        </footer>
    );

}

export default Footer;