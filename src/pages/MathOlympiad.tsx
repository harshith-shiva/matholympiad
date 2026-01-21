import { useEffect, useState } from "react";
import "../assets/styles/index.css";
import "../assets/styles/bootstrap.min.css";
import "../../public/assets/icons/logo.jpeg"

const MathOlympiad = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countDownDate = new Date("Jan 19, 2026 12:10:09").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <nav className="navbari">
        <div className="navdivi">
          <div className="maini">
            <a href="https://www.psgtech.edu">PSG TECH</a>
          </div>
          <ul className="navbar-r">
            {[
              { text: "Home", link: "#" },
              { text: "Brochure", link: "https://drive.google.com/file/d/1yl0G5YLP-AWkdxj0uPGH4w3GqS4kLegr/view?usp=share_link" },
              { text: "Syllabus", link: "https://drive.google.com/file/d/1Nl8GSDB-M4zCMqQIiUKQ3nn7jGKmpDAk/view?usp=share_link" },
              { text: "Instructions", link: "https://drive.google.com/file/d/17vm0Bkd94Wap11Hy_iyad3nmp3Z5NR4E/view?usp=share_link" },
              { text: "Prize Pool", link: "https://drive.google.com/file/d/1CgrJcjLdOAgx9bM3_ktObkhOgKYSJflL/view?usp=share_link" },
              { text: "Register here", link: "#Register Here" },
              { text: "Contact Us", link: "#Co-ordinators" },
            ].map(({ text, link }) => (
              <li key={text}><a href={link}>{text}</a></li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="alert alert-warning fixed-bottom">
        <h5 className="text-center">
          <b>Registration ends by 23rd January 2026. Spot registrations are not allowed.</b>
        </h5>
      </div>

      {/* <marquee className="scroll">
        <a href="#" style={{ color: "yellow" }}>Venue Details Coming Soon</a>
      </marquee> */}

      <div className="center">
        <h1 style={{ color: "white" }}>PSG Tech Math Olympiad 2024</h1>
        <h1>28th February 2024 (Wednesday)</h1>
        <h1>Organised by</h1>
        <h1>Department of Mathematics</h1>
        <h1>Department of Applied Mathematics and Computational Sciences</h1>
        <h1>PSG Tech Alumni Association</h1>
      </div>

      <div className="launch-time">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit}>
            <p>{value}</p>
            <span>{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
          </div>
        ))}
      </div>

      <section id="Register Here" className="section">
        <div className="container">
          <h2 className="section-title center-heading">REGISTER HERE</h2>
          <div className="row justify-content-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScoAeSYuOFI84nRhF8FFYGv_mDcp9kNvQnx5Yzg8TpC2WBCpA/viewform?embedded=true"
              width="640"
              height="1313"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MathOlympiad;
