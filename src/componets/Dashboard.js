import React from "react";
import "../App.css";
// import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useGetUser } from "../Hooks/getUser";
import { theUsers } from "./Context";
// import { UserContext } from "./Context";
// import Login from "./Login";
import Home from "./Home";


export default function Dashboard() {
    const user ="";

    const data =theUsers.find((val) => val.username==user)

    return (
        <>
        <Helmet>
          <title>Dashboard</title>
           <meta name="description" content="Dashboard" />
          <link rel="canonical" href="/dashboard" />
       </Helmet>
        <h2>WELCOME TO YOUR DASHBOARD</h2>
        <Home />
              <div>{data}</div></>
    )
}