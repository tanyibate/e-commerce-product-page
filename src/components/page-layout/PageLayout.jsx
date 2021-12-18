import React from "react";

export default function PageLayout(props) {
  return (
    <div className="w-full h-full md:w-10/12 pt-20 tablet:pt-32">
      {props.children}
    </div>
  );
}
