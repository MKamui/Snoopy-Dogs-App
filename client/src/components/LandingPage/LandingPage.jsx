import React from "react";
import { Link } from "react-router-dom";
import s from "./LandingPage.module.css";

const LandingPage = () => {
    return (
    <div className={s.container}>
        <h1>¡WELCOME FRIEND!</h1>
        <Link to="/home">
        <button className={s.enterBtn}>¡COME ON IN!</button>
        </Link>
    </div>
    );
};

export default LandingPage;