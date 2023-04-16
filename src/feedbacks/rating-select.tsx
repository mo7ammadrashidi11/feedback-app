import React, { useState } from "react";
import _ from "lodash";

const RatingSelect: React.FC<{ selected: number; select: Function }> = ({
  selected,
  select,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    select(+e.currentTarget.value);
  };
  return (
    <div>
      <ul className="flex justify-center items-center m-2 border">
        {_.range(1, 11).map((i) => (
          <li
            className={`relative w-10 h-10 p-2 me-2  border border-red-500 rounded-full ${
              selected === i ? "bg-red-500" : "green"
            } `}>
            <input
              type="radio"
              value={i}
              id={i.toString()}
              name={i.toString()}
              onChange={handleChange}
              checked={selected === i}
              className="cursor-pointer opacity-0"
            />
            <label
              htmlFor={i.toString()}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 p-2 h-10 rounded-full cursor-pointer">
              {i}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingSelect;
