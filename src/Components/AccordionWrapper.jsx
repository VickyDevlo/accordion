import React from "react";
import PropTypes from "prop-types";
import "./AccordionWrapper.css";

const AccordionWrapper = ({ data, toggleHandler, active }) => {
  return (
    <div className="container">
      <div className="accordionWrapper">
        {data.map((item) => {
          return (
            <div className="itemlist" key={item.id}>
              <div className="title" onClick={() => toggleHandler(item.id)}>
                <h2>{item.question}</h2>
                <span className="btn">{active === item.id ? "-" : "+"}</span>
              </div>
              <div className={active === item.id ? "show" : "content"}>
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

AccordionWrapper.defaultProps = {
  active: null,
};

AccordionWrapper.propTypes = {
  toggleHandler: PropTypes.func,
  active: PropTypes.number,
};

export default AccordionWrapper;
