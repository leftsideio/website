import React from "react";
import axios from "axios";
import { DoubleBounce as Loader } from "styled-spinkit";
import {
  ContactWrap,
  SendButton,
  GenError,
  EmailError,
  LetterIcon,
  LetterText
} from "./styles";
import { validateEmail } from "../helpers";

export default class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    emailError: "",
    error: "",
    isSending: false,
    success: false
  };

  handleInput = input => e => {
    this.setState({
      [input]: e.target.value,
      emailError: input === "email" ? "" : this.state.emailError
    });
  };

  verifyEmail = () => {
    const { email } = this.state;
    if (!validateEmail(email)) {
      this.setState({ emailError: "uh oh - email looks invalid" });
      return false;
    }
    return true;
  };

  onSend = async () => {
    const { name, email, message } = this.state;
    if (!this.verifyEmail()) return;
    try {
      this.setState({ isSending: true });
      await axios.post("/send_email", { name, email, message });
      this.setState({ success: true, isSending: false });
    } catch (e) {
      this.setState({
        error: "🙁 Experiencing technical difficulties. Please try back later."
      });
    }
  };

  render() {
    const {
      name,
      email,
      message,
      error,
      emailError,
      success,
      isSending
    } = this.state;
    return (
      <ContactWrap {...this.state}>
        {!success ? (
          <>
            <p>let's do some work together</p>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={this.handleInput("name")}
            />
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={this.handleInput("email")}
              onBlur={this.verifyEmail}
            />
            {emailError && <EmailError>{emailError}</EmailError>}
            <textarea
              placeholder="ideas?"
              value={message}
              onChange={this.handleInput("message")}
              maxLength={2500}
            />
            <SendButton
              onClick={this.onSend}
              isValidEmail={validateEmail(email)}
            >
              {isSending ? <Loader color="#263238" size="30" /> : "Send"}
            </SendButton>
            {error && <GenError>{error}</GenError>}
          </>
        ) : (
          <>
            <LetterIcon name="letter" />
            <LetterText>Looking forward to working together!</LetterText>
          </>
        )}
      </ContactWrap>
    );
  }
}
