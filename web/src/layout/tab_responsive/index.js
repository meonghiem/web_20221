// import styles from "./tab.module.css";
// import List from "public/svg/list.svg";
import { useState } from "react";
export default function TabRes(tabName, tabChild) {
  const [show, setShow] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const dropbtnStyleHover = {
    backgroundColor: isHover ? "#555" : "inherit",
  };

  const dropContentSyleHover = {
    display: isHover ? "block" : "none",
  };
  const func = () => {
    setShow(!show);
  };
  return (
    <>
      <div className={`topnav ${show ? "responsive" : ""}`} id="myTopnav">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <div className="dropdown">
          <button
            className="dropbtn"
            style={dropbtnStyleHover}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Dropdown
            {/* <i class="fa fa-caret-down"></i> */}
          </button>
          <div
            className="dropdown_content"
            style={dropContentSyleHover}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            {/* {tabName.map((tab, index) => {
            return <div key={index}>{tab}</div>;
          })} */}
          </div>
        </div>
        {/* <a href="#about">About</a> */}
        <a
          href="javascript:void(0);"
          style={{ fontSize: "15px" }}
          className="icon"
          onClick={() => {
            func();
          }}
        >
          <svg
            width="50"
            height="20"
            viewBox="0 0 64 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 40H64V32H0V40ZM0 56H64V48H0V56ZM0 24H64V16H0V24ZM0 0V8H64V0H0Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <style>{`.topnav {
    overflow: hidden;
    background-color: #333;
  }
  
  .topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  .active {
    background-color: #04AA6D;
    color: white;
  }
  
  .topnav .icon {
    display: none;
  }
  
  .dropdown {
    float: left;
    overflow: hidden;
  }
  
  .dropdown .dropbtn {
    font-size: 17px;    
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }
  
  .dropdown_content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown_content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  
  .topnav a:hover, .dropdown:hover .dropbtn {
    background-color: #555;
    color: white;
  }
  
  .dropdown_content a:hover {
    background-color: #ddd;
    color: black;
  }
  
  .dropdown:hover .dropdown_content {
    display: block;
  }
  
  @media screen and (max-width: 800px) {
    .topnav a:not(:first-child), .dropdown .dropbtn {
      display: none;
    }
    .topnav a.icon {
      float: right;
      display: block;
    }
  }
  
  @media screen and (max-width: 800px) {
    .topnav.responsive {position: relative;}
    .topnav.responsive .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
    .topnav.responsive .dropdown {float: none;}
    .topnav.responsive .dropdown-content {position: relative;}
    .topnav.responsive .dropdown .dropbtn {
      display: block;
      width: 100%;
      text-align: left;
    }
  }`}</style>
    </>
  );
}
