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

function ProjectCard(props) {
  const navigation = useNavigation();

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
    <View style={[styles.container, props.style]}>
      <Row>
        <ColImg>
          <Image
            style={styles.image}
            source={{
              uri: image
            }}
          />
        </ColImg>
        <Col>
          <View>
            <Text style={styles.name}>{props.airport}</Text>
          </View>

          <Text style={styles.location}>
            {props.city}, {props.state}
          </Text>
          <Text style={styles.info}>{props.description}</Text>
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

export default ProjectCard;
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
