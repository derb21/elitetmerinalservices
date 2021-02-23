import { Menu, MenuItem } from "@material-ui/core";
import { DatePicker } from "antd";
import styled from "styled-components/native";
import { View, Dimensions, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

function DescriptionStrip(props) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();

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

  const goToAbout = () => {
    navigation.navigate("AboutScreen");
  };
  return (
    <>
      {/* Loading this View While waiting for location to return */}
      {mobile === true ? (
        <Container>
          <Cover>
            <Image source={require("../assets/whiteGlobe.jpg")} />

            {/* <Image source={{ uri: props.image }} /> */}
            <Content>
              <InsideTopDiv>
                {/* <BorderTop></BorderTop> */}
                <HeaderCard>
                  <HeaderCardTXT>
                    +20 Years of engineering innovation
                  </HeaderCardTXT>
                  <DescriptionTXT>
                    We are airport contractors who specialize in the
                    installation, maintenance, repair and refurbishment of
                    airport passenger boarding bridges (PBB's) and related
                    equipment.
                  </DescriptionTXT>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      width: "20%",
                      height: "22%",
                      marginRight: "auto",
                      marginLeft: "auto",
                      borderColor: "blue",
                      marginTop: "1%"
                    }}
                    onPress={goToAbout}
                  >
                    <Text
                      style={{
                        marginTop: "auto",
                        marginBottom: "auto",
                        fontSize: 22,
                        color: "blue"
                      }}
                    >
                      About Us
                    </Text>
                  </TouchableOpacity>
                </HeaderCard>
              </InsideTopDiv>
            </Content>
          </Cover>
        </Container>
      ) : (
        <ContainerMobile>
          <Cover>
            <Image source={require("../assets/grayMap.jpg")} />

            {/* <Image source={{ uri: props.image }} /> */}
            <Content>
              <InsideTopDivMobile>
                {/* <BorderTop></BorderTop> */}
                <HeaderCardMobile>
                  <HeaderCardTXTMobile>
                    +20 Years of engineering innovation
                  </HeaderCardTXTMobile>
                  <DescriptionTXTMobile>
                    We are airport contractors who specialize in the
                    installation, maintenance, repair and refurbishment of
                    airport passenger boarding bridges (PBB's) and related
                    equipment.
                  </DescriptionTXTMobile>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      width: "40%",
                      height: "17%",
                      marginRight: "auto",
                      marginLeft: "auto",
                      borderColor: "blue",
                      marginTop: "1%"
                    }}
                    onPress={goToAbout}
                  >
                    <Text
                      style={{
                        marginTop: "auto",
                        marginBottom: "auto",
                        fontSize: 16,
                        color: "#4682b4"
                      }}
                    >
                      About Us
                    </Text>
                  </TouchableOpacity>
                </HeaderCardMobile>
              </InsideTopDivMobile>
            </Content>
          </Cover>
        </ContainerMobile>
      )}
    </>
  );
}

export default DescriptionStrip;

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
  color: blue;
  font-size: 45px;
  padding-bottom: 2%;
  padding-top: 2%;
  text-align: center;
  font-family: "MontserratSemiBold";
`;
const DescriptionTXT = styled.Text`
  color: black;
  font-size: 24px;
  padding-bottom: 2%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 2%;
  font-family: "Montserrat";
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

//Mobile CSS

const ContainerMobile = styled.View`
  width: 100%;
  height: 30%;
  padding-top: 90%;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
const HeaderCardTXTMobile = styled.Text`
  color: #4682b4;
  font-size: 27px;
  padding-bottom: 2%;
  padding-top: 2%;
  text-align: center;
`;
const DescriptionTXTMobile = styled.Text`
  color: black;
  font-size: 19px;
  padding-bottom: 2%;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 2%;
`;
const HeaderCardMobile = styled.View`
  border-radius: 15px;
  width: 75%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4%;
`;
