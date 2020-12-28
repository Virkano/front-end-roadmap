import React from "react";
export default function Header() {
  return (
    <div className="header">
      <div className="top">
        <span className="github-button">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=virkano&repo=front-end-roadmap&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="170"
            height="30"
            title="GitHub"
          ></iframe>
        </span>
      </div>
      <div className="title">
        <span className="text">
          前端学习路线
          <span className="emoji">
            <span role="img" aria-label="line">🧶</span>
            <span role="img" aria-label="road">🦌</span>
          </span>
        </span>
      </div>
      <div className="sub-title"><span role="img" aria-label="workholic">👨🏻‍💻</span> 好好学习，天天敲代码 <span role="img" aria-label="workholic">👨🏻‍💻</span></div>
    </div>
  );
}
