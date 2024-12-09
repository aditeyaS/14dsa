import React from "react";
import { NonIndexRouteObject } from "react-router-dom";

export default interface AppRouteObject extends NonIndexRouteObject {
  name: string;
  icon?: React.ReactNode;
  children?: AppRouteObject[];
}
