import { DatePicker } from "antd";
import styled from "styled-components/native";
import { View, ScrollView, Text, Button } from "react-native";
import React, { useState, useEffect } from "react";

function DashProjects(props) {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (props.img) {
      setImage(props.img);
    } else {
      setImage(require("../assets/bridgeAirplane.jpg"));
    }
    return () => {};
  }, []);
  return (
    <View style={{ backgroundColor: "white", height: 200, margin: "10%" }}>
      <ImageProject
        source={{
          uri: image
        }}
      />
      <DivWhite>
        <ProjectName style={{}}>{props.airport}</ProjectName>
      </DivWhite>
    </View>
  );
}

export default DashProjects;

const DivWhite = styled.View`
  width: 100%;
  height: 25%;
  background-color: white;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Content = styled.View`
  flex-direction: column;
  display: flex;
`;

const Col = styled.View`
  flex: 1;
  margin: 0.5%;
  height: 250;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.95);
`;

const ImageProject = styled.Image`
  width: 100%;
  height: 100%;
  background-size: fill;
`;
const ProjectName = styled.Text`
  color: black;
  font-size: 18px;
  z-index: 1;
  width: 100%;
  text-align: center;
`;
