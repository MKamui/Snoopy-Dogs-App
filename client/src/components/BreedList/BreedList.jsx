import React from "react";
import s from "./BreedList.module.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BreedList = ({ filter }) => {
    const [page, setPage] = useState(1);
    const [length, setLength] = useState(0);
    const [filteredBreeds, setFilteredBreeds] = useState([]);

    const { breeds } = useSelector((state) => state);

    const filterFunction = () => {
    let filtBreeds = []
    if(breeds.length > 0) {
        filtBreeds = breeds.filter(
        (breed) => { return (
        breed.name.toUpperCase().includes(filter?.name.toUpperCase()) &&
        breed.temperament
        ?.join(", ")
                    .toUpperCase()
                    .includes(filter?.temperament.toUpperCase()))
        })}

    if (filter?.sortBy === "A_FIRST") {
        filtBreeds = filtBreeds.sort((a, b) =>
        a.name[0].toUpperCase() > b.name[0].toUpperCase()
            ? 1
            : a.name[0].toUpperCase() < b.name[0].toUpperCase()
            ? -1
            : 0
        );
    }

    if (filter?.sortBy === "Z_FIRST") {
        filtBreeds = filtBreeds
        .sort((a, b) =>
            a.name[0].toUpperCase() > b.name[0].toUpperCase()
            ? 1
            : a.name[0].toUpperCase() < b.name[0].toUpperCase()
            ? -1
            : 0
        )
        .reverse();
    }

    if (filter?.sortBy === "LIGHTER") {
        filtBreeds = filtBreeds.sort((a, b) =>
        a.maxWeight > b.maxWeight ? 1 : a.maxWeight < b.maxWeight ? -1 : 0
        );
    }

    if (filter?.sortBy === "HEAVIER") {
        filtBreeds = filtBreeds
        .sort((a, b) =>
            a.maxWeight > b.maxWeight ? 1 : a.maxWeight < b.maxWeight ? -1 : 0
        )
        .reverse();
    }

    if (filter?.sortBy === "CREATED_BREED") {
        filtBreeds = filtBreeds.filter((breed) =>
        breed.hasOwnProperty("original")
        );
    }

    if (filter?.sortBy === "LIGHT_25") {
        filtBreeds = filtBreeds.filter((a) =>
        a.maxWeight <= 25        
        );
    }

    setLength(filtBreeds.length);
    setFilteredBreeds(filtBreeds.slice(page * 8 - 8, page * 8));
    };

    useEffect(() => {
    if (breeds.length > 0)filterFunction()
    }, [breeds, page, filter]);

    useEffect(() => {
    setPage(1);
    }, [filter]);

    useEffect(() => {
        console.log(breeds);
        }, [breeds]);

    return (
    <div className={s.container}>
        <div className={s.cardsContainer}>
        {filteredBreeds.length && filteredBreeds.map((breed) => {
            return <Card key={breed.id} breed={breed} />;
        })}
        </div>
        <div className={s.paginate}>
        <button
            className={page < 2 ? s.pagDisabledBtn : s.pagBtn}
            disabled={page < 2}
            onClick={() => setPage(1)}
        >
            {"<<"}
        </button>
        <button
            className={page < 2 ? s.pagInvisibleBtn : s.pagBtn}
            disabled={page < 2}
            onClick={() => setPage(page - 1)}
        >
            {page - 1}
        </button>
        <button className={s.pagDisabledBtn} disabled>
            {page}
        </button>
        <button
            className={filteredBreeds.length < 8 ? s.pagInvisibleBtn : s.pagBtn}
            disabled={filteredBreeds.length < 8}
            onClick={() => setPage(page + 1)}
        >
            {page + 1}
        </button>
        <button
            className={filteredBreeds.length < 8 ? s.pagDisabledBtn : s.pagBtn}
            disabled={filteredBreeds.length < 8}
            onClick={() => setPage(Math.ceil(length / 8))}
        >
            {">>"}
        </button>
        </div>
    </div>
    );
};

export default BreedList;