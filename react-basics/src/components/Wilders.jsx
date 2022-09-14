import React from "react";
import blank_profile from "../assets/blank_profile.png";
import Skills from "./Skills";
import wildersData from "../data";

const Wilders = ({ name, city, skills }) => {
  return (
    <div>
      <article className="card">
        <img src={blank_profile} alt="Jane Doe Profile" />
        <h3>{name}</h3>
        <h3>{city}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h4>Wild Skills</h4>

        {/* // MAP NESTED ARRAY - DON'T ADJUST SKILLS BY NAME / ONLY SHOW ALL SKILLS
        {wildersData &&
          wildersData.map((item, index) => {
            return (
              <div key={index}>
                {item.skills.map((skill, index) => {
                  return (
                    <Skills
                      key={index}
                      title={skill.title}
                      vote={skill.votes}
                    />
                  );
                })}
              </div>
            );
          })} */}

        <h4>Wild Skills</h4>
        {skills &&
          skills.map((skill, index) => (
            <Skills key={index} title={skill.title} vote={skill.votes} />
          ))}
      </article>
    </div>
  );
};

export default Wilders;
