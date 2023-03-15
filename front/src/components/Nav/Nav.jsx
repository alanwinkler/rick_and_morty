import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div className={style.container}>
      <div className={style.about}>
        <Link to="/about">About</Link>
      </div>
      <div className={style.home}>
        <Link to="/home">Home</Link>
      </div>
      <div className={style.favorites}>
        <Link to="/favorites">Favorites</Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
