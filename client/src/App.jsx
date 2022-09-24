import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import Shows from "./pages/Shows";
import SignUp from "./pages/SignUp";
import UserLiked from "./pages/UserLiked";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<SignUp />} />
				<Route exact path="/player" element={<Player />} />
				<Route exact path="/movies" element={<Movies />} />
				<Route exact path="/tv" element={<Shows />} />
				<Route exact path="/mylist" element={<UserLiked />} />
				<Route exact path="/" element={<Netflix />} />
			</Routes>
		</BrowserRouter>
	);
}
