import React, { useState } from "react";
// import the different screens
import Loading from './containers/Loading'
import SignUp from './containers/SignUp'
import Login from './containers/Login'
import Main from './containers/Main'
import { View } from "react-native";
import './containers/config'
import * as firebase from "firebase";
class App extends React.Component {
	state={
		screen:'Loading'
	}
	componentDidMount = () =>{
		// firebase.auth().signOut()
	}
	changeScreen = (newScreen) => {
		// setScreen(newScreen)
		this.setState({screen:newScreen})
	}
	
 render(){
	return (
		<>
			{this.state.screen == 'Loading'?
			<Loading changeScreen={this.changeScreen}/>:
			this.state.screen == 'Login'?
			<Login changeScreen={this.changeScreen}/>:
			this.state.screen == 'SignUp'? 
			<SignUp changeScreen={this.changeScreen}/>:
			<Main changeScreen={this.changeScreen}/>}
	  </>
	);
 }
};
export default App;
