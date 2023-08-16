import React from "react";
import { Card } from "./Card";
import sprite from "../assets/icons/sprite.svg";

export const Notification = (props) => {
  const type = props.type;
  let bgColor;
  let icon;

  if (type === "success") {
    icon = "check-circle";
    bgColor = "bg-success";
  } else if (type === "error") {
    icon = "cancel-circle";
    bgColor = "bg-error";
  } else if (type === "info") {
    icon = "info";
    bgColor = "bg-info";
  } else if (type === "warning") {
    icon = "warning";
    bgColor = "bg-warning";
  } else {
    icon = "info";
    bgColor = "bg-info";
  }

  return (
    <Card
      className={`${bgColor} animate-moveInRight fixed top-5 right-5  z-50 flex w-72 items-center rounded text-lg`}
    >
      <svg
        className="absolute right-2 top-2 h-3 w-3 fill-white"
        onClick={props.onClose}
      >
        <use href={`${sprite}#icon-cross`}></use>
      </svg>
      <div className="self-center p-[10px]">
        <svg className="h-[30px] w-[30px] fill-white">
          <use href={`${sprite}#icon-${icon}`}></use>
        </svg>
      </div>
      <div className="mt-[2px] ml-2 flex max-w-[230px] flex-col items-center p-[2px] text-white">
        <span>{props.title}</span>
        <span className="text-sm"> {props.message}</span>
      </div>
    </Card>
  );
};
