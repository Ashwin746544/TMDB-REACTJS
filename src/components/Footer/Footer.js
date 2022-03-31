import "./Footer.css";
import footerLogo from '../../assets/footer_logo.svg';

const Footer = () => {
  return (
    <div className="container-fluid footer mt-5">
      <div className="container">
        <div className="row gx-5">
          <div className="col-4 d-flex flex-column align-items-end">
            <div className="footer-logo">
              <img src={footerLogo} alt="logo" />
            </div>
            <div className="name__container">
              <p>Hi Ashwin Chaudhary!</p>
            </div>
          </div>
          <div className="col-8 pt-5">
            <div className="row gx-5">
              <div className="col-auto">
                <h5>THE BASICS</h5>
                <p>About TMDB</p>
                <p>Contact Us</p>
                <p>Support Forums</p>
                <p>API</p>
                <p>System Status</p>
              </div>
              <div className="col-auto">
                <h5>GET INVOLVED</h5>
                <p>Contribution Bible</p>
                <p>Add New Movie</p>
                <p>Add New TV Show</p>
              </div>
              <div className="col-auto">
                <h5>COMMUNITY</h5>
                <p>Guidelines</p>
                <p>Discussions</p>
                <p>Twitter</p>
              </div>
              <div className="col-auto">
                <h5>LEGAL</h5>
                <p>Terms of Use</p>
                <p>API Terms of Use</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;