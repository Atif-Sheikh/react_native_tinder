import React from 'react'
import { StyleSheet, Text, TextInput, View, Button ,Image,TouchableOpacity,Dimensions} from 'react-native'
// import * as firebase from "firebase";
// import firebase from 'react-native-firebase'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default class SignUp extends React.Component {
  state = { 
    email: '', 
    password: '', 
    errorMessage: null, 
    fName:'',
    lName:''
}

  handleSignUp = () => {
    const { email, password, fName, lName,} = this.state
   
    if(email != ' ', password != ' ', fName != ' ', lName != ' '){

        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          const userUid = auth().currentUser.uid;
          let obj = {
            fName:this.state.fName,
            lName:this.state.lName,
            match: [],
            description:
              'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
            status: 'Online',
            message:
              'This is what happens when an unstoppable force meets an immovable object.',
          }
          database().ref('users').child(userUid).set(obj)
          this.props.changeScreen('Main')
  
        })
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
            
        <Text style={{fontSize:25,fontFamily:'times'}}>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="First Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={fName => this.setState({ fName })}
          value={this.state.fName}
        />
        <TextInput
          placeholder="Last Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={lName => this.setState({ lName })}
          value={this.state.lName}
        />  
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <View style={{flexDirection:'row',marginTop:5}}>
          <Text>Already a Member?</Text>
          <TouchableOpacity onPress={() => this.props.changeScreen('Login')}>
            <Text style={{fontWeight:'bold'}}> Log In</Text>
          </TouchableOpacity>   
        </View>
        {/* <Button style={styles.Button} title="Sign Up" onPress={this.handleSignUp} /> */}
        <TouchableOpacity
          style={styles.signUpScreenButton}
          onPress={this.handleSignUp}
          underlayColor='#fff'>
          <Text style={styles.signUpText}>Sign Up</Text>
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
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 8
  },
  signUpScreenButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'black',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width: '60%',
  },
  signUpText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
  Image:{
  borderBottomLeftRadius:50,
  borderBottomRightRadius:50
  }
})