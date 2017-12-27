import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import moment from "moment";

import styles from "./styles";

const LastConverted = ({ base, quote, conversionDate, date }) => (
  <Text style={styles.text}>
    1 {base}= {conversionDate} {quote} as of {moment(date).format("MMM D,YYYY")}
  </Text>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionDate: PropTypes.number
};
export default LastConverted;
