import React from 'react';
import './Card.css';
import proImg from '../../Assets/person.jpg'

const CardComponent = ({ id, title, tags, status }) => { // Changed name and tag prop
  return (
    <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className='color-grey'>{id}</span>
        <div className="imageContainer relative" style={{ width: "30px", height: "30px" }}>
          <img
            style={{ width: "110%", height: "100%", borderRadius: "50%" }}
             src={proImg} 
            alt="UserImage"
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        <p>{title}</p>
      </div>
      <div className="cardTags">
        <div className="tags color-grey"> ... </div>
        {
          tags?.map((item, index) => { // Changed elem to item
            return <div key={index} className="tags color-grey"><span>•</span> {item}</div>;
          })
        }
      </div>
    </div>
  );
}

export default CardComponent; // Changed export name
