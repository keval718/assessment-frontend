import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieRequest } from "../actions/character";
import "./CharacterList.css";
import background from "../images/images.jpeg";
import logo from "../images/logo.png";
import FadeLoader from "react-spinners/ClipLoader";

export default function CharacterList({ character }) {
    const [value, setValue] = useState("Luke Skywalker");
    const dispatch = useDispatch();
    const movieList = useSelector((state) => state.character.movies);
    const isLoading = useSelector((state) => state.character.isLoading);
    const len = movieList.length;
    const myStyle = {
        backgroundImage: `url(${background})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    const handleSelect = (e) => {
        setValue(e.target.value);
    };
    useEffect(() => {
        if (value) {
            const selectedCharacter = character.filter((data) => data.name === value);
            if (selectedCharacter.length > 0) {
                dispatch(getMovieRequest(selectedCharacter));
            }
        }
    }, [character, dispatch, value]);

    return (
        <div style={myStyle}>
            <div className="navbar">
                <img src={logo} alt="logo" height={"150px"} width={"150px"} />
            </div>
            <h3 className="page-title">
                Find list of movies by selecting a character.
            </h3>
            <div className="container">
                <div className="character-container">
                    <div className="text-warning character-text"> Character: </div>
                    <select onChange={handleSelect} className="select-form">
                        {character.map((data) => {
                            return <option key={data.name}>{data.name}</option>;
                        })}
                    </select>
                </div>

                <div className="character-container">
                    <div className="text-warning character-text">List of movies: </div>

                    <div className="fs-5 text-light mt-2">
                        {isLoading ? (
                            <FadeLoader color={"#ffffff"} loading={isLoading} size={50} />
                        ) : movieList ? (
                            <>
                                {movieList.map((data) => {
                                    return (
                                        <div className="film-name-text" key={data.episode_id}>
                                            {data.title}
                                        </div>
                                    );
                                })}
                            </>
                        ) : null}
                    </div>
                </div>
                <div className="character-container">
                    <div className="text-warning character-text">Year Last Movie:</div>
                    {movieList ? (
                        <>
                            {movieList.map((data, i) => {
                                if (len === i + 1) {
                                    return (
                                        <div className=" fs-5 text-light film-name-text movie-release-date-text">
                                            {data.title} - {data.release_date.slice(0, 4)}
                                        </div>
                                    );
                                }
                            })}
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
