import React from "react"
import {Link} from 'react-router-dom'
import s from "./PageNotFound.module.css"
import snoopypagenotfound from '../../img/snoopypagenotfound.gif'

export default function PageNotFound () {
    return (
        <div className={s.notfound}>
            <h1 className={s.lost}>Snoopy is lost!!</h1>
            <img src={snoopypagenotfound} alt='snoopy angry' width="700" height="500" />
            <p></p>
            <Link to="/home">
            <button type="button" className={s.btn}>
                RETURN HOME
            </button>
            </Link>
        </div>
    )
}