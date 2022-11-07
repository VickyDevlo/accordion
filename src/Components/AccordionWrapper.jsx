import React from "react";
import "./AccordionWrapper.css";

const AccordionWrapper = ({ data, toggleHandler, active }) => {
  return (
    <>
      <div className="container">
        <div className="accordionWrapper">
          {data.map((item) => {
            return (
              <div className="itemlist" key={item.id}>
                <div className="title" onClick={() => toggleHandler(item.id)}>
                  <h2>{item.question}</h2>
                  <span className="btnActive">
                    {active === item.id ? "-" : "+"}
                  </span>
                </div>
                <div
                  className={active === item.id ? "content show" : "content"}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AccordionWrapper;
