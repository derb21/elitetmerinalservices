import React, { useState, useEffect } from "react";
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
  Alert,
  Platform
} from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";
import HeaderComponent from "../components/adminMenu";

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

export default function AddProjectsScreen({ navigation }) {
  const [airport, setAirport] = useState("");

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImage] = useState(null);
  const [imgTwo, setImageTwo] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const pickImageTwo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setImageTwo(result.uri);
    }
  };
  const storeProject = async userId => {
    setAlert();
    console.log(
      "Data in Function, Add Project Screen",
      airport,
      img,
      city,
      state,
      date,
      description
    );
    firebase
      .database()
      .ref("projects/")
      .push({
        airport: airport,
        city: city,
        state: state,
        date: date,
        description: description,
        image: img,
        imageTwo: imgTwo
      });
  };

  const setAlert = async () => {
    console.log("cancel");
    alert(
      "You added a project",
      "A new project with shortly appear on the projects page of your website.",
      [
        {
          text: "Cancel",
          onPress: () => resetPage(),
          style: "cancel"
        }
        // { text: "Sign In", onPress: () => goToSignIn() }
      ],
      { cancelable: false }
    );
    navigation.reset({
      index: 0,
      routes: [{ name: "AddProjects" }]
    });
  };
  const resetPage = async () => {};
  const goToProjectsPage = async () => {
    navigation.navigate("ProjectsScreen");
  };
  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={{ flex: 1 }}>
        <HeaderComponent></HeaderComponent>

        <Row>
          <Col>
            <View style={{}}>
              {imgTwo && (
                <Image
                  source={{ uri: imgTwo }}
                  style={{
                    width: 200,
                    marginRight: "auto",
                    marginLeft: "auto",
                    height: 200
                  }}
                />
              )}
            </View>
          </Col>
          <Col>
            <View style={{}}>
              {img && (
                <Image
                  source={{ uri: img }}
                  style={{
                    width: 200,
                    marginRight: "auto",
                    marginLeft: "auto",
                    height: 200
                  }}
                />
              )}
            </View>
          </Col>
        </Row>
        <InsideTopDiv>
          {/* <BorderTop></BorderTop> */}
          <HeaderCard>
            <Header>
              <HeaderCardTXT>Add Projects</HeaderCardTXT>
            </Header>
          </HeaderCard>
        </InsideTopDiv>
      </View>

      {/* <BorderTop></BorderTop> */}
      <InsideTopDiv>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>* These fields are required.</Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              height: "10%",
              width: "100%",
              marginRight: "auto",
              marginLeft: "auto",
              borderColor: "white",
              marginTop: "5%",
              backgroundColor: "#73B1B7"
            }}
            onPress={pickImage}
          >
            <Text
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                fontSize: 26,
                color: "white",
                textAlign: "center"
              }}
            >
              Add Image One
            </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={{
              borderWidth: 1,
              height: "10%",
              width: "100%",
              marginRight: "auto",
              marginLeft: "auto",
              borderColor: "white",
              marginTop: "5%",
              backgroundColor: "#73B1B7"
            }}
            onPress={pickImageTwo}
          >
            <Text
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                fontSize: 26,
                color: "white",
                textAlign: "center"
              }}
            >
              Add Image Two
            </Text>
          </TouchableOpacity> */}

          <Text style={styles.lbl}>Airport*</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="JFK"
              placeholderTextColor="gray"
              returnKeyLabel={"next"}
              onChangeText={text => setAirport(text)}
            />
          </View>
          <Text style={styles.lbl}>State*</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Oregon"
              placeholderTextColor="gray"
              returnKeyLabel={"next"}
              onChangeText={text => setState(text)}
            />
          </View>
          <Text style={styles.lbl}>City*</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Portland"
              placeholderTextColor="gray"
              returnKeyLabel={"next"}
              onChangeText={text => setCity(text)}
            />
          </View>
          <Text style={styles.lbl}>*Year Completed</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="2018"
              placeholderTextColor="gray"
              returnKeyLabel={"next"}
              onChangeText={text => setDate(text)}
            />
          </View>
          <Text style={styles.lbl}>*About the Project</Text>

          <View style={styles.inputViewMessage}>
            <TextInput
              style={styles.inputMessage}
              multiline
              placeholder="Tell us about the project"
              placeholderTextColor="gray"
              returnKeyLabel={"next"}
              onChangeText={text => setDescription(text)}
            />
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              height: "10%",
              width: "100%",
              marginRight: "auto",
              marginLeft: "auto",
              borderColor: "white",
              marginTop: "5%",
              backgroundColor: "#73B1B7"
            }}
            disabled={!airport + !state + !city + !date + !description}
            onPress={storeProject}
          >
            <Text
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                fontSize: 20,
                color: "white",
                textAlign: "center"
              }}
            >
              Add Project
            </Text>
          </TouchableOpacity>
        </View>
      </InsideTopDiv>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "black",
    marginTop: "auto",
    marginBottom: "auto",
    height: 35,
    fontSize: 22
  },
  inputView: {
    borderColor: "#000000",
    borderWidth: 1,
    height: 50,
    paddingLeft: "1%",
    height: 75,
    marginTop: "1.5%"
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
    fontSize: 22,
    marginTop: "3%"
  },
  title: {
    fontSize: 26,
    marginLeft: "3%",
    marginBottom: "5%"
  },
  header: {
    fontSize: 35,
    marginLeft: "5%",
    marginTop: "3%"
  }
});

const Row = styled.View`
  flex-direction: row;
`;
const Col = styled.View`
  flex: 1;
`;

const Content = styled.View`
  display: flex;
  background-color: rgba(255, 255, 255, 0.85);
  height: 100%;
`;
//Background Image
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 25px;
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
