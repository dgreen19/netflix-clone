import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

export default function SignUp() {
	return (
		<Container>
			<BackgroundImage></BackgroundImage>
			<div className="content">
			<Header login></Header>
            <div className="body flex column a-center j-center">
					<div className="text flex column">
						<h1>Unlimited movies, TV shows and more.</h1>
						<h4>Watch anywhere. Cancel anytime.</h4>
						<h6>Ready to watch? Enter your email to create or login.</h6>
					</div>
					<div className="form">
						<input
							type="email"
							placeholder="Email Address"
							name="email"
						></input>
						<input
							type="password"
							placeholder="Password"
							name="password"
						></input>
						<button>Get Started</button>
					</div>
					<button>Login</button>
				</div>
				</div>
		</Container>
	);
}

const Container = styled.div`
position: relative;
.content{
	position:absolute;
	top:0;
	left: 0;
	background-color: #2929297f;
	height: 100vh;
	width: 100vh;
	display: grid;
	grid-template-rows:15vh 85vh;
	.body {
		gap: 1rem;
		.text{
			gap: 1rem;
			text-align: center;
			font-size: 2rem;
			h1 {
				padding: 0 25rem;
			}
		}
		.form {
			display: grid;
			width: 60%;
			input{
				color: black;
				border: none;
				padding: 1.5rem;
				font-size: 1.2rem;
				border: 1px solid black;
				&:focus {
					outline: none;
				}
			}
			button{
				padding: 0.5rem 1rem;
		background-color: #e50914;
		border: none;
		color: white;
		border-radius: 0.2rem;
		cursor: pointer;
		font-weight: bolder;
		font-size: 1.05rem;
			}
		}
		button {
			padding: 0.5rem 1rem;
		background-color: #e50914;
		border: none;
		color: white;
		border-radius: 0.2rem;
		cursor: pointer;
		font-weight: bolder;
		font-size: 1.05rem;
		}
	}
}
`;
