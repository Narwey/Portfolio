"use client";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Styles from "../styles/footer.module.css";

export default function Footer() {
  useSmoothScroll();
  let date = new Date().getFullYear(); 
  return (
    <footer className={Styles.container}>
      <div className={Styles.footer_cont}>
        <div className={Styles.footer_upper}>
          <div className={Styles.footer_left}>
            <h2 className={Styles.footer_left_header}>
              BENMBARK ANOUAR
            </h2>
            <p className={Styles.footer_left_description}>
            Driven Full Stack Developer skilled in overseeing projects from concept to completion, I excel at designing and implementing web solutions that resolve complex business challenges for companies seeking to improve user interaction and operational efficiency.
            </p>
          </div>
          <div className={Styles.footer_right}>
            <h2 className={Styles.footer_right_header}>
                Socials
            </h2>
            <div className={Styles.footer_socials}>
              <div className={Styles.footer_social}>
                <a href="https://www.linkedin.com/in/anouarben/" className={Styles.footer_social_link} target="_blank" rel="noreferrer">
                  <img src="/linkedin-dark.svg" alt="linkedin" className={Styles.footer_social_icon} />
                </a>
              </div>
              <div className={Styles.footer_social}>
                <a href="https://github.com/Narwey" className={Styles.footer_social_link} target="_blank" rel="noreferrer">
                  <img src="/github-dark.svg" alt="github" className={Styles.footer_social_icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.copyright}>
          © Copyright {date}. Made by BENMBARK ANOUAR
        </div>
      </div>
    </footer>
  );
}
