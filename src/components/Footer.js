import React, { Component} from 'react';
import '../styles/Footer.scss';

class Footer extends Component{
  render() {
    return (
    <div className="footer-container">
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <ul>
                        <li>Text link</li>
                        <li>Text link</li>
                        <li>Text link</li>
                        <li>Text link</li>
                        <li>Text link</li>
                        <li>Text link</li>
                    </ul>
                </div>
                <div className="col-sm-4">
                    <ul>
                        <li>Text link</li>
                        <li>Text link</li>
                        <li>Text link</li>
                        <li>Text link</li>
                        <li>Text link</li>
                        <li>Text link</li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <ul>
                        <li>Text link</li>
                        <li>Text link</li>
                        <li>Text link</li>
                        <li>Text link</li>
                        <li>Text link</li>
                        <li>Text link</li>
                    </ul>
                </div>
            </div>
            <div className="footer-credits">
                <p>Copyright 2019</p>
            </div>
        </div>
    </div>
      );
  }
}

export default  Footer;
