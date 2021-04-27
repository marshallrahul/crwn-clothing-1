import React from 'react';
import { withRouter } from "react-router-dom";

import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div 
        className={`${size} menu-item`} 
        onClick={() => {
            history.push(`${match.url}${linkUrl}`)
        }}
    >
        <div className="bg-photo" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="sub-title">SHOP NOW</div>
        </div>
    </div>
);

export default withRouter(MenuItem); 