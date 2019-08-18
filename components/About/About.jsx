import React from "react";
import "./_About.scss";

const ReactMarkdown = require('react-markdown') 
const input = '# This is a header Lee hosu'
 
const About = () => {
    return (
        <div className = "About">
            <ReactMarkdown source={input} />
        </div>
    );
}

export default About;