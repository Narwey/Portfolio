"use client";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Styles from "../styles/about_me.module.css";

export default function AboutMe() {
  useSmoothScroll();

  const skills: { [key: string]: string[] } = {
    "Frontend Backend": [ 
      "HTML/CSS",
      "TailwindCss",
      "Bootstrap",
      "React.js/Next.js",
      "Angular",
      "Node.js/Express.js",
      "Livewire",
      "jQuery",  
      "DOM",  
      "Laravel", 
    ],
    "Programming languages": [
      "JavaScript/TypeScript",  
      "PHP",
      "Java",
      "C/C++", 
      "SQL",
    ],
    "Database": [
      "MySQL", 
      "MongoDB",
    ]
  };
  

  return (
    <div className={Styles.container} id="About">
      <div className={Styles.about_me_cont}>
        <h1 className={Styles.about_me_upper}>
          <span className={Styles.about_me_header}>
            About me
          </span>
          <span className={Styles.about_me_subheader}>
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
          </span>
        </h1>
        <div className={Styles.about_me_lower}>
          <div className={Styles.about_me_left}>
            <h1 className={Styles.about_me_left_header}>Get To Know Me</h1>
            <div className={Styles.about_me_left_description}>
              <p>
                As a passionate Full Stack Developer, I have a diverse background in building robust web applications. I worked with various tech stacks, including <span className={Styles.important}>Php / Laravel</span>, <span className={Styles.important}>Mern Stack ( React.js , Express.js , mongoose , node.js )</span>, and the <span className={Styles.important}>Next.js</span>. This versatility allows me to adapt to different project requirements and deliver high-quality solutions that meet unique client needs.
              </p>
              <p>
                In addition to my proficiency with these frameworks, I have experience with multiple databases such as <span className={Styles.important}>MySQL, MongoDB</span>. This knowledge enables me to design and implement scalable and efficient data storage solutions. I am committed to continuous learning and staying updated with the latest industry trends, which helps me incorporate cutting-edge technologies and best practices into my work.
              </p>
              <p>
                I am open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then dont hesitate to contact me.
              </p>
            </div>
            <a href="#Contact" className={Styles.about_me_left_contact}>Contact</a>
          </div>
          <div className={Styles.about_me_right}>
            <h1 className={Styles.about_me_left_header}>Skills</h1>
            <div className={Styles.about_me_right_skills}>
              {Object.keys(skills).map((category, index) => (
                <div key={index}>
                  <h3 className={Styles.about_me_right_skill_title}>{category}</h3>
                  <div className={Styles.about_me_right_skill_grouped_list}>
                    {skills[category].map((skill, skillIndex) => (
                      <div key={skillIndex} className={Styles.about_me_right_skill}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
