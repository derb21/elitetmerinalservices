import { Button, Menu, MenuItem } from "@material-ui/core";
import { DatePicker } from "antd";
import styled from "styled-components/native";
import { View, TouchableOpacity, Dimensions, Text } from "react-native";
import React, { useState, useEffect } from "react";
import AboutScreen from "../screens/AboutScreen";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function MenuBig(props) {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  console.log("window Width", windowWidth);
  console.log("window Height", windowHeight);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (windowWidth < 425) {
      console.log("window width is less than 425");
      setMobileMenu(false);
    } else {
      setMobileMenu(true);
    }
    return () => {};
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
    navigation.navigate("SignIn");
  };
  return (
    <View style={{ flex: 1, paddingBottom: 20 }}>
      <>
        {/* Loading this View While waiting for location to return */}
        {mobileMenu === true ? (
          <View style={{ flex: 1 }}>
            <Row>
              <ColLogo>
                <Text style={{ fontSize: 36, color: "white", margin: "7%" }}>
                  Elite Terminal Services
                </Text>
              </ColLogo>
              <ColHome>
                <TouchableOpacity
                  onPress={goHome}
                  style={{
                    marginLeft: "auto",
                    marginTop: "9%"
                  }}
                  // onPress={onPress}
                >
                  <Text
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      fontSize: 20,
                      color: "white"
                    }}
                  >
                    HOME
                  </Text>
                </TouchableOpacity>
              </ColHome>
              <Col>
                <TouchableOpacity
                  onPress={goToAbout}
                  style={{
                    marginTop: "9%"
                  }}
                  // onPress={onPress}
                >
                  <Text
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      fontSize: 20,
                      color: "white"
                    }}
                  >
                    ABOUT
                  </Text>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity
                  onPress={goToProjects}
                  style={{
                    marginTop: "9%"
                  }}
                  // onPress={onPress}
                >
                  <Text
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      fontSize: 20,
                      color: "white"
                    }}
                  >
                    PROJECTS
                  </Text>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity
                  onPress={goToContact}
                  style={{
                    marginTop: "9%"
                  }}
                  // onPress={onPress}
                >
                  <Text
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      fontSize: 20,
                      color: "white"
                    }}
                  >
                    CONTACT
                  </Text>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity
                  onPress={adminScreen}
                  style={{
                    marginTop: "9%"
                  }}
                  // onPress={onPress}
                >
                  <Text
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      fontSize: 20,
                      color: "white"
                    }}
                  >
                    ADMIN
                  </Text>
                </TouchableOpacity>
              </Col>
            </Row>
          </View>
        ) : (
          <View style={{}}>
            <View style={{ flex: 1, paddingBottom: 20 }}>
              <Row>
                <ColLogo>
                  <Text style={{ fontSize: 22, color: "white", margin: "7%" }}>
                    Elite Terminal Services
                  </Text>
                </ColLogo>
                <Col>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <Ionicons
                      name="md-menu"
                      size={35}
                      style={{ textAlign: "center", marginTop: "10%" }}
                      color="white"
                    />
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={goHome}>HOME</MenuItem>
                    <MenuItem onClick={goToAbout}>ABOUT</MenuItem>
                    <MenuItem onClick={goToProjects}>PROJECTS</MenuItem>
                    <MenuItem onClick={goToContact}>CONTACT</MenuItem>
                    <MenuItem onClick={adminScreen}>ADMIN</MenuItem>
                  </Menu>
                </Col>
              </Row>
            </View>
          </View>
        )}
      </>
    </View>
  );
}

export default MenuBig;

const Container = styled.View`
  background: white;
  width: 100%;
  height: 100%;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  position: absolute;
`;
const Row = styled.View`
  flex-direction: row;
`;

const Col = styled.View`
  flex: 1;
  padding-top: 2%;
`;
const ColHome = styled.View`
  flex: 2;
  padding-top: 1%;
  margin-right: 6%;
`;
const ColLogo = styled.View`
  flex: 3;
`;
