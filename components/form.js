import { Menu, TextField } from "@material-ui/core";
import { Form, Input, InputNumber, Button } from "antd";
import styled from "styled-components/native";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions
} from "react-native";
import React, { useState, useEffect } from "react";
import { height } from "@material-ui/system";
import { StylesContext } from "@material-ui/styles";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import "firebase/firestore";

function FormCom(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [mobile, setMobile] = useState(false);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const dbh = firebase.firestore();

  useEffect(() => {
    if (windowWidth < 425) {
      console.log("window width is less than 425");
      setMobile(false);
    } else {
      setMobile(true);
    }

    return () => {};
  }, []);
  const storeFirstName = async () => {
    setAlert();
    console.log(
      "Data in Function, contact Screen",
      firstName,
      lastName,
      email,
      phoneNumber,
      message
    );
    firebase
      .database()
      .ref("contactUsers/")
      .push({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        message: message
      });
    sendEmail();
  };
  const sendEmail = async () => {
    console.log(
      "sending Email",
      firstName,
      lastName,
      email,
      phoneNumber,
      message
    );
    dbh.collection("mail").add({
      to: "dillenerb21@gmail.com",
      message: {
        subject: "Hello from Firebase!",
        html: "This is an <code>HTML</code> email body."
      }
    });
  };

  const setAlert = async () => {
    console.log("cancel");
    alert(
      "Thank You for Contacting ELITE TERMINAL SERVICES, we will be getting in contact with you soon.",
      "A new project with shortly appear on the projects page of your website.",
      [
        {
          text: "Cancel",
          onPress: () => resetPage(),
          style: "cancel"
        }
        // { text: "Sign In", onPress: () => goToSignIn() }
      ],
      { cancelable: false }
    );
    navigation.reset({
      index: 0,
      routes: [{ name: "ContactScreen" }]
    });
  };
  return (
    <>
      {/* Loading this View While waiting for location to return */}
      {mobile === true ? (
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>* These fields are required.</Text>
          <Text style={styles.lbl}>First Name*</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="John"
              placeholderTextColor="gray"
              returnKeyLabel={"next"}
              onChangeText={text => setFirstName(text)}
            />
          </View>
          <Text style={styles.lbl}>Last Name*</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Smith"
              placeholderTextColor="gray"
              returnKeyLabel={"next"}
              onChangeText={text => setLastName(text)}
            />
          </View>
          <Text style={styles.lbl}>Email*</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="johnsmith@gmail.com"
              placeholderTextColor="gray"
              returnKeyLabel={"next"}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <Text style={styles.lbl}>Phone Number</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              maxLength="10"
              placeholder="8057358569"
              placeholderTextColor="gray"
              returnKeyLabel={"next"}
              onChangeText={text => setPhoneNumber(text)}
            />
          </View>
          <Text style={styles.lbl}>Message*</Text>

          <View style={styles.inputViewMessage}>
            <TextInput
              style={styles.inputMessage}
              multiline
              placeholder="Write your custom message..."
              placeholderTextColor="gray"
              returnKeyLabel={"next"}
              onChangeText={text => setMessage(text)}
            />
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              height: "7%",
              width: "100%",
              marginRight: "auto",
              marginLeft: "auto",
              borderColor: "white",
              marginTop: "5%",
              backgroundColor: "#73B1B7"
            }}
            disabled={!firstName + !lastName}
            onPress={storeFirstName}
          >
            <Text
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                fontSize: 20,
                color: "white",
                textAlign: "center"
              }}
            >
              Contact Us
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Text style={styles.titleMobile}>* These fields are required.</Text>
          <Text style={styles.lblMobile}>First Name*</Text>

          <View style={styles.inputViewMobile}>
            <TextInput
              style={styles.inputMobile}
              placeholder="John"
              placeholderTextColor="gray"
              returnKeyLabel={"next"}
              onChangeText={text => setFirstName(text)}
            />
          </View>
          <Text style={styles.lblMobile}>Last Name*</Text>

          <View style={styles.inputViewMobile}>
            <TextInput
              style={styles.inputMobile}
              placeholder="Smith"
              placeholderTextColor="gray"
              returnKeyLabel={"next"}
              onChangeText={text => setLastName(text)}
            />
          </View>
          <Text style={styles.lblMobile}>Email*</Text>

          <View style={styles.inputViewMobile}>
            <TextInput
              style={styles.inputMobile}
              placeholder="johnsmith@gmail.com"
              placeholderTextColor="gray"
              returnKeyLabel={"next"}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <Text style={styles.lblMobile}>Phone Number</Text>

          <View style={styles.inputViewMobile}>
            <TextInput
              style={styles.inputMobile}
              maxLength="10"
              placeholder="8057358569"
              placeholderTextColor="gray"
              returnKeyLabel={"next"}
              onChangeText={text => setPhoneNumber(text)}
            />
          </View>
          <Text style={styles.lblMobile}>Message*</Text>

          <View style={styles.inputViewMessageMobile}>
            <TextInput
              style={styles.inputMessageMobile}
              multiline
              placeholder="Write your custom message..."
              placeholderTextColor="gray"
              returnKeyLabel={"next"}
              onChangeText={text => setMessage(text)}
            />
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              height: "7%",
              width: "100%",
              marginRight: "auto",
              marginLeft: "auto",
              borderColor: "white",
              marginTop: "5%",
              marginBottom: "5%",
              backgroundColor: "#73B1B7"
            }}
            disabled={!firstName + !lastName}
            onPress={storeFirstName}
          >
            <Text
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                fontSize: 16,
                color: "white",
                textAlign: "center"
              }}
            >
              Contact Us
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    color: "black",
    marginTop: "auto",
    marginBottom: "auto",
    height: 35,
    fontSize: 22
  },
  inputView: {
    borderColor: "#000000",
    borderWidth: 1,
    height: 50,
    paddingLeft: "1%",
    height: 75,
    marginTop: "1.5%"
  },
  inputMessage: {
    color: "black",
    marginTop: "auto",
    marginBottom: "auto",
    height: 150,
    fontSize: 22
  },
  inputViewMessage: {
    borderColor: "#000000",
    borderWidth: 1,
    height: 150,
    paddingLeft: "1%",
    marginTop: "1.5%"
  },
  lbl: {
    fontSize: 22,
    marginTop: "3%"
  },
  title: {
    fontSize: 26,
    marginLeft: "3%"
  },

  inputMobile: {
    color: "black",
    marginTop: "auto",
    marginBottom: "auto",
    height: 25,
    width: "100%",
    fontSize: 17
  },
  inputViewMobile: {
    borderColor: "#000000",
    borderWidth: 1,
    height: 30,
    paddingLeft: "1%",
    width: "100%",
    marginTop: "1.5%"
  },
  inputMessageMobile: {
    color: "black",
    marginTop: "auto",
    marginBottom: "auto",
    height: 150,
    fontSize: 17
  },
  inputViewMessageMobile: {
    borderColor: "#000000",
    borderWidth: 1,
    height: 150,
    paddingLeft: "1%",
    marginTop: "1.5%"
  },
  lblMobile: {
    fontSize: 16,
    marginTop: "3%"
  },
  titleMobile: {
    fontSize: 17,
    marginLeft: "3%"
  }
});

export default FormCom;
