import React from 'react';
import { Box, Link, SvgIcon } from '@material-ui/core';
import './FooterLink.scss';

interface LinkProps {
  linkText: string,
  linkURL: string,
  linkIcon: typeof SvgIcon
}

const FooterLink = (props: LinkProps): React.SFCElement<LinkProps> => (
    <Box>
        <Link className="footer-link" variant="body1" href={props.linkURL} target="_blank">
            <Box className="link-content">
                <props.linkIcon className="link-icon"/>
                <Box className="link-text" >{props.linkText}</Box>
            </Box>
        </Link>
    </Box>
);

export default FooterLink;
