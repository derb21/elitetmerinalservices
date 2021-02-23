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
      <View style={styles.imageStack}>
        {/* <SharedElement id={`item.${props.siteid}.imgUrl`}> */}
        {/* <Image
          source={{
            uri: "https://vps.lakemon.com/cdn/lakeimg/" + props.img
          }}
          resizeMode="cover"
          style={styles.image}
        ></Image> */}
        <Image
          style={styles.image}
          source={{
            uri: image
          }}
        />

        {/* </SharedElement> */}
        <View style={styles.rect}>
          <View style={styles.groupRow}>
            <View style={styles.rockportReservoirColumn}>
              <Text numberOfLines={2} style={styles.airportName}>
                {props.airport}
              </Text>
              <Text numberOfLines={2} style={styles.location}>
                {props.city}, {props.state}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 165
  },
  image: {
    top: 1,
    width: "100%",
    height: 165,
    position: "absolute",
    left: 0,
    borderRadius: 15
  },

  airportName: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    marginTop: "20%",
    marginLeft: 19
  },
  location: {
    fontSize: 20,
    color: "white",
    marginLeft: 19
  },

  rockportReservoirColumn: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(2,2,2,0.30)",
    marginBottom: "10%"
  },
  container: {
    marginBottom: "2%"
  }
});

export default ProjectCard;
