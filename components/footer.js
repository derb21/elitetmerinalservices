import { Button } from "@material-ui/core";
import { DatePicker } from "antd";
import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

function FooterComponent(props) {
  const navigation = useNavigation();

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

  const goHome = () => {
    console.log("go TO Home");
    navigation.navigate("DashboardScreen");
  };
  const goToAbout = () => {
    console.log("go TO About");
    navigation.navigate("AboutScreen");
  };
  const goToProjects = () => {
    console.log("go TO Projects");
    navigation.navigate("ProjectsScreen");
  };
  const goToContact = () => {
    console.log("go TO Contact");
    navigation.navigate("ContactScreen");
  };
  const adminScreen = () => {
    console.log("go TO add projects");
    navigation.navigate("AddProjects");
  };
  return (
    <>
      {/* Loading this View While waiting for location to return */}
      {mobile === true ? (
        <Container>
          <Cover>
            {/* <Image source={{ uri: props.image }} /> */}
            <Content>
              {/* <BorderTop></BorderTop> */}

              <Row>
                <Col>
                  <Title>About ELITE TERMINAL SERVICES</Title>
                  <Border></Border>
                  <Description>
                    We are airport contractors who specialize in the
                    installation, maintenance, repair and refurbishment of
                    airport passenger boarding bridges (PBB's) and related
                    equipment. Our company headquarters is based in Salt Lake
                    City, Utah.
                  </Description>
                </Col>

                <Col>
                  <Title>Featured</Title>
                  <Border></Border>

                  <TouchableOpacity onPress={goHome} style={{}}>
                    <Description>Home</Description>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={goToAbout} style={{}}>
                    <Description>About</Description>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={goToContact} style={{}}>
                    <Description>Contact</Description>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={goToProjects} style={{}}>
                    <Description>Projects</Description>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={adminScreen} style={{}}>
                    <Description>Admin</Description>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <Title>Contact</Title>
                  <Border></Border>

                  <Description>Phone Number: 805-234-9876</Description>
                  <Description>
                    Email: info@eliteterminalservices.com
                  </Description>

                  <Description></Description>
                </Col>
              </Row>
            </Content>
          </Cover>
        </Container>
      ) : (
        <ContainerMobile>
          <Cover>
            {/* <Image source={{ uri: props.image }} /> */}
            <Content>
              {/* <BorderTop></BorderTop> */}

              <Row>
                <Col>
                  <TitleMobile>About ELITE TERMINAL SERVICES</TitleMobile>
                  <Border></Border>
                  <DescriptionMobile>
                    We are airport contractors who specialize in the
                    installation, maintenance, repair and refurbishment of
                    airport passenger boarding bridges (PBB's) and related
                    equipment. Our company headquarters is based in Salt Lake
                    City, Utah.
                  </DescriptionMobile>
                </Col>

                <ColRight>
                  <TitleMobile>Featured</TitleMobile>
                  <Border></Border>
                  <TouchableOpacity onPress={goHome} style={{}}>
                    <DescriptionMobile>Home</DescriptionMobile>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={goToAbout} style={{}}>
                    <DescriptionMobile>About</DescriptionMobile>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={goToContact} style={{}}>
                    <DescriptionMobile>Contact</DescriptionMobile>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={goToProjects} style={{}}>
                    <DescriptionMobile>Projects</DescriptionMobile>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={adminScreen} style={{}}>
                    <DescriptionMobile>Admin</DescriptionMobile>
                  </TouchableOpacity>
                </ColRight>
              </Row>
            </Content>
          </Cover>
        </ContainerMobile>
      )}
    </>
  );
}
export default FooterComponent;

//Whole Card

const Container = styled.View`
  background: white;
  width: 100%;
  height: 35%;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;
const Cover = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border-top-right-radius: 14px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Content = styled.View`
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
`;
const Description = styled.Text`
  color: white;
  font-size: 25px;

  text-align: left;
  margin: 5%;
`;
const Border = styled.View`
  height: 0.5%;
  background-color: white;
  width: 85%;
  margin-right: 10%;
  margin-left: 7%;
`;
const Title = styled.Text`
  margin: 5%;

  font-size: 30px;
  font-weight: bold;
  color: white;
`;
const Row = styled.View`
  flex-direction: row;
  flex: 1;
  background-color: #383838;
`;
const Col = styled.View`
  flex: 2;
`;
const ColContact = styled.View`
  flex: 1;
`;
const ColRight = styled.View`
  flex: 1;
`;

//Mobile CSS
const ContainerMobile = styled.View`
  background: white;
  width: 100%;
  height: 35%;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;
const DescriptionMobile = styled.Text`
  color: white;
  font-size: 15px;

  text-align: left;
  margin: 5%;
`;

const TitleMobile = styled.Text`
  margin: 5%;

  font-size: 17px;
  font-weight: bold;
  color: white;
`;
