import React from "react";
import Who from "./Who";
import {
  HomeWrap as Wrap,
  Hand,
  HomeText,
  DevArrow,
  WhoArrow,
  ClientsArrow,
  ContactArrow,
  WhoLink,
  ClientsLink,
  ContactLink
} from "./styles";

export default class Home extends React.Component {
  state = {
    showArrow: {
      devToo: false,
      who: false,
      clients: false,
      contact: false
    },
    showContent: {
      hand: true,
      who: false,
      clients: false,
      contact: false
    }
  };
  /* LIFECYCLE */

  componentDidMount() {
    setTimeout(() => {
      this.toggleArrow("devToo");
      this.toggleArrow("who");
      this.toggleArrow("clients");
      this.toggleArrow("contact");
    }, 2000);
  }

  /* HANDLERS */

  resetContentState = () =>
    this.setState({
      showContent: { hand: true, who: false, clients: false, contact: false }
    });

  setMassStateBoolean = (array, bool) =>
    array.forEach(key => this.setState({ [key]: bool }));

  toggleArrow = arrow =>
    this.setState({
      showArrow: {
        ...this.state.showArrow,
        [arrow]: !this.state.showArrow[arrow]
      }
    });

  toggleContent = content => {
    const { showContent } = this.state;
    this.setMassStateBoolean(
      Object.keys(showContent).filter(key => key !== content),
      false
    );
    this.setState({
      showContent: {
        [content]: true
      }
    });
  };

  render() {
    const {
      showArrow,
      showContent: { hand, who, clients, contact }
    } = this.state;
    return (
      <Wrap>
        {hand && <Hand src="images/hands.png" alt="Leftside Design" />}
        {who && <Who />}
        <HomeText {...this.state}>
          <h1 onClick={this.resetContentState}>Leftside</h1>
          <p>Design</p>
          {hand && <WhoArrow name="who-arrow" />}
          {hand && <ClientsArrow name="clients-arrow" />}
          {hand && <ContactArrow name="contact-arrow" />}
          {hand && <DevArrow name="dev-arrow" />}
          {hand && <span>dev too!</span>}
          {hand && (
            <WhoLink onClick={() => this.toggleContent("who")} {...this.state}>
              who?
            </WhoLink>
          )}
          {hand && (
            <ClientsLink
              onClick={() => this.toggleContent("clients")}
              {...this.state}
            >
              clients?
            </ClientsLink>
          )}
          {hand && (
            <ContactLink
              onClick={() => this.toggleContent("contact")}
              {...this.state}
            >
              contact?
            </ContactLink>
          )}
        </HomeText>
      </Wrap>
    );
  }
}
