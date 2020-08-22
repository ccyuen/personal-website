import React from 'react';
import { Box, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import FooterLink from './Link/FooterLink';
import LinkText from '../../assets/text/Links.json';
import './Footer.scss';

class Footer extends React.PureComponent {
  render(): JSX.Element {
    return (
        <footer className="footer">
          <Box>
            <Typography className="footer-card" variant="h4">
              Have a good day, everyday :)
            </Typography>
          </Box>
          <Box className="footer-links">
            {FooterLink({ linkText: 'GitHub', linkURL: LinkText.GitHub, linkIcon: GitHubIcon })}
            {FooterLink({ linkText: 'LinkedIn', linkURL: LinkText.LinkedIn, linkIcon: LinkedInIcon })}
            {FooterLink({ linkText: 'Email', linkURL: LinkText.Email, linkIcon: EmailIcon })}
          </Box>
        </footer>
    );
  }
}

export default Footer;
