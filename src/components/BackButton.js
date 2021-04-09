import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements'

const BackButton = ({ navigate }) => {
  return (
    <TouchableOpacity onPress={() => navigate()}>
      <Icon 
      name="arrow-left"
      type="font-awesome-5"
      color={"#FFF"}
      size={20}
      />
    </TouchableOpacity>
  );
};

export { BackButton };
