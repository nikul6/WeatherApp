import React from "react";
import { Dimensions, View } from "react-native";
import { Header } from "react-native-elements";
import Colors from '../common/Colors';
const { height, width } = Dimensions.get("window");

const CustomHeader = ({ children, title, leftComponent, rightComponent, centerComponent, outerContainerStyles }) => {
  return (
    <View
      style={backgroundStyle}
    >
      <Header
        statusBarProps={{ barStyle: 'light-content', backgroundColor: Colors.AppStatusBarColor }}
        leftComponent={leftComponent}
        centerComponent={centerComponent || {
          text: title,
          style: { color: "#FFF", fontSize: 20, fontWeight: "bold" }
        }}
        rightComponent={rightComponent}
        outerContainerStyles={outerContainerStyles || { borderBottomWidth: 0, height: height * .50 }}
        containerStyle={{
          backgroundColor: Colors.AppHeaderColor,
          borderBottomWidth: 0
        }}
      />
      {children}
    </View>
  );
};

const backgroundStyle = {
  height,
  width,
  flex: 1,
  zIndex: 3,
  backgroundColor: '#fff'
};

export { CustomHeader };