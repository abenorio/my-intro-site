import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">ホーム</Link></li>
        <li><Link to="/hobby">趣味</Link></li>
        <li><Link to="/contact">連絡先</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
