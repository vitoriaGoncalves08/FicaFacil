import React from "react";
import { Link } from "react-router-dom";
import { Tooltip, IconButton, Zoom,} from "@material-ui/core";

import {
  FaSearch,
  FaChartPie,
  FaGraduationCap,
  FaSignOutAlt,
  FaArrowDown,
  FaUserShield,
  FaHome,
  FaCog
} from "react-icons/fa";

export function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export default function Navbar() {
  const [user, setUser] = React.useState({ nomeAdministrador: "Usuario" });

  React.useEffect(() => {
    if (localStorage.getItem("auth")) {
      let user = parseJwt(localStorage.getItem("auth"));
      setUser(user);
    }
  }, []);
  return (
    <nav className="c-navbar">
      <ul className="c-navbar__menu">
        <li className="c-navbar__menu-item sc">
          <div className="c-navbar__search">
            <FaSearch className="icon" />
          </div>
          <input
            type="text"
            className="c-navbar__input-search"
            placeholder="Pesquisar..."
          />
          <span className="c-navbar__tooltip">Pesquisar</span>
        </li>
        <li className="c-navbar__menu-item">
          <Link to="/">
            <div className="space">
              <FaHome className="icon" />
              <span className="c-navbar__links-name">Home</span>
            </div>
          </Link>
          <span className="c-navbar__tooltip">Home</span>
        </li>
        <li className="c-navbar__menu-item">
          <Link to="/dashboardAdm">
            <div className="space">
              <FaChartPie className="icon" />
              <span className="c-navbar__links-name">Dashboard</span>
            </div>
          </Link>
          <span className="c-navbar__tooltip">Dashboard</span>
        </li>
        <li className="c-navbar__dropdown">
          <div className="c-navbar__menu-item">
            <Link to="/questao">
              <div className="space">
                <FaGraduationCap className="icon" />
                <span className="c-navbar__links-name">Criar Questão</span>
                <FaArrowDown className="arrow icon" />
              </div>
            </Link>
            <span className="c-navbar__tooltip">Criar Questão</span>
          </div>
          <ul className="c-navbar__sub-menu">
            <li className="c-navbar__menu-item">
              <Link className="c-navbar__link-name" to="/questao">
                Questão
              </Link>
            </li>
            <li className="c-navbar__menu-item">
              <Link to="/materias">Matérias</Link>
            </li>
            <li className="c-navbar__menu-item">
              <Link to="/dificuldade">Dificuldade</Link>
            </li>
            <li className="c-navbar__menu-item">
              <Link to="/universidade">Universidade</Link>
            </li>
          </ul>
        </li>
        <li className="c-navbar__menu-item">
          <Link to="/configAdm">
            <div className="space">
              <FaCog className="icon" />
              <span className="c-navbar__links-name">Configurações</span>
            </div>
          </Link>
          <span className="c-navbar__tooltip">Configurações</span>
        </li>
        <li className="c-navbar__profile">
          <div className="c-navbar__image-profile">
          {/* {user !== "" && user.nomeAdministrador.charAt(0).toUpperCase()} */}
          <FaUserShield />
          </div>
            <div className="c-navbar__name-job">
              <div className="name">{user.nomeAdministrador.split(" ")[0]}</div>
            </div>
          <Tooltip
            title="Sair"
            TransitionComponent={Zoom}
            className="c-navbar__log-out icon"
          >
            <IconButton
              style={{ background: "transparent" }}
              onClick={() => {
                localStorage.removeItem("auth");
                localStorage.removeItem("user");
                window.location.reload();
              }}
            >
              <FaSignOutAlt className="icon" />
            </IconButton>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
}
