import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButtons = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
      className={`${containerStyles} bg-secondary rounded-xl justify-center items-center min-h-[64px] ${
        isLoading ? "opacity-50" : ""
      } `}
      disabled={isLoading}
    >
      <Text className={`${textStyles} text-primary font-psemibold text-lg  `}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButtons;
