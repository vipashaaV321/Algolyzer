
import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <nav>
            <ul>
              <li>
               
              </li>
              {/* <li>
                <a
                  href="https://presentation.creative-tim.com?ref=nudr-footer"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://blog.creative-tim.com?ref=nudr-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li> */}
            </ul>
          </nav>
          <div className="copyright">
            &copy; {1900 + new Date().getYear()}, Developed by{" "}
            {"& "}  
            Maintained by{" "}
            <a
              href="https://github.com/vipashaaV321"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vipasha Vaghela
            </a>
          
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
