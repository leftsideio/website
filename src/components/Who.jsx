import React from "react";
import { WhoWrap as Wrap, SocialWrap, SocialSprite } from "./styles";

export default class Who extends React.Component {
  state = {
    currentPhoto: "garrett"
  };

  componentDidMount() {
    const photos = ["garrett", "tyler"];
    let index = 1;
    this.photoInterval = setInterval(() => {
      this.setState({ currentPhoto: photos[index] }, () => {
        index = (index + 1) % photos.length;
      });
    }, 8000);
  }

  componentWillUnmount() {
    clearInterval(this.photoInterval);
  }

  render() {
    const { currentPhoto } = this.state;
    return (
      <Wrap>
        {/* Have it convoluted like this so that it rips out each time for animation. */}
        {currentPhoto === "garrett" && (
          <SocialWrap>
            <img src={`images/${currentPhoto}.jpg`} alt="Garrett Eklof" />
            <a href="https://garretteklof.com/" target="_blank">
              <SocialSprite name="personal-site" />
            </a>
            <a href="https://github.com/garretteklof" target="_blank">
              <SocialSprite name="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/garrett-eklof/"
              target="_blank"
            >
              <SocialSprite name="linkedin" />
            </a>
          </SocialWrap>
        )}
        {/* Have it convoluted like this so that it rips out each time for animation. */}
        {currentPhoto === "tyler" && (
          <SocialWrap>
            <img src={`images/${currentPhoto}.jpg`} alt="Tyler Knight" />
            <a href="http://tknight.me/" target="_blank">
              <SocialSprite name="personal-site" />
            </a>
            <a href="https://github.com/tknight31" target="_blank">
              <SocialSprite name="github" />
            </a>

            <a href="https://www.linkedin.com/in/tknight31/" target="_blank">
              <SocialSprite name="linkedin" />
            </a>
          </SocialWrap>
        )}
        <p>
          Garrett Eklof &amp; Tyler Knight met on the high-school football
          field, and have been friends since second quarter of freshman
          geometry. Upon graduating from their respective colleges, they started
          teaching themselves how to program in hopes of someday being people of
          significance. While that's yet to happen, the passion and chemistry
          that they've shared for nearly 15 years burns as bright today as it
          did back in Ms. Zintel's classroom.
        </p>
      </Wrap>
    );
  }
}
