import { Menu, MenuItem } from "@material-ui/core";
import { DatePicker } from "antd";
import styled from "styled-components/native";
import { View, Dimensions, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

function DashboardContactStrip(props) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);
  const goToContact = () => {
    console.log("go TO Contact");
    navigation.navigate("ContactScreen");
  };
  const goToAbout = () => {
    navigation.navigate("AboutScreen");
  };
  return (
    <View style={{}}>
      <Content>
        <LinearGradient
          // Background Linear Gradient
          colors={[
            "rgba(44, 130, 201, 0.6)",
            "rgba(44, 130, 201, 0.8)",
            " rgba(44, 130, 201, 1)"
          ]}
          style={{
            height: 200
          }}
        />
        <HeaderCardTXT>Do you Need More Information</HeaderCardTXT>
        <DescriptionTXT>
          Interested to know how ELITE TERMINAL SERVICES engineering solutions
          and technical services can help you enhance your daily operations?
        </DescriptionTXT>
        <TouchableOpacity
          style={{
            borderWidth: 3,
            height: "15%",
            width: "80%",
            marginLeft: "10%",
            borderColor: "white",
            marginTop: "36%",
            position: "absolute"
          }}
          onPress={goToContact}
        >
          <Text
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              textAlign: "center"
            }}
          >
            Contact Us Now
          </Text>
        </TouchableOpacity>
      </Content>
    </View>
  );
}

export default DashboardContactStrip;

const Container = styled.View`
  width: 100%;
  height: 25%;
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
  background-color: rgba(0, 0, 0, 0.5);
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
  width: 85%;
  margin-right: auto;
  margin-left: auto;
`;
const InsideTopDivMobile = styled.View`
  margin-top: 3%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

const HeaderCardTXT = styled.Text`
  color: white;
  font-size: 25px;
  padding-bottom: 2%;
  padding-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
  position: absolute;
`;
const DescriptionTXT = styled.Text`
  color: white;
  font-size: 16px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10%;
  position: absolute;
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
