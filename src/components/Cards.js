import React from "react";
import "./cards.scss";

function Cards(props) {
  const { position, place, from, to, task1, task2, task3, task4 } =
    props.infoCard;
  return (
    <div className="card-work-exp">
      <h2 className="name-position">{position}</h2>
      <h2 className="name-place">{place}</h2>
      <h3 className="title-period">Period</h3>
      <div className="period-box">
        <div className="from-btn">
          <div className="name-from">From</div>
          <div className="year-from">{from}</div>
        </div>
        <div className="to-btn">
          <div className="name-to">To</div>
          <div className="year-to">{to}</div>
        </div>
      </div>
      <ul className="list-task">
        <li className="task">
          <i className="fas fa-check"></i>
          {task1}
        </li>
        <li className="task">
          <i className="fas fa-check"></i>
          {task2}
        </li>
        <li className="task">
          <i className="fas fa-check"></i>
          {task3}
        </li>
        <li className="task">
          <i className="fas fa-check"></i>
          {task4}
        </li>
      </ul>
    </div>
  );
}

export default Cards;
