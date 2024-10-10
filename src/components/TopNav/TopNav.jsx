import React, { useEffect, useState } from "react";
import { TiThList } from "react-icons/ti";
import "./TopNav.css";
import { useDispatch, useSelector } from "react-redux";
import { filterData } from "../../Actions/DataAction"; // Changed selectData to filterData
import DisImg from '../../Assets/Display.svg'
const getGroupSetting = () => {
  return localStorage.getItem("group") || "status"; // Simplified the logic
}

const getOrderSetting = () => {
  return localStorage.getItem("order") || "priority"; // Simplified the logic
}

const NavigationBar = () => { // Changed TopNav to NavigationBar
  const [isDropdownVisible, setDropdownVisible] = useState(false); // Renamed state
  const dispatch = useDispatch();
  const { allTickets, allUsers } = useSelector(state => state.dataReducer); // Changed DataReducer to dataReducer
  const [groupValue, setGroupValue] = useState(getGroupSetting());
  const [orderValue, setOrderValue] = useState(getOrderSetting());

  const handleValueChange = (e, isGroup) => { // Renamed function
    if (isGroup) {
      setGroupValue(e.target.value);
      setDropdownVisible(!isDropdownVisible);
      localStorage.setItem("group", e.target.value);
    } else {
      setOrderValue(e.target.value);
      setDropdownVisible(!isDropdownVisible);
      localStorage.setItem("order", e.target.value);
    }
  }

  useEffect(() => {
    if (groupValue === 'user') {
      console.log( allTickets)
      dispatch(filterData(groupValue, { allTickets, allUsers }, orderValue)); // Changed selectData to filterData
    } else {
      dispatch(filterData(groupValue, allTickets, orderValue)); // Changed selectData to filterData
    }
  }, [allTickets, dispatch, groupValue, allUsers, orderValue]);

  return (
    <div className="top-header" style={{ paddingLeft: "10px" }}>
      <div className="displayButton">
        <button
          className="p-10 f-16 btn"
          onClick={() => setDropdownVisible(!isDropdownVisible)} // Updated state toggle
        >
          <img src={DisImg} alt="XYZ Image" /> Display
        </button>
        {isDropdownVisible && ( // Updated condition
          <div className="dropOnClick flex-gap-10 p-10">
            <div className="selectGroup flex-sb">
              <span>Grouping</span>
              <select value={groupValue} onChange={(e) => handleValueChange(e, true)} className="selectStyle" name="group" id="group">
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="selectGroup flex-sb">
              <span>Ordering</span>
              <select value={orderValue} onChange={(e) => handleValueChange(e, false)} className="selectStyle" name="order" id="order">
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar; // Changed export name
