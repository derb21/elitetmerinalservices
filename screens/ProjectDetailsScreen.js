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
import HeaderComponent from "../components/headerProjectDetails";
import ProjectCard from "../components/projectCard";
import styled from "styled-components/native";

// import APIFirebase from "../api/firebase";
import * as firebase from "firebase";
import DescriptionStrip from "../components/descriptionStrip";
import Footer from "../components/footer";
import Item from "antd/lib/list/Item";

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

export default function ProjectDetailsScreen({ route }) {
  const [projects, setProjects] = useState("");

  const { airport } = route.params;
  const { city } = route.params;
  const { state } = route.params;
  const { description } = route.params;
  const { date } = route.params;
  const { img } = route.params;
  console.log("params img", img);

  console.log("params", airport, city, state, description);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [imageUse, setImage] = useState("");

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (img) {
      setImage(img);
    } else {
      setImage(require("../assets/bridgeAirplane.jpg"));
    }
    if (windowWidth < 425) {
      console.log("window width is less than 425");
      setMobile(false);
    } else {
      setMobile(true);
    }
    return () => {};
  }, []);

  return (
    <ScrollView style={{ height: "100%" }}>
      <>
        {/* Loading this View While waiting for location to return */}
        {mobile === true ? (
          <View style={{}}>
            <View style={{ height: "52%" }}>
              <HeaderComponent
                airport={airport}
                state={state}
                city={city}
              ></HeaderComponent>
              {/* <Menu></Menu> */}
              <MenuBig></MenuBig>
              <View style={{ height: "100%", marginTop: "30%" }}>
                <RowLeft>
                  <ColLeft>
                    {/* <ImageProject
                      source={require("../assets/skyViewBridges.jpeg")}
                    /> */}
                    <ImageProject
                      source={{
                        uri: imageUse
                      }}
                    ></ImageProject>
                  </ColLeft>
                  <ColRight>
                    <View>
                      <DescriptionTitle>About the Project</DescriptionTitle>
                      <DescriptionTXT>{description}</DescriptionTXT>
                      <Border></Border>

                      <Row>
                        <Col>
                          <LBL>Installation</LBL>
                          <Border></Border>
                        </Col>
                        <Col>
                          <InfoTXT>{date}</InfoTXT>
                          <Border></Border>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <LB>Location</LB>
                          <Border></Border>
                        </Col>
                        <Col>
                          <InfoTXt>
                            {city}, {state}
                          </InfoTXt>
                          <Border></Border>
                        </Col>
                      </Row>
                    </View>
                  </ColRight>
                </RowLeft>
                {/* <View style={{ height: "150%", marginTop: "16%" }}>
                  <Footer></Footer>
                </View> */}
              </View>
            </View>
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={{ height: "67%" }}>
              <HeaderComponent
                airport={airport}
                state={state}
                city={city}
              ></HeaderComponent>
              {/* <Menu></Menu> */}
              <MenuBig></MenuBig>

              <TXTDivMobile>
                <DescriptionTitleMobile>
                  About the Project
                </DescriptionTitleMobile>
              </TXTDivMobile>
              <BorderMobile></BorderMobile>
              <RowMobileOne>
                <Col>
                  <LBLMobile>Installation</LBLMobile>
                  <Border></Border>
                </Col>
                <Col>
                  <InfoTXTMobile>{date}</InfoTXTMobile>
                  <Border></Border>
                </Col>
              </RowMobileOne>
              <RowMobile>
                <Col>
                  <LBMobile>Location</LBMobile>
                  <Border></Border>
                </Col>
                <Col>
                  <InfoTXtMobile>
                    {city}, {state}
                  </InfoTXtMobile>
                  <Border></Border>
                </Col>
              </RowMobile>
              <View
                style={{
                  marginLeft: "5%",
                  marginRight: "5%"
                }}
              >
                <ImageProjectMobile
                  source={{
                    uri: imageUse
                  }}
                ></ImageProjectMobile>
              </View>
              <TXTDescriptionMobile>
                <DescriptionTXTMobile>{description}</DescriptionTXTMobile>
              </TXTDescriptionMobile>

              {/* <Footer></Footer> */}
            </View>
          </View>
        )}
      </>
    </ScrollView>
  );
}

const RowLeft = styled.View`
  flex-direction: row;
  flex: 1;
  margin-top: 30%;
  padding-bottom: 40%;
`;
const ColLeft = styled.View`
  flex: 1;
  margin: 2%;
`;
const ColRight = styled.View`
  flex: 1.3;
  margin: 5%;
`;
const Row = styled.View`
  flex-direction: row;
  flex: 1;
  margin-top: 7%;
`;
const Col = styled.View`
  flex: 1;
  margin: 0.5%;
  height: 250;
  border-radius: 25px;
`;

const ImageProject = styled.Image`
  width: 100%;
  height: 400;
  background-position: fill;
  border-radius: 25px;
`;

const DescriptionTitle = styled.Text`
  color: #4682b4;
  font-size: 40px;
  padding-top: 1%;
  text-align: center;
`;
const DescriptionTXT = styled.Text`
  color: black;
  font-size: 27px;
  padding-top: 3%;

  text-align: center;
`;
//Container Information Start
const Border = styled.View`
  height: 0.5%;
  background-color: gray;
`;
const BorderMobile = styled.View`
  height: 0.5%;
  background-color: gray;
  margin-top: 5%;
`;

const LBL = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 5%;
  margin-top: 5%;
`;
const LB = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 5%;
  margin-top: 15%;
`;
const InfoTXT = styled.Text`
  color: black;
  font-size: 28px;
  margin-bottom: 5%;
  margin-top: 5%;
  text-align: center;
`;
const InfoTXt = styled.Text`
  color: black;
  font-size: 28px;
  margin-bottom: 5%;
  margin-top: 15%;
  text-align: center;
`;

//Mobile CSS
const ImageProjectMobile = styled.Image`
  width: 100%;
  height: 200;
  background-position: cover;
  border-radius: 25px;
`;

const LBLMobile = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 2%;
  margin-top: 2%;
`;
const LBMobile = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 2%;
  margin-top: 18%;
`;
const InfoTXTMobile = styled.Text`
  color: black;
  font-size: 18px;
  margin-bottom: 2%;
  margin-top: 2%;
  text-align: center;
`;
const InfoTXtMobile = styled.Text`
  color: black;
  font-size: 18px;
  margin-bottom: 2%;
  margin-top: 18%;
  text-align: center;
`;

const DescriptionTitleMobile = styled.Text`
  color: #4682b4;
  font-size: 27px;
  padding-top: 1%;
  margin-left: 5%;
`;
const DescriptionTXTMobile = styled.Text`
  color: black;
  font-size: 18px;
  padding-top: 3%;
  text-align: left;
`;
const RowMobile = styled.View`
  flex-direction: row;
  flex: 1;
  padding-bottom: 30%;
`;
const RowMobileOne = styled.View`
  flex-direction: row;
  flex: 1;
`;
const TXTDivMobile = styled.View`
  flex: 1;
  margin-top: 92%;
  padding-bottom: 5%;
`;
const TXTDescriptionMobile = styled.View`
  flex: 1;
  margin: 5%;
  padding-bottom: 43%;
`;
