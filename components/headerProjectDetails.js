import { Button } from "@material-ui/core";
import { DatePicker } from "antd";
import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Dimensions, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function HeaderProjectDetails(props) {
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
    <>
      {/* Loading this View While waiting for location to return */}
      {mobile === true ? (
        <Container>
          <Cover>
            <Image source={require("../assets/bridges.jpg")} />

            {/* <Image source={{ uri: props.image }} /> */}
            <Content>
              <GrayDiv>
                <InsideTopDiv>
                  {/* <BorderTop></BorderTop> */}
                  <HeaderCard>
                    <Header>
                      <HeaderCardTXT>{props.airport}</HeaderCardTXT>
                      <BottomTXT>
                        {props.city}, {props.state}
                      </BottomTXT>
                    </Header>
                  </HeaderCard>
                </InsideTopDiv>
              </GrayDiv>
            </Content>
          </Cover>
        </Container>
      ) : (
        <ContainerMobile>
          <Cover>
            <Image source={require("../assets/bridges.jpg")} />

            {/* <Image source={{ uri: props.image }} /> */}
            <Content>
              <GrayDiv>
                <InsideTopDivMobile>
                  {/* <BorderTop></BorderTop> */}
                  <HeaderCard>
                    <Header>
                      <HeaderCardTXTMobile>{props.airport}</HeaderCardTXTMobile>
                      <BottomTXTMobile>
                        {props.city}, {props.state}
                      </BottomTXTMobile>
                    </Header>
                  </HeaderCard>
                </InsideTopDivMobile>
              </GrayDiv>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "transparent",
                  "transparent",
                  "transparent",

                  " rgba(44, 130, 201, 1)"
                ]}
                style={{
                  height: "100%",
                  borderBottomRightRadius: 25,
                  borderBottomLeftRadius: 25
                }}
              />
            </Content>
          </Cover>
        </ContainerMobile>
      )}
    </>
  );
}
export default HeaderProjectDetails;

//Whole Card

const Container = styled.View`
  background: white;
  width: 100%;
  height: 100%;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  position: absolute;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;
const Cover = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const GrayDiv = styled.View`
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  height: 20%;
  width: 100%;
  position: absolute;
`;
const Content = styled.View`
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
`;
const BlueDiv = styled.View`
  display: flex;
  background-color: rgba(44, 130, 201, 0.6);
  display: flex;
  height: 20%;
  width: 100%;
  position: absolute;
  margin-top: 75%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;
//Background Image
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const InsideTopDiv = styled.View`
  margin-top: 15%;
  width: 95%;
  margin-right: auto;
`;

const HeaderCardTXT = styled.Text`
  color: white;
  font-size: 95px;
  font-weight: bold;
  padding-bottom: 2%;
  margin-left: 4%;
`;
const BottomTXT = styled.Text`
  color: white;
  font-size: 35px;
  margin-left: 4%;
`;
//Container Information Start
const HeaderCard = styled.View`
  border-radius: 15px;
  width: 75%;

  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 2%;
`;

const Header = styled.View`
  padding: 2px 16px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  padding: 5%;
  background-color: rgba(255, 255, 255, 0.2);
`;
const ContainerMobile = styled.View`
  background: white;
  width: 100%;
  height: 50%;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  position: absolute;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;
const HeaderCardTXTMobile = styled.Text`
  color: white;
  font-size: 26px;
  font-weight: bold;
  padding-bottom: 2%;
  text-align: center;
`;

const InsideTopDivMobile = styled.View`
  margin-top: 20%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;
const BottomTXTMobile = styled.Text`
  color: white;
  font-size: 17px;
  text-align: center;
  font-weight: lighter;
`;
