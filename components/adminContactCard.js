import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ActionSheetIOS,
  ToastAndroid,
  AlertIOS,
  View,
  Image,
  Text
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

function ContactCard(props) {
  const navigation = useNavigation();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <View style={[styles.container, props.style]}>
      <Row>
        <Col>
          <View>
            <Text style={styles.name}>
              {props.firstName} {props.lastName}
            </Text>
          </View>
        </Col>
      </Row>
      <Row>
        <Col>
          <Text style={styles.location}>Email:</Text>
        </Col>
        <Col>
          <Text style={styles.info}>{props.email}</Text>
        </Col>
        <Col>
          <Text style={styles.location}>Phone Number:</Text>
        </Col>
        <Col>
          <Text style={styles.info}>{props.phoneNumber}</Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Text style={styles.info}>{props.message}</Text>
        </Col>
      </Row>

      {/* </SharedElement> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  image: {
    width: "95%",
    height: "100%",
    zIndex: 1
  },

  name: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    textAlign: "center"
  },
  location: {
    fontSize: 20,
    color: "gray",
    textAlign: "center"
  },
  info: {
    fontSize: 20,
    color: "black",
    textAlign: "center"
  },
  container: {
    marginBottom: "2%"
  }
});

export default ContactCard;
const Row = styled.View`
  flex-direction: row;
  background-color: white;
  padding: 1.3%;
`;
const Col = styled.View`
  flex: 1;
`;
const ColImg = styled.View`
  flex: 1;
  margin: 0.5%;
`;
const Border = styled.View`
  background-color: black;
  height: 1%;
`;
