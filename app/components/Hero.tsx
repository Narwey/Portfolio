"use client";
import useSmoothScroll from "../hooks/useSmoothScroll";
// import { useState } from 'react';
import Styles from "../styles/hero.module.css";

export default function Hero() {
  useSmoothScroll();
  return (
    <div className={Styles.container} id="Home">
      <div className={Styles.hero_cont}>
        <div className={Styles.hero_content}>
          <h1 className={Styles.hero_title}>BENMBARK ANOUAR</h1>
          <p className={Styles.hero_description}>
          Driven Full Stack Developer skilled in overseeing projects from concept to completion, I excel at designing and implementing web solutions that resolve complex business challenges for companies seeking to improve user interaction and operational efficiency.
          </p>
          <div className={Styles.hero_btn_cont}>
            <a href="#Projects" className={Styles.hero_btn}>Projects</a>
          </div>
        </div>
        <div className={Styles.mouse_scroll_cont}>
          <div className={Styles.mouse}>
          </div>
        </div>
      </div>
      <div className={Styles.hero_socials}>
        <div className={Styles.hero_social}>
          <a href="https://www.linkedin.com/in/anouarben/" className={Styles.hero_social_link} target="_blank" rel="noreferrer">
            <img src="/linkedin-dark.svg" alt="linkedin" className={Styles.hero_social_icon} />
          </a>
        </div>
        <div className={Styles.hero_social}>
          <a href="https://github.com/Narwey" className={Styles.hero_social_link} target="_blank" rel="noreferrer">
            <img src="/github-dark.svg" alt="github" className={Styles.hero_social_icon} />
          </a>
        </div>
      </div>
    </div>
  );
}
