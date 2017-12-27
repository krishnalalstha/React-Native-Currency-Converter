import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";

const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBP";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "79.74";

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log("Press Base");
  };
  handlePressQuoteCurrency = () => {
    console.log("Press Quote");
  };
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            onPress={this.handlePressBaseCurrency}
            buttonText={TEMP_BASE_CURRENCY}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
          />
          <InputWithButton
            onPress={this.handlePressQuoteCurrency}
            buttonText={TEMP_QUOTE_CURRENCY}
            editable={false}
            defaultValue={TEMP_QUOTE_PRICE}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
