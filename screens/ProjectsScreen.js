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
  FlatList
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Menu from "../components/menu";
import MenuBig from "../components/menuBig";
import HeaderComponent from "../components/headerProjects";
import ProjectCard from "../components/projectCard";
import Footer from "../components/footer";
import ProjectCardOne from "../components/projectCardOne";

import styled from "styled-components/native";

// import APIFirebase from "../api/firebase";
import * as firebase from "firebase";
import DescriptionStrip from "../components/descriptionStrip";

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

export default function ProjectsScreen({ navigation }) {
  const [projects, setProjects] = useState("");
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    getProjects();
    console.log("projects is set", projects);
    if (windowWidth < 425) {
      console.log("window width is less than 425");
      setMobile(false);
    } else {
      setMobile(true);
    }
    return () => {};
  }, []);
  const storeFirstName = async userId => {
    firebase
      .database()
      .ref("users/")
      .push({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        message: message
      });
  };
  const airportProjects = [];
  const getProjects = async () => {
    firebase
      .database()
      .ref("projects/")
      .on("value", projectsDB => {
        var li = [];
        projectsDB.forEach(child => {
          li.push({
            key: child.key,
            airport: child.val().airport,
            city: child.val().city,
            state: child.val().state,
            date: child.val().date,
            description: child.val().description,
            image: child.val().image
          });
        });
        setProjects(li);
      });

    // var _projects = firebase.database().ref("projects/");
    // _projects.on("value", snapshot => {
    //   const data = snapshot.val();
    //   console.log("data", data);
    //   // for (let value of data[0]) {
    //   //   airportProjects.push(value);
    //   // }
    //   setProjects(data);
    // });
  };
  return (
    <ScrollView style={{ height: "100%" }}>
      <>
        {/* Loading this View While waiting for location to return */}
        {mobile === true ? (
          <View style={{}}>
            <View style={{ height: 800 }}>
              <HeaderComponent></HeaderComponent>
              {/* <Menu></Menu> */}
              <MenuBig></MenuBig>
            </View>

            {/* <RowLeft>
                <ColLeft> */}
            <View
              style={{
                backgroundColor: "#4682b4",
                padding: "2%",
                height: "100%"
              }}
            >
              <FlatList
                style={{}}
                data={projects}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View key={item.key}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("ProjectDetails", {
                          airport: item.airport,
                          date: item.date,
                          city: item.city,
                          state: item.state,
                          description: item.description,
                          img: item.image
                        });
                      }}
                    >
                      <ProjectCardOne
                        airport={item.airport}
                        date={item.date}
                        city={item.city}
                        state={item.state}
                        description={item.description}
                        img={item.image}
                      ></ProjectCardOne>
                    </TouchableOpacity>
                  </View>
                )}
              />
              <Footer></Footer>
              {/* </ColLeft> */}
              {/* <ColRight>
                  <View>
                    <TouchableOpacity>
                      <ProjectCard></ProjectCard>
                      <ProjectCard></ProjectCard>
                    </TouchableOpacity>
                  </View>
                </ColRight> */}
              {/* </RowLeft> */}
            </View>
          </View>
        ) : (
          <View style={{}}>
            <View style={{ height: 400 }}>
              <HeaderComponent></HeaderComponent>
              {/* <Menu></Menu> */}
              <MenuBig></MenuBig>

              <View
                style={{
                  marginTop: "105%",
                  marginLeft: "1%",
                  marginRight: "1%"
                }}
              >
                <FlatList
                  style={{ borderRadius: 15 }}
                  data={projects}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <View key={item.key} style={{ paddingBottom: "1%" }}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("ProjectDetails", {
                            airport: item.airport,
                            date: item.date,
                            city: item.city,
                            state: item.state,
                            description: item.description,
                            img: item.image
                          });
                        }}
                      >
                        <ProjectCard
                          airport={item.airport}
                          date={item.date}
                          city={item.city}
                          state={item.state}
                          description={item.description}
                          img={item.image}
                        ></ProjectCard>
                      </TouchableOpacity>
                    </View>
                  )}
                />
                <Footer></Footer>
              </View>
            </View>
          </View>
        )}
      </>
    </ScrollView>
  );
}

//Background Image

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
const RecentTXT = styled.Text`
  color: white;
  font-size: 24px;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
  margin-top: 2%;
  font-family: "Montserrat";
`;
const ProjectName = styled.Text`
  color: white;
  font-size: 35px;
  padding-bottom: 5%;
  padding-top: 8%;
  z-index: 1;
  text-align: center;
  font-family: "MontserratSemiBold";
`;
const Title = styled.Text`
  margin-bottom: 1%;
  margin-left: 1%;
  font-size: 45px;
  font-weight: bold;
  color: white;
`;
