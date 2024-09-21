/*-------------- IMPORT-------------- */
import React from 'react'
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import { ROUTES } from '../shared/helpers'
import { BaseLayout } from '../widget/base-layout'

/*-------------- DECLARE-------------- */
const Main = React.lazy(() => import('./main/index'))
const About = React.lazy(() => import('./about/index'))
const Contact = React.lazy(() => import('./contact/index'))
const Experience = React.lazy(() => import('./experience/index'))
const Portfolio = React.lazy(() => import('./portfolio/index'))
const Qualification = React.lazy(() => import('./qualification/index'))

/*-------------- EXPORT-------------- */
export {
  React,
  Router,
  Route,
  Routes,
  BaseLayout,
  ROUTES,
  BrowserRouter,
  Main,
  About,
  Contact,
  Experience,
  Portfolio,
  Qualification,
}
