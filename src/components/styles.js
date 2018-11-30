import styled, { css, keyframes } from "styled-components";
import { zoomInLeft, fadeInLeft, flash, flipInX } from "react-animations";
import Sprite from "./__shared/Sprite/";

export const HomeWrap = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const Hand = styled.img`
  height: 30rem;
  width: auto;
  animation: 0.5s ${keyframes`${fadeInLeft}`};
`;

export const HomeText = styled.div`
  position: relative;
  > h1 {
    font-size: 10rem;
    text-transform: uppercase;
    animation: 0.5s ${keyframes`${zoomInLeft}`};
    &:hover {
      cursor: pointer !important;
    }
  }
  > p {
    animation: 0.5s ${keyframes`${zoomInLeft}`};
    text-transform: none;
    position: absolute;
    right: -4rem;
    font-size: 5rem;
    transform: translateY(-1rem);
  }
  > span {
    font-family: "Nothing You Could Do", cursive !important;
    font-size: 1.8rem;
    position: absolute;
    bottom: 0rem;
    right: -5rem;
    transform: rotate(-10deg);
    transform-origin: bottom center;
    opacity: 0;
    animation: 0.5s ${keyframes`${flash}`};
    width: 0;
    line-height: 1.4rem;
  }
  > svg {
    opacity: 0;
    animation: 0.5s ${keyframes`${flash}`};
  }
  ${({ showArrow: { devToo } }) => {
    if (!devToo)
      return css`
        svg,
        span {
          animation: 0.5s ${keyframes`${flash}`} 1.5s !important;
        }
      `;
    if (devToo)
      return css`
        svg,
        span {
          opacity: 1 !important;
        }
      `;
  }}
`;

/***
 ***
 ** ARROWS **
 ***
 ***/

export const DevArrow = styled(Sprite)`
  height: 4rem;
  width: 4rem;
  fill: #263238;
  position: absolute;
  right: -4rem;
  bottom: -1rem;
  animation: 0.5s ${keyframes`${flash}`} 1.5s;
  transform: rotate(80deg);
`;

export const WhoArrow = styled(Sprite)`
  height: 14rem;
  width: 14rem;
  fill: #263238;
  position: absolute;
  left: -11rem;
  top: -7rem;
  animation: 0.5s ${keyframes`${flash}`} 1.5s;
`;

export const ClientsArrow = styled(Sprite)`
  height: 20rem;
  width: 20rem;
  fill: #263238;
  position: absolute;
  right: 6rem;
  top: -40rem;
  transform: rotate(0deg);
  animation: 0.5s ${keyframes`${flash}`} 1.5s;
`;

export const ContactArrow = styled(Sprite)`
  height: 14rem;
  width: 14rem;
  fill: #263238;
  position: absolute;
  right: -6rem;
  bottom: 16rem;
  transform: rotate(10deg);
  animation: 0.5s ${keyframes`${flash}`} 1.5s;
`;

/***
 ***
 ** Links **
 ***
 ***/

export const WhoLink = styled.a`
  font-size: 4rem;
  font-family: "Nothing You Could Do", cursive !important;
  position: absolute;
  bottom: 19rem;
  left: -11rem;
  transform: rotate(-15deg);
  animation: 0.5s ${keyframes`${flash}`};
  opacity: 0;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  ${({ showArrow: { who } }) => {
    if (!who)
      return css`
        animation: 0.5s ${keyframes`${flash}`} 1.5s !important;
      `;
    if (who)
      return css`
        opacity: 1 !important;
      `;
  }}
`;

export const ClientsLink = styled.a`
  font-size: 4rem;
  font-family: "Nothing You Could Do", cursive !important;
  position: absolute;
  top: -32rem;
  left: -3rem;
  transform: rotate(-40deg);
  animation: 0.5s ${keyframes`${flash}`};
  opacity: 0;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  ${({ showArrow: { clients } }) => {
    if (!clients)
      return css`
        animation: 0.5s ${keyframes`${flash}`} 1.5s !important;
      `;
    if (clients)
      return css`
        opacity: 1 !important;
      `;
  }}
`;

export const ContactLink = styled.a`
  font-size: 4rem;
  font-family: "Nothing You Could Do", cursive !important;
  position: absolute;
  bottom: 10rem;
  right: -10rem;
  transform: rotate(0deg);
  animation: 0.5s ${keyframes`${flash}`};
  opacity: 0;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  ${({ showArrow: { contact } }) => {
    if (!contact)
      return css`
        animation: 0.5s ${keyframes`${flash}`} 1.5s !important;
      `;
    if (contact)
      return css`
        opacity: 1 !important;
      `;
  }}
`;

/***
 ***
 ** WHO **
 ***
 ***/

export const WhoWrap = styled.div`
  width: 45rem;
  position: relative;
  animation: 0.3s ${keyframes`${zoomInLeft}`};
  > p {
    font-size: 2rem;
    margin: 2rem 0 0;
  }
`;

export const SocialWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  > img {
    z-index: -1;
    height: 9rem;
    width: 9rem;
    filter: grayscale(100%);
    border-radius: 50%;
    animation: 1s ${keyframes`${flipInX}`};
    margin-right: 2rem;
  }
`;
export const SocialSprite = styled(Sprite)`
  margin: 0 1rem;
  height: 3rem;
  width: 3rem;
  fill: #263238;
  animation: 2s ${keyframes`${flipInX}`};
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    transform: translateY(-1rem);
  }
`;
