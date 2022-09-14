import React from 'react'

const Skills = ({ title, vote }) => {
  return (
    <div>
        <ul className="skills">
          <li>
            {title}
            <span className="votes">{vote}</span>
          </li>
        </ul>
    </div>
  )
}

export default Skills