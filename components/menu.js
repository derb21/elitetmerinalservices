import { Button, Menu, MenuItem } from "@material-ui/core";
import { DatePicker } from "antd";
import styled from "styled-components/native";
import { View } from "react-native";
import React, { useState, useEffect } from "react";

function MenuComponent(props) {
  useEffect(() => {
    return () => {};
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <View style={{ flex: 1, paddingBottom: 20 }}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </View>
  );
}

export default MenuComponent;

const Container = styled.View`
  background: white;
  width: 100%;
  height: 100%;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  position: absolute;
`;
