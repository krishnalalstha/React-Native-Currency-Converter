import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import ClearButton from "../components/Buttons/ClearButton";
import LastConverted from "../components/Text/LastConverted";
import { Header } from "../components/Header/index";

const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBP";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "79.74";
const TEMP_CONVERSION_DATE = new Date();
const TEMP_CONVERSION_RATE = 0.777;

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log("Press Base");
  };
  handlePressQuoteCurrency = () => {
    console.log("Press Quote");
  };

  handleChangeText = () => {
    console.log("Handle Text Change");
  };

  handleSwapCurrency = () => {
    console.log("Press Swap");
  };
  handleOptionPress = () => {
    console.log("Hadle option Press");
  };
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            onPress={this.handlePressBaseCurrency}
            buttonText={TEMP_BASE_CURRENCY}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            onPress={this.handlePressQuoteCurrency}
            buttonText={TEMP_QUOTE_CURRENCY}
            editable={false}
            defaultValue={TEMP_QUOTE_PRICE}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            qutoe={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionDate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
