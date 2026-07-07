// FILE: components/Footer.jsx
export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand"><span className="mark" />BestBean</div>
            <p>Technology consulting and solutions for education, government, and enterprise across Africa.</p>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <ul><li><a href="#about">About</a></li><li><a href="#consulting">Consulting</a></li><li><a href="#insights">Insights</a></li><li><a href="#contact">Contact</a></li></ul>
          </div>
          <div className="foot-col">
            <h5>Solutions</h5>
            <ul><li><a href="#solutions">Government Technology</a></li><li><a href="#solutions">Educational Technology</a></li><li><a href="#solutions">Smart Classrooms</a></li><li><a href="#engagements">ExamSphere</a></li></ul>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <ul><li><a href="mailto:hello@bestbeanltd.com">hello@bestbeanltd.com</a></li><li><a href="#contact">Victoria Garden City, Lagos</a></li></ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="foot-copy">© 2026 BestBean Ltd. All rights reserved.</div>
          <div className="foot-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
        </div>
      </div>
    </footer>
  );
}
