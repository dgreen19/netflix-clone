import React from "react";
import CardSlider from "./CardSlider";
import styled from "styled-components";

export default function Slider({ movies }) {
	const getMoviesFromRange = (from, to) => {
		return movies.slice(from, to);
	};

	return (
		<Container>
			<CardSlider
				title="Trending Now"
				data={getMoviesFromRange(0, 10)}
			></CardSlider>
			<CardSlider
				title="New Releases"
				data={getMoviesFromRange(10, 20)}
			></CardSlider>
			<CardSlider
				title="Classic Blockbusters"
				data={getMoviesFromRange(20, 30)}
			></CardSlider>
			<CardSlider
				title="Popular on Netflix"
				data={getMoviesFromRange(30, 40)}
			></CardSlider>
			<CardSlider
				title="Bingeworthy Classics"
				data={getMoviesFromRange(40, 50)}
			></CardSlider>
			<CardSlider
				title="Based on your viewing habits"
				data={getMoviesFromRange(50, 60)}
			></CardSlider>
		</Container>
	);
}

const Container = styled.div`
`