import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import firebase from "firebase";
import { auth } from "../firebase";

export default function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = () => {
		auth.signInWithEmailAndPassword(email, password)
			.then((authUser) => navigation.navigate("Chat"))
			.catch((error) => alert(error.message));
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<TextInput
				style={styles.input}
				placeholder="Email"
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				secureTextEntry
				value={password}
				onChangeText={(text) => setPassword(text)}
			/>
			<Button title="Login" onPress={signIn} />
			<Button
				title="Register"
				onPress={() => navigation.navigate("Register")}
			/>
		</View>
	);
}
