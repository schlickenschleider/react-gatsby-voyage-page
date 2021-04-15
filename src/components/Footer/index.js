import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { 
    FooterContainer, 
    SocialMedia, 
    SocialLogo, 
    SocialMediaWrap, 
    SocialIcon, 
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink,
} from "./FooterElements"

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        VOYAGE
                    </SocialLogo>
                    <WebsiteRights>VARSOLINE © {new Date().getFullYear()}</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="//www.youtube.com/channel/UC7AArQOS1gDZzaTGUQ2ZcQw" aria-label="Youtube" rel="noopener noreferrer">
                            <FaYoutube />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer