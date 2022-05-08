import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faAtom,
  faBed,
  faCarRear,
  faPerson,
  faPlane,
  faTaxi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import React, { useState } from "react";
import style from "./Header.module.scss";
import Counter from "../Counter/Counter";

const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    childrens: 0,
    room: 1,
  });

  const changeCounterVal =(name, val)=>{
    setOptions({...options,[name]:options[name]+val});
  }


  return (
    <div className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerList}>
          <div className={`${style.headerListItem} ${style.Active}`}>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className={style.headerListItem}>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className={style.headerListItem}>
            <FontAwesomeIcon icon={faCarRear} />
            <span>Car Rentals</span>
          </div>
          <div className={style.headerListItem}>
            <FontAwesomeIcon icon={faAtom} />
            <span>Attractions</span>
          </div>
          <div className={style.headerListItem}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className={style.headerTitle}>
          A lifetime of discounts? It's Genius.
        </h1>
        <p className={style.headerDesc}>
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Booking.com account
        </p>
        <button className={style.headerBtn}>Sign in / Register</button>
        <div className={style.headerSearch}>
          <div className={style.headerSearchItem}>
            <FontAwesomeIcon icon={faBed} className={style.headerIcon} />
            <input
              type="text"
              placeholder="Where are you going?"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
              className={style.headerSearchInput}
            />
            {searchData && (
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setSearchData("")}
                className={style.headerSearchIcon}
              />
            )}
          </div>
          <div className={style.headerSearchItem}>
            <FontAwesomeIcon
              icon={faCalendarDays}
              className={style.headerIcon}
            />
            <span
              className={style.headerSearchText}
              onClick={() => setOpenDate(!openDate)}
            >{`${format(date[0].startDate, "eee, MMM dd")}
                 - ${format(date[0].endDate, "eee, MMM dd")}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className={style.datePicker}
              />
            )}
          </div>
          <div className={style.headerSearchItem}>
            <FontAwesomeIcon icon={faPerson} className={style.headerIcon} />
            <span
              className={style.headerSearchText}
              onClick={() => setOpenOptions(!openOptions)}
            >{`${options.adults} adults - ${options.childrens} childrens - ${options.room} room`}</span>
            {openOptions && <div className={style.counterPopup}>
                <Counter counterName={"adults"} defaultVal={1} handleCounter={changeCounterVal} counter={options.adults}/>
                <Counter counterName={"childrens"} defaultVal={0} handleCounter={changeCounterVal} counter={options.childrens}/>
                <Counter counterName={"room"} defaultVal={1} handleCounter={changeCounterVal} counter={options.room}/>
              </div>}
          </div>
          <div className={style.headerSearchItemBtn}>
            <button className={style.headerBtn}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
