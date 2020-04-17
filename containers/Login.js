import React from 'react'
import { StyleSheet, Text, TextInput, View, Button ,TouchableOpacity,Dimensions,Image} from 'react-native'
import * as firebase from "firebase";

export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }

  handleLogin = () => {
    const { email, password } = this.state
    if(email != ' ', password != ' '){

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.changeScreen('Main'))
        .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    const window = Dimensions.get("window");
    return (
      <View style={styles.container}>
          <Image source={require('./images/familyBg.jpg')} style={{
           marginTop: -150,
          //  height:250,width:400,  
           borderRadius: window.width,
           width: window.width * 2,
           height: window.width * 2,
           marginLeft: -(window.width / 2),
           position: "absolute",
           bottom: 0,
           overflow: "hidden",}}
           ></Image>
        <Text style={{fontSize:25,fontFamily:'times'}}>LogIn</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        {/* <Button title="Login" onPress={this.handleLogin} /> */}

        <View style={{flexDirection:'row' ,marginTop:5}}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => this.props.changeScreen('SignUp')}>
            <Text style={{fontWeight:'bold'}}> Sign Up</Text>
          </TouchableOpacity>   
        </View>
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={this.handleLogin}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 8
  },
  loginScreenButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'black',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width:'60%'
  },
  loginText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  }
})