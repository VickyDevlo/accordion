import React from "react";
import "./AccordionWrapper.css";

const AccordionWrapper = ({ data, toggle, active }) => {
  return (
    <div className="Wrapper">
      <div className="Accordion">
        {data.map((item) => {
          return (
            <div className="item" key={item.id}>
              <div className="title" onClick={() => toggle(item.id)}>
                <h2>{item.question}</h2>
                <span>{active === item.id ? "-" : "+"}</span>
              </div>
              <div className={active === item.id ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          );
        })}
        
      </div>
     
    </div>
  );
};

export default AccordionWrapper;