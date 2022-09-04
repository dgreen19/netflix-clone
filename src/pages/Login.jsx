import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";

export default function Login() {
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});
	const handleLogin = async () => {
		try {
			const { email, password } = formValues;
			await signInWithEmailAndPassword(firebaseAuth, email, password);
		} catch (error) {
			console.log(error);
		}
	};
	const navigate = useNavigate();

	//if user already has an existing account will be redirectedk to the Netflix homepage!
	onAuthStateChanged(firebaseAuth, (currentUser) => {
		if (currentUser) navigate("/");
	});
	return (
		<Container>
			<BackgroundImage></BackgroundImage>
			<div className="content">
				<Header></Header>
				<div className="form-container flex column a-center j-center">
					<div className="form flex column a-center j-center">
						<div className="title">
							<h3>Login</h3>
						</div>
						<div className="container flex column">
							<input
								type="email"
								placeholder="Email Address"
								name="email"
								value={formValues.email}
								onChange={(e) =>
									setFormValues({
										...formValues,
										[e.target.name]: e.target.value,
									})
								}
							></input>

							<input
								type="password"
								placeholder="Password"
								name="password"
								value={formValues.password}
								onChange={(e) =>
									setFormValues({
										...formValues,
										[e.target.name]: e.target.value,
									})
								}
							></input>

							<button onClick={() => handleLogin()}>Login</button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	.content {
		position: absolute;
		top: 0;
		left: 0;
		background-color: #2929297f;
		height: 100vh;
		width: 100vw;
		display: grid;
		grid-template-rows: 15vh 85vh;
		.form-container {
			gap: 2rem;
			height: 85vh;
			.form {
				padding: 2rem;
				background-color: #000000b0;
				width: 25vh;
				gap: 2rem;
				color: white;
				.container {
					gap: 2rem;
					input {
						padding: 0.5rem 1rem;
						width: 15rem;
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
		}
	}
`;
