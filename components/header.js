import { Button } from "@material-ui/core";
import { DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, View, Dimensions } from "react-native";

function HeaderDash(props) {
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
            <Image source={require("../assets/sunriseAirport.jpg")} />

            {/* <Image source={{ uri: props.image }} /> */}
            <Content>
              <GrayDiv>
                <InsideTopDiv>
                  {/* <BorderTop></BorderTop> */}
                  <HeaderCard>
                    <Header>
                      <HeaderCardTXT>Elite Terminal Services</HeaderCardTXT>
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
            <Image source={require("../assets/sunriseAirport.jpg")} />

            {/* <Image source={{ uri: props.image }} /> */}
            <ContentMobile>
              <GrayDivMobile>
                <InsideTopDivMobile>
                  {/* <BorderTop></BorderTop> */}
                  <HeaderCard>
                    <Header>
                      <HeaderCardTXTMobile>
                        Elite Terminal Services
                      </HeaderCardTXTMobile>
                      <BottomTXTMobile>
                        We take your airport to the next level
                      </BottomTXTMobile>
                    </Header>
                  </HeaderCard>
                </InsideTopDivMobile>
              </GrayDivMobile>
            </ContentMobile>
          </Cover>
        </ContainerMobile>
      )}
    </>
  );
}
export default HeaderDash;

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
  height: 45%;
  width: 100%;
  position: absolute;
`;
const Content = styled.View`
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  height: 50%;
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

  transform: scale(1, 1);
`;

const InsideTopDiv = styled.View`
  margin-top: 18%;
  width: 85%;
  margin-right: auto;
  margin-left: auto;
`;
const HeaderCardTXT = styled.Text`
  color: white;
  font-size: 65px;
  font-weight: bold;
  padding-bottom: 2%;
  text-align: center;
`;
const BottomTXT = styled.Text`
  color: white;
  font-size: 40px;
  text-align: center;
`;
const HeaderCard = styled.View`
  border-radius: 15px;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0.35);
  margin-top: 5%;
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

//Mobile CSS
const ContainerMobile = styled.View`
  background: white;
  width: 100%;
  height: 20%;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  position: absolute;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;
const HeaderCardTXTMobile = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: bold;
  padding-bottom: 2%;
  text-align: center;
`;

const InsideTopDivMobile = styled.View`
  margin-top: 35%;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
`;

const GrayDivMobile = styled.View`
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  height: 25%;
  width: 100%;
  position: absolute;
`;
const ContentMobile = styled.View`
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  height: 90%;
`;
const BottomTXTMobile = styled.Text`
  color: white;
  font-size: 17px;
  text-align: center;
`;
