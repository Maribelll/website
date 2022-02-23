import React from "react";
import { InlineWidget } from "react-calendly";

const Calendar = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/artellecreative?text_color=2e303d&primary_color=4e93ce" />
    </div>
  );
};

export default Calendar;
