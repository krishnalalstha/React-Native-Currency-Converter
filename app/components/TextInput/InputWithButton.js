import PropTypes from "prop-types";
import React from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import color from "color";

import styles from "./styles";

const InputWithButton = props => {
  const { onPress, buttonText, editable = true } = props;

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier
  );

  const containerStyle = [styles.container];
  if (editable === false) {
    containerStyle.push(styles.containerDisabled);
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={underlayColor}
        onPress={props.onPress}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.separator} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
};
export default InputWithButton;
