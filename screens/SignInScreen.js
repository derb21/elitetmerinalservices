import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Form,
  TextInput,
  Button,
  Dimensions,
  StyleSheet,
  Alert
} from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// import APIFirebase from "../api/firebase";
import * as firebase from "firebase";

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;
// const firebaseConfig = {
//   apiKey: "AIzaSyDg5oQa5rpfyu4kKFiYNDgvZ4ukTsmO6Qg",
//   authDomain: "elite-terminal-services.firebaseapp.com",
//   databaseURL: "https://elite-terminal-services-default-rtdb.firebaseio.com",
//   projectId: "elite-terminal-services",
//   storageBucket: "elite-terminal-services.appspot.com",
//   messagingSenderId: "811955200115",
//   appId: "1:811955200115:web:0fe04e687593c6a644ca06",
//   measurementId: "G-BHTK9FFW23"
// };
// firebase.initializeApp(firebaseConfig);

export default function SignInScreen({ navigation }) {
  const [airport, setAirport] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const goToAddProjects = async () => {
    if ((username == "admin") & (password == "admin")) {
      console.log("succesfull login");
      navigation.navigate("AddProjects");
    } else {
      console.log("Unsuccesful login");
    }
  };
  const goHome = () => {
    navigation.navigate("DashboardScreen");
  };
  return (
    <View style={{ flex: 1 }}>
      <Image source={require("../assets/bridgeAirplane.jpg")} />
      <View style={styles.titleView}>
        <Text style={styles.title}>Welcome Admin, </Text>
        <Text style={styles.titleLower}> Please Sign In</Text>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.lbl}>Username*</Text>

        <TextInput
          style={styles.input}
          placeholder="username"
          placeholderTextColor="gray"
          returnKeyLabel={"next"}
          onChangeText={text => setUsername(text)}
        />
      </View>

      <View style={styles.inputView}>
        <Text style={styles.lbl}>Password*</Text>

        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="gray"
          returnKeyLabel={"next"}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          height: "7%",
          width: "100%",
          marginRight: "auto",
          marginLeft: "auto",
          borderColor: "white",
          marginTop: "5%",
          marginBottom: "5%",
          backgroundColor: "#73B1B7"
        }}
        onPress={goToAddProjects}
      >
        <Text
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            fontSize: 16,
            color: "white",
            textAlign: "center"
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.titleLower}> Or </Text>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          height: "7%",
          width: "100%",
          marginRight: "auto",
          marginLeft: "auto",
          borderColor: "white",
          marginTop: "5%",
          marginBottom: "5%",
          backgroundColor: "#73B1B7"
        }}
        onPress={goHome}
      >
        <Text
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            fontSize: 16,
            color: "white",
            textAlign: "center"
          }}
        >
          Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "black",
    marginTop: "auto",
    marginBottom: "auto",
    height: 35,
    fontSize: 30
  },
  inputView: {
    borderColor: "#000000",
    borderWidth: 1,
    height: 50,
    paddingLeft: "1%",
    height: 75,
    marginTop: "4.5%",
    backgroundColor: "white"
  },
  inputMessage: {
    color: "black",
    marginTop: "auto",
    marginBottom: "auto",
    height: 150,
    fontSize: 22
  },
  inputViewMessage: {
    borderColor: "#000000",
    borderWidth: 1,
    height: 150,
    paddingLeft: "1%",
    marginTop: "1.5%"
  },
  lbl: {
    fontSize: 22
  },
  titleView: {
    backgroundColor: "gray"
  },
  title: {
    fontSize: 26,
    marginLeft: "3%",
    color: "white"
  },
  titleLower: {
    fontSize: 22,
    textAlign: "center",
    color: "white"
  },
  header: {
    fontSize: 35,
    marginLeft: "5%",
    marginTop: "3%"
  }
});

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const InsideTopDiv = styled.View`
  width: 70%;
  margin-right: auto;
  margin-left: auto;
`;

const HeaderCardTXT = styled.Text`
  color: black;
  font-size: 30px;
  padding-bottom: 2%;
  text-align: center;
`;
const DescriptionTXT = styled.Text`
  color: gray;
  font-size: 24px;
  padding-bottom: 2%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 2%;
`;
//Container Information Start
const HeaderCard = styled.View`
  border-radius: 15px;
  width: 75%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4%;
`;
const HeaderCardContent = styled.View`
  padding: 2px 16px;
  background-color: white;
  border-radius: 15px;
  height: 50%;
`;
const Header = styled.View`
  padding: 2px 16px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  padding: 5%;
  background-color: rgba(255, 255, 255, 0.2);
`;
