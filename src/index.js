import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Lineup from "./component/lineup/line-up";
import Member from "./component/member/member";
import Home from "./pages/home/home";
import Live from "./pages/live/live";
import Club from "./pages/teams/teams";
  const router=createBrowserRouter([
    {
      path:"/",
      element: <Home />
    },
    {
      path:"/clubs",
      element:<Club /> 
    },{
      path:"/line-ups",
      element:<Lineup /> 
    },
    {
      path:"/member",
      element: <Member />
    },
    {
      path:"/live",
      element:<Live /> 
    },
    {
      path:"/team-members",
      element:<Member />
    }


  ])

// Removed reportWebVitals as it's not required
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
