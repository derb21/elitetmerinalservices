import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Form,
  TextInput,
  Button,
  Dimensions
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Menu from "../components/menu";
import MenuBig from "../components/menuBig";
import HeaderComponent from "../components/headerAbout";
import Services from "../components/servicesList";
import ServicesMobile from "../components/servicesListMobile";

import styled from "styled-components/native";

// import APIFirebase from "../api/firebase";
import * as firebase from "firebase";
import DescriptionStrip from "../components/descriptionStrip";
import { Ionicons } from "@expo/vector-icons";
import Footer from "../components/footer";

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

export default function AboutScreen() {
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

    return () => {};
  }, []);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

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

  return (
    <ScrollView style={{ height: "100%" }}>
      <>
        {/* Loading this View While waiting for location to return */}
        {mobile === true ? (
          <View style={{ flex: 1 }}>
            <View style={{ height: 800 }}>
              <HeaderComponent></HeaderComponent>
              {/* <Menu></Menu> */}
              <MenuBig></MenuBig>
            </View>

            <View style={{ height: "20%" }}>
              <Container>
                <Cover>
                  {/* <Image source={{ uri: props.image }} /> */}
                  <Content>
                    <InsideTopDiv>
                      {/* <BorderTop></BorderTop> */}
                      <HeaderCard>
                        <HeaderCardTXT>Experienced Contractors</HeaderCardTXT>
                        <DescriptionTXT>
                          We are airport contractors who specialize in the
                          installation, maintenance, repair and refurbishment of
                          airport passenger boarding bridges (PBB's) and related
                          equipment.
                        </DescriptionTXT>
                        <DescriptionTXT>
                          We pride ourselves on our strong work ethic, the high
                          quality of work we perform, and our integrity in the
                          industry. We love what we do and value our clients who
                          have given us the opportunity to do business with
                          them. Our company headquarters is based in Salt Lake
                          City, Utah.
                        </DescriptionTXT>
                        <DescriptionTXT>
                          Elite Terminal services Group’s strength lies within
                          its capability to manage turn-key projects, to adapt
                          to the specific requirements of our clients in the
                          Airport and Seaport markets, to assure the highest
                          quality, to deliver on-time and to ensure client
                          satisfaction.
                        </DescriptionTXT>
                      </HeaderCard>
                    </InsideTopDiv>
                  </Content>
                </Cover>
              </Container>
            </View>
            <View style={{ height: "15%", marginTop: "1%" }}>
              <Container>
                <Cover>
                  <ContentPhoto>
                    <Row>
                      <Col>
                        <Ionicons
                          name="md-map"
                          size={100}
                          style={{ textAlign: "center", marginTop: "10%" }}
                          color="white"
                        />

                        <ProjectName style={{}}>50 States</ProjectName>
                        <RecentTXT>
                          For 20 years we have been serving you in all 50 US
                          states
                        </RecentTXT>
                      </Col>
                      <Col>
                        <Ionicons
                          name="md-refresh"
                          size={100}
                          style={{ textAlign: "center", marginTop: "10%" }}
                          color="white"
                        />
                        <ProjectName style={{}}>360 Service</ProjectName>
                        <RecentTXT>
                          ELITE TERMINAL SERVICES controls every aspect, for a
                          complete project
                        </RecentTXT>
                      </Col>
                      <Col>
                        <Ionicons
                          name="md-people-circle"
                          size={100}
                          style={{ textAlign: "center", marginTop: "10%" }}
                          color="white"
                        />
                        <ProjectName style={{}}>Driven Employees</ProjectName>
                        <RecentTXT>
                          All of our employees undergo many certifications to
                          make sure they are doing the best job possible
                        </RecentTXT>
                      </Col>
                      <Col>
                        <Ionicons
                          name="md-pencil"
                          size={100}
                          style={{ textAlign: "center", marginTop: "10%" }}
                          color="white"
                        />
                        <ProjectName style={{}}>Signature Projects</ProjectName>
                        <RecentTXT>
                          ELITE TERMINAL SERVICES has succesfully completed over
                          1000 projects throughout the United States
                        </RecentTXT>
                      </Col>
                    </Row>
                  </ContentPhoto>
                </Cover>
              </Container>
            </View>
            <View style={{ height: "50%", backgroundColor: "white" }}>
              <Services></Services>
            </View>
            <Footer></Footer>

            {/* <FormComponent></FormComponent> */}
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <HeaderComponent></HeaderComponent>
            {/* <Menu></Menu> */}
            <MenuBig></MenuBig>
            <View style={{ marginTop: "100%" }}>
              <InsideTopDivMobile>
                {/* <BorderTop></BorderTop> */}
                <HeaderCard>
                  <HeaderCardTXTMobile>
                    Experienced Contractors
                  </HeaderCardTXTMobile>
                  <DescriptionTXTMobile>
                    We are airport contractors who specialize in the
                    installation, maintenance, repair and refurbishment of
                    airport passenger boarding bridges (PBB's) and related
                    equipment.
                  </DescriptionTXTMobile>
                  <DescriptionTXTMobile>
                    We pride ourselves on our strong work ethic, the high
                    quality of work we perform, and our integrity in the
                    industry. We love what we do and value our clients who have
                    given us the opportunity to do business with them. Our
                    company headquarters is based in Salt Lake City, Utah.
                  </DescriptionTXTMobile>
                  <DescriptionTXTMobile>
                    Elite Terminal services Group’s strength lies within its
                    capability to manage turn-key projects, to adapt to the
                    specific requirements of our clients in the Airport and
                    Seaport markets, to assure the highest quality, to deliver
                    on-time and to ensure client satisfaction.
                  </DescriptionTXTMobile>
                </HeaderCard>
              </InsideTopDivMobile>
            </View>
            <View style={{ height: "33%", backgroundColor: "#4682b4" }}>
              <ColMobile>
                <Ionicons
                  name="md-map"
                  size={45}
                  style={{ textAlign: "center", marginTop: "10%" }}
                  color="white"
                />

                <ProjectNameMobile style={{}}>50 States</ProjectNameMobile>
                <RecentTXTMobile>
                  For 20 years we have been serving you in all 50 US states
                </RecentTXTMobile>
              </ColMobile>
              <ColMobile>
                <Ionicons
                  name="md-refresh"
                  size={45}
                  style={{ textAlign: "center", marginTop: "10%" }}
                  color="white"
                />
                <ProjectNameMobile style={{}}>360 Service</ProjectNameMobile>
                <RecentTXTMobile>
                  ELITE TERMINAL SERVICES controls every aspect, for a complete
                  project
                </RecentTXTMobile>
              </ColMobile>

              <ColMobile>
                <Ionicons
                  name="md-people-circle"
                  size={45}
                  style={{ textAlign: "center", marginTop: "10%" }}
                  color="white"
                />
                <ProjectNameMobile style={{}}>
                  Driven Employees
                </ProjectNameMobile>
                <RecentTXTMobile>
                  All of our employees undergo many certifications to make sure
                  they are doing the best job possible
                </RecentTXTMobile>
              </ColMobile>
              <ColMobile>
                <Ionicons
                  name="md-pencil"
                  size={45}
                  style={{ textAlign: "center", marginTop: "10%" }}
                  color="white"
                />
                <ProjectNameMobile style={{}}>
                  Signature Projects
                </ProjectNameMobile>
                <RecentTXTMobile>
                  ELITE TERMINAL SERVICES has succesfully completed over 1000
                  projects throughout the United States
                </RecentTXTMobile>
              </ColMobile>
            </View>
            <View style={{ height: "58%" }}>
              <ServicesMobile></ServicesMobile>
            </View>
            <Footer></Footer>
          </View>
        )}
      </>
    </ScrollView>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Content = styled.View`
  display: flex;
  background-color: rgba(255, 255, 255, 0.85);
  height: 100%;
`;
const ContentPhoto = styled.View`
  display: flex;
  height: 100%;
  background-color: #4682b4;
`;
const Row = styled.View`
  flex-direction: row;
  flex: 1;
  padding-bottom: 20%;
  padding-top: 3%;
  margin-top: auto;
  margin-bottom: auto;
`;
const Col = styled.View`
  flex: 1;
  margin: 0.5%;
  height: 250;
  border-radius: 25px;
`;

const InsideTopDiv = styled.View`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

const HeaderCardTXT = styled.Text`
  color: #4682b4;
  font-size: 45px;
  padding-bottom: 4%;
  padding-top: 1%;
  text-align: center;
`;
const DescriptionTXT = styled.Text`
  color: gray;
  font-size: 30px;
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
const RecentTXT = styled.Text`
  color: white;
  font-size: 24px;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
  margin-top: 2%;
`;
const ProjectName = styled.Text`
  color: white;
  font-size: 35px;
  padding-bottom: 5%;
  padding-top: 8%;
  z-index: 1;
  text-align: center;
`;

//Mobile CSS

const InsideTopDivMobile = styled.View`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

const HeaderCardTXTMobile = styled.Text`
  color: #4682b4;
  font-size: 25px;
  padding-bottom: 7%;
  padding-top: 1%;
  text-align: center;
`;
const DescriptionTXTMobile = styled.Text`
  color: gray;
  font-size: 17px;
  padding-bottom: 2%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 2%;
`;
const RecentTXTMobile = styled.Text`
  color: white;
  font-size: 16px;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
  margin-top: 2%;
`;
const ProjectNameMobile = styled.Text`
  color: white;
  font-size: 24px;
  z-index: 1;
  font-weight: bold;
  text-align: center;
`;

const ColMobile = styled.View`
  flex: 1;

  margin: 0.5%;
  border-radius: 25px;
`;
