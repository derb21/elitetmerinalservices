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
import HeaderContact from "../components/headerContact";
import FormComponent from "../components/form";
import styled from "styled-components/native";
import Footer from "../components/footer";

// import APIFirebase from "../api/firebase";
// import * as firebase from "firebase";

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

export default function ContactScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
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
          <View style={{ flex: 1 }}>
            <View style={{ height: 800 }}>
              <HeaderContact></HeaderContact>
              {/* <Menu></Menu> */}
              <MenuBig></MenuBig>
            </View>

            <View style={{ height: "75%" }}>
              <Container>
                <Cover>
                  {/* <Image source={{ uri: props.image }} /> */}
                  <Content>
                    <InsideTopDiv>
                      {/* <BorderTop></BorderTop> */}
                      <HeaderCard>
                        <DescriptionTXT>
                          Interested in learning more about how ELITE TERMINAL
                          SERVICES engineering solutions and technical services
                          can help you enhance your daily operations?
                        </DescriptionTXT>
                        <HeaderCardTXT>
                          Contact us and we will find the right solution that
                          fits your needs.
                        </HeaderCardTXT>
                      </HeaderCard>
                      <View style={{ marginTop: "5%" }}>
                        <FormComponent></FormComponent>
                      </View>
                    </InsideTopDiv>
                  </Content>
                </Cover>
                <Footer></Footer>
              </Container>
            </View>
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={{ height: "60%" }}>
              <HeaderContact></HeaderContact>
              {/* <Menu></Menu> */}
              <MenuBig></MenuBig>
              <View style={{ marginTop: "80%" }}>
                <Container>
                  <Cover>
                    {/* <Image source={{ uri: props.image }} /> */}
                    <Content>
                      <InsideTopDivMobile>
                        {/* <BorderTop></BorderTop> */}
                        <HeaderCard>
                          <DescriptionTXTMobile>
                            Interested in learning more about how ELITE TERMINAL
                            SERVICES engineering solutions and technical
                            services can help you enhance your daily operations?
                          </DescriptionTXTMobile>
                          <HeaderCardTXTMobile>
                            Contact us and we will find the right solution that
                            fits your needs.
                          </HeaderCardTXTMobile>
                        </HeaderCard>
                        <View style={{ marginTop: "5%" }}>
                          <FormComponent></FormComponent>
                        </View>
                      </InsideTopDivMobile>
                    </Content>
                  </Cover>
                  <Footer></Footer>
                </Container>
              </View>
            </View>
          </View>
        )}
      </>
    </ScrollView>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  margin-top: 70%;
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
  margin-top: 3%;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
`;

const HeaderCardTXT = styled.Text`
  color: black;
  font-size: 26px;
  padding-bottom: 2%;
  padding-top: 2%;
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

const InsideTopDivMobile = styled.View`
  margin-top: 3%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

const HeaderCardTXTMobile = styled.Text`
  color: black;
  font-size: 20px;
  padding-bottom: 2%;
  padding-top: 2%;
  text-align: center;
`;
const DescriptionTXTMobile = styled.Text`
  color: gray;
  font-size: 18px;
  padding-bottom: 2%;
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 2%;
`;
