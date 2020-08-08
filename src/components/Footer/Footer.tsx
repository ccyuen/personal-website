import React, { PureComponent } from 'react';
import { Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

import Links from '../../assets/text/Links.json';
import './Footer.scss';

class Footer extends PureComponent {
  // eslint-disable-next-line class-methods-use-this
  render(): JSX.Element {
    return (
        <footer className="Footer">
            <Link href={Links.GitHub} target="_blank">
              <div>
                <GitHubIcon/>
                <p>
                ccyuen
                </p>
              </div>
            </Link>
            <Link href={Links.LinkedIn} target="_blank">
              <div>
                <LinkedInIcon/>
                <p>
                clementyuen
                </p>
              </div>
            </Link>
            <Link href={Links.Email} target="_blank">
              <div>
                <EmailIcon/>
                <p>
                clementchaoyuen
                </p>
              </div>
            </Link>
        </footer>
    );
  }
}

export default Footer;
