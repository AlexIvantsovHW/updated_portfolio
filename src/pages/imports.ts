/*-------------- IMPORT-------------- */
import React from "react";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import { ROUTES } from "../shared/helpers";
/*-------------- DECLARE-------------- */
const Main = React.lazy(() => import("./main/index"));

/*-------------- EXPORT-------------- */
export { React, Router, Route, Routes, ROUTES, BrowserRouter, Main };
