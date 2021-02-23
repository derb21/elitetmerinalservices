import { Button, Menu, MenuItem } from "@material-ui/core";
import { DatePicker } from "antd";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";

function ServicesComponent(props) {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>COMPREHENSIVE RANGE OF GLOBAL SERVICES</Header>
      <Row>
        <Col>
          <Card>
            <Image source={require("../assets/workerPBB.jpg")} />
            <Title>Passenger Boarding Bridges Maintenance</Title>
            <Description>
              We provide a complete range of tailored Maintenance Services for
              PBB’s to guarantee continuous, optimum productivity. Such as
              installation, removal, and refurbishment.
            </Description>
          </Card>
        </Col>
        <Col>
          <Card>
            <Image source={require("../assets/workers.jpg")} />
            <Title>Operations</Title>
            <Description>
              ELITE TERMINAL SERVICES highly skilled professionals are trained
              to operate all types of PBBs in order to ensure quick, safe and
              efficient docking operations every day.
            </Description>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Image source={require("../assets/pbbRemoval.jpg")} />
            <Title>Dismantling and Disposal</Title>
            <Description>
              Our expert teams are equipped to handle the dismantling and
              disposal of any PBB's, working on tight schedules and in
              compliance with safety and environmental regulations.
            </Description>
          </Card>
        </Col>
        <Col>
          <Card>
            <Image source={require("../assets/trainingPBB.jpg")} />
            <Title>Training</Title>

            <Description>
              Comprehensive range of Operations and Maintenance training
              programs carried out by ELITE TERMINAL SERVICES instructors.
            </Description>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Image source={require("../assets/welding.jpeg")} />
            <Title>Welding Services</Title>
            <Description>
              Our Experts are certified welders with 30+ years of experience.
            </Description>
          </Card>
        </Col>
        <Col>
          <Card>
            <Image source={require("../assets/bhs.jpeg")} />
            <Title>Baggage Handling Systems</Title>

            <Description>
              We provide a complete range of tailored Maintenance Services for
              baggage handling systems (BHS), to guarantee continuous, optimum
              productivity.
            </Description>
          </Card>
        </Col>
      </Row>
    </View>
  );
}

export default ServicesComponent;

const Card = styled.View`
  background: white;
  width: 100%;
  height: 100%;
`;
const Row = styled.View`
  flex-direction: row;
`;
const Col = styled.View`
  flex: 1;
  margin: 3%;
`;
const Image = styled.Image`
  width: 100%;
  height: 150;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  font-family: Arial;
  padding: 2%;
`;
const Description = styled.Text`
  font-size: 16px;
  text-align: left;
  font-family: Arial;
  padding-left: 2%;
  padding-right: 15%;
  padding-top: 2%;
`;
const Header = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  font-family: Arial;
  padding-left: 3%;
  padding-top: 2%;
  padding-bottom: 2%;

  color: #4682b4;
`;
