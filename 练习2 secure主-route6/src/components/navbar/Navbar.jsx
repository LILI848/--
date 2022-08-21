import React, { useState } from "react";
import { SiDatabricks } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  //设置菜单功能，点击图标显示菜单；
  //1.设置菜单state；确定菜单显示与否，初始值为布尔值；
  const [nav, setNav] = useState(false);
  //2.绑定点击事件，改变state,取反；注意点击事件应该绑定在div上，而非图标本身，扩大点击范围，便于点击；
  const handleNav = () => {
    setNav(() => {
      return !nav;
    });
  };
  //3.显示菜单需要改变名字为active，要在菜单名上toggle，使用三元运算符；
  //4.当关闭菜单时，修改按钮图标变成x号，使用三元运算符；

  return (
    <div name="top" className="navbar">
      <div className="container">
        <div className="logo">
          {/* 注意，先安装react-icons，常用的icon都在库里直接使用即可 
            npm i react-icons
            引入icon时需要把路径写完整，比如这个图标是在si文件夹内；
            该图标可以直接加classname，方便style；
            */}
          <SiDatabricks className="icon" />
          <h1>Secured</h1>
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/recovery"> Recovery </Link>
          </li>
          <li>
            <Link to="/cloud"> Cloud </Link>
          </li>

          <li>
            <Link to="/contact"> Contact </Link>
          </li>

          <button>Sign in</button>
        </ul>

        <div className="hamburger" onClick={handleNav}>
          {nav ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>
      </div>
    </div>
  );
}
