import React from "react";
import { useSelector } from "react-redux";
import { DiCodeigniter } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import "./DashView.css";
import CardComponent from "../Card/Card"; // Changed Card to CardComponent
import todoImg from '../../Assets/To-do.svg'
import inProgImg from '../../Assets/in-progress.svg'
import doneImg from '../../Assets/Done.svg'
import BacklogImg from '../../Assets/Backlog.svg'

import NopImg from '../../Assets/No-priority.svg'
import urgImg from '../../Assets/SVG - Urgent Priority colour.svg'
import higImg from '../../Assets/Img - High Priority.svg'
import medImg from '../../Assets/Img - Medium Priority.svg'
import lowImg from '../../Assets/Img - Low Priority.svg'


import addImg from '../../Assets/add.svg'
import dotImg from '../../Assets/3 dot menu.svg'

const DashboardView = () => { // Changed DashView to DashboardView
  const { filteredData, isUser } = useSelector(
    (state) => state.filterDataReducer // Changed SelectDataReducer to filterDataReducer
  );

  return (
    filteredData && (
      <div className="dashContainer" >
        {filteredData.map((item, index) => { // Changed elem to item
          console.log(item[1]?.title)
          return (
            <div key={index} className="dashCardContainer">
              
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {!isUser ? ( 
                    item[index]?.title === "Todo" ? (
                      <img src={todoImg} alt="XYZ Image" />
                    ) : item[index]?.title === "In progress" ? (
                      <img src={inProgImg} alt="ABC Image" />
                    ):item[index]?.title === "Backlog" ? (
                      <img src={BacklogImg} alt="XYZ Image" />
                    ) : item[index]?.title === "Done" ? (
                      <img src={doneImg} alt="ABC Image" />
                    ) :item[index]?.title === "No priority" ? (
                      <img src={NopImg} alt="XYZ Image" />
                    ) : item[index]?.title === "Low" ? (
                      <img src={lowImg} alt="ABC Image" />
                    ):item[index]?.title === "Medium" ? (
                      <img src={medImg} alt="XYZ Image" />
                    ) : item[index]?.title === "High" ? (
                      <img src={higImg} alt="ABC Image" />
                    ) : item[index]?.title === "Urgent" ? (
                      <img src={urgImg} alt="ABC Image" />
                    ) : <DiCodeigniter />
                  ) : (
                    <div
                      className="imageContainer relative"
                      style={{ width: "15px", height: "15px", display: 'inline-block' }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                        }}
                        src="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="UserImage"
                      />
                    </div>
                  )}
                  <span>
                    {" "}{item[index]?.title} <span style={{ color: 'grey', fontSize: '15px' }}>{item[index]?.value?.length}</span>
                  </span>
                </div>
                <div className="rightView">
                  {/* <AiOutlinePlus />{" "} */}
                  <img src={addImg} alt="ABC Image" />
                  <img src={dotImg} alt="ABC Image" />
                </div>
              </div>
                
              <div className="dashList flex-gap-10">
                {item[index]?.value?.map((ticket, ind) => { // Changed elem to ticket
                  return (
                    <CardComponent // Changed Card to CardComponent
                      key={ticket.id} // Added key prop for each CardComponent
                      id={ticket.id}
                      title={ticket.title}
                      tag={ticket.tag}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default DashboardView; // Changed export name
