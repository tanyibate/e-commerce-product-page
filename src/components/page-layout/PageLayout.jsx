import React from "react";

export default function PageLayout(props) {
  return (
    <div className="w-full h-full lg:w-10/12 pt-20 tablet:pt-32 lg:flex lg:items-center">
      {props.children}
    </div>
  );
}
