import React, { Fragment } from "react";

export const CustomInPut = (props) => {
  return (
    <Fragment>
      <div>
        <label>{props.label}</label>
        <input
          className="focus:border-primary bg-gray-light-1 rounded border-[1px] border-gray-400 p-2 
          pl-8  text-sm outline-none transition-all focus:bg-gray-200"
          type={props.type}
          ref={props.ref}
          placeholder={props.placeholder}
          //   {props?.required && required}
          required
        />
      </div>
    </Fragment>
  );
};
