import React from "react";

interface Props {
  setDay: (day: string) => void;
  day: string;
  spots: number;
}

const DayListItem = ({ setDay, day, spots }: Props) => {
  return (
    <li onClick={() => setDay(day)}>
      <h2 className="text--regular">{day}</h2>
      <h3 className="text--light">{spots} spots remaining</h3>
    </li>
  );
};

export default DayListItem;
