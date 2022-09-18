import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import video from "../Assets/video.mp4";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

export default function Card({ movieData, isLiked = false }) {
	const [isHovered, setIsHovered] = useState(false);
	const navigate = useNavigate();
	return (
		<Container
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img
				src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
				alt="movie"
			/>
			{isHovered && (
				<div className="hover">
					<div className="image-vide-container">
						<img
							src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
							alt="movie"
							onClick={() => navigate("/player")}
						/>
						<video
							src={video}
							autoPlay
							loop
							controls
							muted
							onClick={() => navigate("/player")}
						></video>
					</div>
					<div className="info-container flex column">
						<h3 className="name" onClick={() => navigate("/player")}>
							{movieData.name}
						</h3>
						<div className="icons flex j-between">
							<div className="controls flex">
								<IoPlayCircleSharp
									title="play"
									onClick={() => navigate("/player")}
								></IoPlayCircleSharp>
								<RiThumbUpFill title="Like"></RiThumbUpFill>
								<RiThumbDownFill title="Dislike">
									{isLiked ? (
										<BsCheck title="Remove from list"></BsCheck>
									) : (
										<AiOutlinePlus title="Add to my list"></AiOutlinePlus>
									)}
								</RiThumbDownFill>
							</div>
						</div>
					</div>
				</div>
			)}
		</Container>
	);
}

const Container = styled.div``;
