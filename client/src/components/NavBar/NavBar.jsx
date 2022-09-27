import React from "react";
import { Link } from "react-router-dom";
import s from "./NavBar.module.css";

const NavBar = ({ filter, setFilter }) => {
    const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
    };

    const handleSort = (e) => {
    setFilter({ ...filter, sortBy: e.target.name });
    };

    return (
    <div className={s.container}>
        <div className={s.filterInputsContainer}>
        <input
            className={s.filterInputs}
            name="name"
            value={filter.breed}
            onChange={handleChange}
            placeholder="Search for breed"
            autoComplete="off"
        />
        <input
            className={s.filterInputs}
            name="temperament"
            value={filter.temperament}
            onChange={handleChange}
            placeholder="Search for temperament"
            autoComplete="off"
        />
        </div>
        <div className={s.filterBtnContainer}>
        <label>Sort by:</label>
        <button className={s.btn} name="A_FIRST" onClick={handleSort}>
            'A' First 
        </button>
        <button className={s.btn} name="Z_FIRST" onClick={handleSort}>
            'Z' First
        </button>
        <button className={s.btn} name="LIGHTER" onClick={handleSort}>
            Lighter First
        </button>
        <button className={s.btn} name="HEAVIER" onClick={handleSort}>
            Heavier First
        </button>
        <button className={s.btn} name="CREATED_BREED" onClick={handleSort}>
            Created Breed
        </button>
        </div>
        <div className={s.createBtnContainer}>
        <Link to="/create-breed">
            <button className={s.btn}>Create your own breed</button>
        </Link>
        </div>
    </div>
    );
};

export default NavBar;