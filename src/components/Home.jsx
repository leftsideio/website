import React from "react";
import Who from "./Who";
import Contact from "./Contact";
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
  ContactLink,
  ClientTag,
  Client,
  ClientImg
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
    }, 1250);
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

  setShowContent = (content, toggle = false) => {
    const { showContent } = this.state;
    const overrwrite = toggle ? this.state.showContent : null;
    this.setMassStateBoolean(
      Object.keys(showContent).filter(key => key !== content),
      false
    );
    this.setState({
      showContent: {
        ...overrwrite,
        [content]: toggle ? !this.state.showContent[content] : true
      }
    });
  };

  render() {
    const {
      showArrow,
      showContent: { hand, who, clients, contact }
    } = this.state;
    const stayPut = hand || clients;
    return (
      <Wrap>
        {stayPut && <Hand src="images/hands.png" alt="Leftside Design" />}
        {who && <Who />}
        {contact && <Contact />}
        <HomeText {...this.state}>
          <h1 onClick={this.resetContentState}>Leftside</h1>
          <p>Design</p>
          {stayPut && <WhoArrow name="who-arrow" />}
          {stayPut && <ClientsArrow name="clients-arrow" />}
          {stayPut && <ContactArrow name="contact-arrow" />}
          {stayPut && <DevArrow name="dev-arrow" />}
          {stayPut && <span>dev too!</span>}
          {stayPut && (
            <WhoLink onClick={() => this.setShowContent("who")} {...this.state}>
              who?
            </WhoLink>
          )}
          {stayPut && (
            <ClientsLink
              onClick={() => {
                this.setShowContent("clients", true);
              }}
              {...this.state}
            >
              clients?
            </ClientsLink>
          )}
          {clients && (
            <>
              <ClientTag
                href="https://www.agrograph.com/"
                target="_blank"
                clientStyles={{
                  client: "agrograph",
                  top: -36,
                  left: -5,
                  color: "#54843c",
                  xsLeft: "30%"
                }}
              >
                <span>Agrograph</span>
                <Client name="agros" />
              </ClientTag>
              <ClientTag
                href="https://torqlabs.com/"
                target="_blank"
                clientStyles={{
                  client: "torq",
                  top: -40,
                  left: 0,
                  color: "#111033",
                  xsLeft: "55%"
                }}
              >
                <span>Torq Labs</span>
                <ClientImg src="images/torq.svg" />
              </ClientTag>
            </>
          )}
          {stayPut && (
            <ContactLink
              onClick={() => this.setShowContent("contact")}
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
