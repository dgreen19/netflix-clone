import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMovies, getGenres } from "../store";
import { firebaseAuth } from "../utils/firebase-config";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";
import SelectGenre from "../components/SelectGenre";

export default function Movies() {
	const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
	const navigate = useNavigate();
	const dispatch = useDispatch();
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		dispatch(getGenres());
	}, []);

	useEffect(() => {
		if (genresLoaded) {
			dispatch(fetchMovies({ type: "movies" }));
		}
	}, [genresLoaded]);

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onscroll = null);
    };
    
    onAuthStateChanged(firebaseAuth, (currentUser) => {
			// if (currentUser) navigate("/");
		});
    return (
			<Container>
				<div className="navbar">
					<Navbar isScrolled={isScrolled}></Navbar>
				</div>

				<div className="data">
					<SelectGenre genres={genres} type="movie"></SelectGenre>
					{movies.length ? (
						<Slider movies={movies}></Slider>
					) : (
						<NotAvailable></NotAvailable>
					)}
				</div>
			</Container>
		);
}

const Container = styled.div`
.data{
    margin-top: 8rem;
    .not-available{
        text-align: center;
        color: white;
        margin-top: 4rem;
    }
}`;