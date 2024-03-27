import {data} from './Data.js'
import React, { useState } from "react";
import './Restaurant.css'
import { ImSpoonKnife } from "react-icons/im";
import { LiaMapMarkerSolid } from "react-icons/lia";


// import React from 'react'

const Restaurant = () => {
    const [hotel, setHotel] = useState(data);

    // function for filterData
  
    const Debounce = function (func, delay) {
      let timer;
  
      return function () {
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    };
  
    const FILTERData = Debounce((name) => {
      // console.log('cosoling', name);
      const filterData = data.filter((item) => {
        if (item.name.toLowerCase().includes(name.trim())) {
          return true;
        }
        return false;
      });
      // console.log("hello",filterData);
      setHotel(filterData);
    }, 500);
  
    function debounce(e) {
      FILTERData(e.target.value);
    }
  
    // function for rating
  
    function updateRatings(e) {
      let obj = [...hotel];
      obj[0].rating = e.target.value;
      setHotel(obj);
    }
    return (
      <div className="cont">
        <div className="upper">
          <div className="one">
            <input
              type="text"
              name="search"
              placeholder="search food"
              onChange={debounce}
            />
          </div>
  
  
          <div className="one">
            <input
              type="number"
              name="rating"
              placeholder="Enter Ratings"
              onChange={updateRatings}
            />
            {/* bkus of single statement we call the function directely */}
          </div>
        </div>
  
        <div className="all_card">
          {hotel.map((item) => {
            return (
  
              <div
                className="card"
                key={item._id.$oid}
                style={{
                  // border: "1px solid black",
                  // padding: "0.5rem",
                  borderRadius: ".5rem",
                  width: "30%",
                  margin: "0.5rem",
                //   boxShadow: "5px 5px 5px yellow",
                  backgroundColor: "#ffffff",
                }}
              >
                <div className="name_sec">
                  <h5>{item.name}</h5>
                  <span>Rrating:{item.rating}</span>
                </div>
                <div className="adds">
                  <span><LiaMapMarkerSolid />{item.address}</span>
                  <span>{ }</span>
                </div>
                <div className="code">
                  <span>{item.outcode}</span>
                  <span>{item.postcode}</span>
                </div>
                <div className="last_sec">
                  <span>
                    <ImSpoonKnife />
                  </span>
                  <span className="types">{item.type_of_food}</span>
                  <p>Visit Menu</p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    );
}

export default Restaurant
