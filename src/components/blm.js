import React, { useState } from "react"
import { useInterval } from "beautiful-react-hooks"
import styled, { keyframes } from "styled-components"

const BLM = () => {
  let [name, setName] = useState(names[136])
  useInterval(() => {
    setName(names[Math.floor(Math.random() * names.length)])
  }, 5000)
  return (
    <Box>
      <Name key={name}>{name}</Name>
      <Left>
        <Heading>✊🏿 Black</Heading>
        <Heading>✊🏾 Lives </Heading>
        <Heading>✊🏽 Matter </Heading>
      </Left>
    </Box>
  )
}

export default BLM

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
const Box = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Left = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
`
const Heading = styled.h2`
  font-size: 4rem;
`
const Name = styled.h1`
  text-align: center;
  font-size: 12rem;
  overflow-wrap: break-word;
  animation: ${fadeIn} 1s;
  @media (max-width: 800px) {
    font-size: 10rem;
  }
  @media (max-width: 600px) {
    font-size: 8rem;
  }
  @media (max-width: 500px) {
    font-size: 7rem;
  }
  @media (max-width: 450px) {
    font-size: 6rem;
  }
  @media (max-width: 400px) {
    font-size: 5rem;
  }
`

const names = [
  "EMMETT TILL",
  "ERIC GARNER",
  "JOHN CRAWFORD III",
  "MICHAEL BROWN",
  "EZELL FORD",
  "DANTE PARKER",
  "MICHELLE CUSSEAUX",
  "LAQUAN MCDONALD",
  "TANISHA ANDERSON",
  "AKAI GURLEY",
  "TAMIR RICE",
  "RUMAIN BRISBON",
  "JERAME REID",
  "JOSEPH MANN",
  "MATTHEW AJIBADE",
  "JAMES N. POWELL JR.",
  "FRANK SMART",
  "NATASHA MCKENNA",
  "TONY ROBINSON",
  "ANTHONY HILL",
  "MYA HALL",
  "PHILLIP WHITE",
  "ERIC HARRIS",
  "WALTER SCOTT",
  "WILLIAM CHAPMAN II",
  "ALEXIA CHRISTIAN",
  "BRENDON GLENN",
  "VICTOR MANUEL LAROSA",
  "JONATHAN SANDERS",
  "FREDDIE CARLOS GRAY JR.",
  "JOSEPH MANN",
  "SALVADO ELLSWOOD",
  "SANDRA BLAND",
  "ALBERT JOSEPH DAVIS",
  "DARRIUS STEWART",
  "BILLY RAY DAVIS",
  "SAMUEL DUBOSE",
  "MICHAEL SABBIE",
  "BRIAN KEITH DAY",
  "CHRISTIAN TAYLOR",
  "TROY ROBINSON",
  "ASSHAMS PHAROAH MANLEY",
  "FELIX KUMI",
  "KEITH HARRISON MCLEOD",
  "JUNIOR PROSPER",
  "LAMONTEZ JONES",
  "PATERSON BROWN",
  "DOMINIC HUTCHINSON",
  "ANTHONY ASHFORD",
  "ALONZO SMITH",
  "TYREE CRAWFORD",
  "INDIA KAGER",
  "LA’VANTE BIGGS",
  "MICHAEL LEE MARSHALL",
  "JAMAR CLARK",
  "RICHARD PERKINS",
  "PHILLIP PANNELL",
  "NATHANIEL HARRIS PICKETT",
  "BENNI LEE TIGNOR",
  "MIGUEL ESPINAL",
  "SEAN BELL",
  "MICHAEL NOEL",
  "KEVIN MATTHEWS",
  "BETTIE JONES",
  "QUINTONIO LEGRIER",
  "KEITH CHILDRESS JR.",
  "JANET WILSON",
  "RANDY NELSON",
  "ANTRONIE SCOTT",
  "WENDELL CELESTINE",
  "DAVID JOSEPH",
  "CALIN ROQUEMORE",
  "DYZHAWN PERKINS",
  "CHRISTOPHER DAVIS",
  "MARCO LOUD",
  "PETER GAINES",
  "TORREY ROBINSON",
  "DARIUS ROBINSON",
  "KEVIN HICKS",
  "MARY TRUXILLO",
  "DEMARCUS SEMER",
  "AMADOU DIALLO",
  "WILLIE TILLMAN",
  "TERRILL THOMAS",
  "SYLVILLE SMITH",
  "ALTON STERLING",
  "PHILANDO CASTILE",
  "TERENCE CRUTCHER",
  "PAUL O’NEAL",
  "ALTERIA WOODS",
  "BOBBY RUSS",
  "JORDAN EDWARDS",
  "AARON BAILEY",
  "RONELL FOSTER",
  "STEPHON CLARK",
  "ANTWON ROSE II",
  "MALICE GREEN",
  "ELIJAH MCCLAIN",
  "AIYANA STANLEY JONES",
  "BOTHAM JEAN",
  "PAMELA TURNER",
  "DOMINIQUE CLAYTON",
  "SEAN BELL",
  "ATATIANA JEFFERSON",
  "JEMEL ROBERSON",
  "RYAN MATTHEW SMITH",
  "DERRICK AMBROSE JR.",
  "CHRISTOPHER WHITFIELD",
  "VICTOR WHITE III",
  "CHRISTOPHER MCCORVEY",
  "TIMOTHY THOMAS",
  "REGINALD DOUCET JR.",
  "DANROY HENRY JR.",
  "KARVAS GAMBLE JR.",
  "ERIC REASON",
  "KORRYN GAINES",
  "REKIA BOYD",
  "KIONTE SPENCER",
  "DARIUS TARVER",
  "MANUEL ELLIS",
  "VICTOR DUFFY JR.",
  "KOBE DIMOCK-HEISLER",
  "CLINTON R. ALLEN",
  "COREY JONES",
  "TYRE KING",
  "MICHAEL LORENZO DEAN",
  "TRAYVON MARTIN",
  "RENISHA MCBRIDE",
  "OSCAR GRANT III",
  "BREONNA TAYLOR",
  "KALIEF BROWDER",
  "DARRIEN HUNT",
  "WILLIAM GREEN",
  "AHMAUD ARBERY",
  "TONY MCDADE",
  "JAMEL FLOYD",
  "GEORGE FLOYD",
]
