import React, { useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaHome, FaStar, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.scss";

const sidebarNavItems = [
  {
    display: "Principal",
    icon: <FaHome />,
    to: "/",
    section: "",
  },
  {
    display: "Monitores",
    icon: <FaStar />,
    to: "/monitores",
    section: "monitores",
  },
  {
    display: "Monitorias",
    icon: <FaCalendarAlt />,
    to: "/monitorias",
    section: "monitorias",
  },
  {
    display: "User",
    icon: <FaUser />,
    to: "/user",
    section: "user",
  },
];

const Sidebar = () => {
    const [activeIndex, setActiveIndex]= useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
      setTimeout(()=>{
        const sidebarItem=sidebarRef.current.querySelector('.sidebar_menu_item');
        indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
        setStepHeight(sidebarItem.clientHeight);
      },50);
    }, []);

    useEffect(() => {
      const curPath = window.location.pathname.split('/')[1];
      const activeItem =sidebarNavItems.findIndex(item => item.section === curPath);
      setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location])

  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        <img
          src="https://res.cloudinary.com/dgzfc4clj/image/upload/v1653247137/Logo_iha7gc.png"
          style={{ width: "100px", display: "flex", align: "center" }}
          alt="logo"
        />
      </div>
      <div ref={sidebarRef} className="sidebar_menu">
            <div
                ref={indicatorRef}
                className="sidebar_menu_indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
        {
            sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
              <div className={`sidebar_menu_item ${activeIndex === index ? 'active' : ''}`}>
              <div className="sidebar_menu_item_icon">{item.icon}</div>
              <div className="sidebar_menu_item_text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
