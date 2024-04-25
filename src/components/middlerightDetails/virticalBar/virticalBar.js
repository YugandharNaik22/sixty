import React from "react";

import '../sidebarRight.css'

function Timeline() {
  return (
    <div className="timeline">
        <div className="dot-and-line-container">
        <h1 className="dot-for-showing-Date">.</h1>
        <h3>Feb 12 2024</h3>
        </div>
        <div className="massage-container">
        <h1 className="recent">Industrial Production</h1>
            <p>Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the same month last year. Electricity has seen the slowest growth of 1.2% YoY in December as compared to 10.4% YoY growth in the same month last year.</p>
        </div>
    </div>
  );
}

export default Timeline;
