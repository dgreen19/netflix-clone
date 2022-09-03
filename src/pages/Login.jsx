import {  onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import {firebaseAuth} from "../utils/firebase-config"

export default function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});
	const handleSignIn = async () => {
		try {
			const { email, password } = formValues;
			await signInWithEmailAndPassword(firebaseAuth, email, password)
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
		width: 100vh;
		display: grid;
		grid-template-rows: 15vh 85vh;
		.body {
			gap: 1rem;
			.text {
				gap: 1rem;
				text-align: center;
				font-size: 2rem;
				h1 {
					padding: 0 25rem;
				}
			}
			.form {
				display: grid;
				grid-template-columns: ${({showPassword})=>showPassword ? "1fr 1fr":"2fr 1fr"};
				width: 60%;
				input {
					color: black;
					border: none;
					padding: 1.5rem;
					font-size: 1.2rem;
					border: 1px solid black;
					&:focus {
						outline: none;
					}
				}
				button {
					padding: 0.5rem 1rem;
					background-color: #e50914;
					border: none;
					color: white;

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
