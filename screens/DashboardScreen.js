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
import HeaderComponent from "../components/header";
import DashProjects from "../components/dashProjects";
import styled from "styled-components/native";
import DashProjectsWeb from "../components/dashProjectWeb";
import DashContactWeb from "../components/dashMoreInfoWeb";
import DashContactMobile from "../components/dashMoreInfoMobile";

// import APIFirebase from "../api/firebase";
import DescriptionStrip from "../components/descriptionStrip";
import * as firebase from "firebase";
import Footer from "../components/footer";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg5oQa5rpfyu4kKFiYNDgvZ4ukTsmO6Qg",
  authDomain: "elite-terminal-services.firebaseapp.com",
  databaseURL: "https://elite-terminal-services-default-rtdb.firebaseio.com",
  projectId: "elite-terminal-services",
  storageBucket: "elite-terminal-services.appspot.com",
  messagingSenderId: "811955200115",
  appId: "1:811955200115:web:0fe04e687593c6a644ca06",
  measurementId: "G-BHTK9FFW23"
};
firebase.initializeApp(firebaseConfig);

const { width } = Dimensions.get("screen");

const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

export default function DashboardScreen({ navigation }) {
  const dbh = firebase.firestore();

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const [mobile, setMobile] = useState(false);
  const [projects, setProjects] = useState("");

  useEffect(() => {
    if (windowWidth < 425) {
      console.log("window width is less than 425");
      setMobile(false);
    } else {
      setMobile(true);
    }

    getProjects();
    return () => {};
  }, []);

  const goToContact = () => {
    console.log("go TO Contact");
    navigation.navigate("ContactScreen");
  };
  const goToProjects = () => {
    console.log("go TO Projects");
    navigation.navigate("ProjectsScreen");
  };
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
          <View style={{ flex: 1 }}>
            <View style={{ height: "40%" }}>
              <HeaderComponent></HeaderComponent>
              {/* <Menu></Menu> */}
              <MenuBig></MenuBig>
            </View>
            <DescriptionStrip></DescriptionStrip>
            <Container>
              <Cover>
                <Image source={require("../assets/skyViewBridges.jpeg")} />

                {/* <Image source={{ uri: props.image }} /> */}
                <Content>
                  <InsideTopDiv>
                    {/* <BorderTop></BorderTop> */}
                    <HeaderCard>
                      <Div>
                        <HeaderCardTXT>Our Mission</HeaderCardTXT>
                        <DescriptionTXT>
                          We pride ourselves on our strong work ethic, the high
                          quality of work we perform, and our integrity in the
                          industry. We love what we do and value our clients who
                          have given us the opportunity to do business with
                          them.
                        </DescriptionTXT>
                      </Div>
                    </HeaderCard>
                  </InsideTopDiv>
                </Content>
              </Cover>
            </Container>
            <Title>Explore Recent Projects</Title>
            <RecentTXT>
              We pride ourselves on our strong work ethic, the high quality of
              work we perform, and our integrity in the industry. We love what
              we do and value our clients who have given us the opportunity to
              do business with them.
            </RecentTXT>
            <View style={{ height: "21%", marginTop: "3%" }}>
              <FlatList
                style={{}}
                horizontal
                data={projects}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View
                    key={item.key}
                    style={{ width: "100%", flexDirection: "row" }}
                  >
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
                      <DashProjectsWeb
                        airport={item.airport}
                        img={item.image}
                      ></DashProjectsWeb>
                    </TouchableOpacity>
                  </View>
                )}
              />
              <TouchableOpacity
                style={{
                  borderWidth: 3,
                  height: "10%",
                  marginRight: "auto",
                  marginLeft: "auto",
                  borderColor: "#4682b4",
                  marginTop: "3%"
                }}
                onPress={goToProjects}
              >
                <Text
                  style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    fontSize: 20,
                    color: "#4682b4"
                  }}
                >
                  View Projects
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: "20%", marginTop: "5%" }}>
              <DashContactWeb></DashContactWeb>
            </View>
            <Footer></Footer>
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <HeaderComponent></HeaderComponent>
            {/* <Menu></Menu> */}
            <MenuBig></MenuBig>
            <DescriptionStrip></DescriptionStrip>
            <View style={{ marginTop: "10%" }}>
              <ContainerMobile>
                <Cover>
                  <Image source={require("../assets/skyViewBridges.jpeg")} />

                  {/* <Image source={{ uri: props.image }} /> */}
                  <Content>
                    <InsideTopDivMobile>
                      {/* <BorderTop></BorderTop> */}
                      <HeaderCard>
                        <Div>
                          <HeaderCardTXTMobile>Our Mission</HeaderCardTXTMobile>
                          <DescriptionTXTMobile>
                            We pride ourselves on our strong work ethic, the
                            high quality of work we perform, and our integrity
                            in the industry. We love what we do and value our
                            clients who have given us the opportunity to do
                            business with them.
                          </DescriptionTXTMobile>
                        </Div>
                      </HeaderCard>
                    </InsideTopDivMobile>
                  </Content>
                </Cover>
              </ContainerMobile>
              <View style={{ height: "13%", marginTop: "5%" }}>
                <DashContactMobile></DashContactMobile>
              </View>
              <TitleMobile>Explore Recent Projects</TitleMobile>
              <RecentTXTMobile>
                We pride ourselves on our strong work ethic, the high quality of
                work we perform, and our integrity in the industry. We love what
                we do and value our clients who have given us the opportunity to
                do business with them.
              </RecentTXTMobile>
              <TouchableOpacity
                style={{
                  borderWidth: 3,
                  height: "4%",
                  marginRight: "auto",
                  marginLeft: "auto",
                  borderColor: "#4682b4",
                  marginTop: "8%"
                }}
                onPress={goToProjects}
              >
                <Text
                  style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    fontSize: 20,
                    color: "#4682b4"
                  }}
                >
                  View Projects
                </Text>
              </TouchableOpacity>
              <View style={{}}>
                <FlatList
                  style={{}}
                  data={projects}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <View
                      key={item.key}
                      style={{
                        width: "100%",
                        paddingBottom: 50
                      }}
                    >
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
                        <DashProjects
                          airport={item.airport}
                          img={item.image}
                        ></DashProjects>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
              <Footer></Footer>
            </View>
          </View>
        )}
      </>
    </ScrollView>
  );
}

const Container = styled.View`
  width: 100%;
  height: 25%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.View`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Content = styled.View`
  display: flex;
  background-color: rgba(44, 130, 201, 0.6);

  height: 100%;
`;

const Div = styled.View`
  margin-top: 16%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
`;
//Background Image
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
const ImageProject = styled.Image`
  width: 100%;
  height: 200;
`;
const InsideTopDiv = styled.View`
  width: 50%;
  margin-left: auto;
`;

const HeaderCardTXT = styled.Text`
  color: white;
  font-size: 45px;
  font-weight: bolder;
  margin-top: 20px;
  text-align: center;
`;
const ProjectName = styled.Text`
  color: black;
  font-size: 35px;
  z-index: 1;
  text-align: center;
`;
const DescriptionTXT = styled.Text`
  color: white;
  font-size: 24px;
  padding-bottom: 2%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 2%;
`;
const RecentTXT = styled.Text`
  color: black;
  font-size: 24px;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
  margin-top: 2%;
`;
//Container Information Start
const HeaderCard = styled.View`
  width: 75%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.Text`
  margin-right: auto;
  margin-left: auto;
  margin-top: 3%;
  font-size: 45px;
  color: #4682b4;
`;

//MOBILE CSS
const ContainerMobile = styled.View`
  width: 100%;
  height: 30%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const RecentTXTMobile = styled.Text`
  color: black;
  font-size: 17px;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
  margin-top: 2%;
`;
const TitleMobile = styled.Text`
  margin-right: auto;
  margin-left: auto;
  margin-top: 3%;
  font-size: 35px;
  color: #4682b4;
`;

const RowMobile = styled.View`
  flex-direction: row;
  flex: 1;
  padding-bottom: 30%;
`;
const ColMobile = styled.View`
  flex: 1;
  margin: 0.5%;
  height: 75;
  background-color: rgba(255, 255, 255, 0.95);
`;
const HeaderCardTXTMobile = styled.Text`
  color: white;
  font-size: 28px;
  padding-bottom: 2%;
  padding-top: 2%;
  text-align: center;
`;
const DescriptionTXTMobile = styled.Text`
  color: white;
  font-size: 20px;
  padding-bottom: 2%;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 2%;
`;
const ImageProjectMobile = styled.Image`
  width: 100%;
  height: 50;
`;
const ProjectNameMobile = styled.Text`
  color: black;
  font-size: 15px;
  z-index: 1;
  text-align: center;
`;
const InsideTopDivMobile = styled.View`
  width: 100%;
`;
