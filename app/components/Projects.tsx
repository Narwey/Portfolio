"use client";
import { type } from "os";
// import { useState } from "react";
import Styles from "../styles/projects.module.css";

export default function Projects() {

    interface Project {
        name: string;
        description: string;
        path: string;
      }

    const projects : Project[] = [
        {
            name: "EcoMarket",
            description: "Collaborating with teams using the agile methodology, ensuring efficient project management and timely delivery of software components.",
            path: "/ecomarket.png"
        },
        {
            name: "E-Commerce Project",
            description: "Developing and maintaining robust web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), focusing on both front-end and back-end development to deliver full-stack solutions",
            path: "/haven.png"
        },
        {
            name: "Weather App",
            description: "Built a Weather App using Js Native ,where users can check the weather for there city and any other city",
            path: "/weatherapp.png"
        },
    ]

  return (
    <div className={Styles.container} id="Projects">
      <div className={Styles.projects_cont}>
        <h1 className={Styles.projects_upper}>
          <span className={Styles.projects_header}>
            Projects
          </span>
          <span className={Styles.projects_subheader}>
            Here you will find some of the personal and clients projects that I created or contribute to it
          </span>
        </h1>
        <div className={Styles.projects_list}>
            {projects.map((project, index) => {
                return (
                    <div key={index} className={Styles.project_row}>
                        <img src={project.path} alt="Software Screenshot" className={Styles.project_image} loading="lazy" />
                        <div className={Styles.project_content}>
                            <h3 className={Styles.project_header}>{project.name}</h3>
                            <p className={Styles.project_description}>{project.description}</p>
                            {/* <button type="button" className={Styles.project_btn}>Use cases</button> */}
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
}
