import classNames from "classnames";
import React from "react";
import './DayListItem.css'

interface Props {
  setDay: (day: string) => void;
  day: string;
  spots: number;
  selected: boolean
}

const DayListItem = ({ setDay, day, spots, selected }: Props) => {

  const dayClass = classNames('day-list__item', {
    "day-list--selected": selected,
    "day-list--full": spots === 0
  })


  return (
    <li onClick={() => setDay(day)}>
      <h2 className="text--regular">{day}</h2>
      <h3 className="text--light">{spots} spots remaining</h3>
    </li>
  );
};

export default DayListItem;
