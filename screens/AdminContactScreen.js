import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
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
import ContactCardWeb from "../components/adminContactCard";

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

export default function AdminContact({ navigation }) {
  const [airport, setAirport] = useState("");

  const [contacts, setContacts] = useState("");

  useEffect(() => {
    getContacts();
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

  const getContacts = async () => {
    firebase
      .database()
      .ref("contactUsers/")
      .on("value", projectsDB => {
        var li = [];
        projectsDB.forEach(child => {
          li.push({
            key: child.key,
            email: child.val().email,
            firstName: child.val().firstName,
            lastName: child.val().lastName,
            phoneNumber: child.val().phoneNumber,
            message: child.val().message
          });
        });
        setContacts(li);
      });
  };

  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={{ flex: 1 }}>
        <HeaderComponent></HeaderComponent>
        <View style={{}}>
          <Text style={{ fontSize: 35, margin: "5%" }}>
            All Submitted Contact Leads
          </Text>
        </View>
        <FlatList
          style={{}}
          data={contacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.key}>
              <TouchableOpacity
              // onPress={() => {
              //   navigation.navigate("ProjectDetails", {
              //     airport: item.airport,
              //     date: item.date,
              //     city: item.city,
              //     state: item.state,
              //     description: item.description,
              //     img: item.image
              //   });
              // }}
              >
                <ContactCardWeb
                  firstName={item.firstName}
                  lastName={item.lastName}
                  email={item.email}
                  phoneNumber={item.phoneNumber}
                  message={item.message}
                ></ContactCardWeb>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
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
