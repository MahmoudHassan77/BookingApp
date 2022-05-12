import React from 'react'
import style from "./HeaderNav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderNav = ({title,icon, isActive}) => {
  return (
    <div className={`${style.headerListItem} ${isActive&&style.active}`}>
    <FontAwesomeIcon icon={icon} />
    <span>{title}</span>
  </div>
  )
}

export default HeaderNav;