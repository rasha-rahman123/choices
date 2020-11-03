import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Box, Flex } from "rebass";
import styles from "../styles/Home.module.css";
import { ChoiceMaker } from "../components/choiceMaker";
import { ChoiceInput } from "../components/choiceInput";
import { Intro } from "../components/intro";
import { FinalAnswer } from "../components/finalAnswer";
import { Credit } from "../components/credit";
import { Title } from "../components/title";
import { Instructions } from "../components/instructions";

export default function Home() {
  // Cards Message
  const [cardMsg, setCardMsg] = useState(["choice 1", "choice 2"]);
  const [finalColor, setColor] = useState("black");

  const [intro, setIntro] = useState(true);
  const [displayOff, setDisplayOff] = useState(false);
  const [ins, setIns] = useState(false)
  function handleClick() {

    let arr = [...cardMsg];
    arr.length === 1 && setColor('black')
    arr.push("choice " + (arr.length + 1));
    cardMsg.length > 1 ? setCardMsg(arr) : setCardMsg(["choice 1", "choice 2"]) && setColor('black');
  }

  useEffect(() => {
    window.onkeydown = onKeyDown
  })

  const onKeyDown = (e) => {
    e = e || window.event
    
    switch(e.keyCode) {
      case 191:
        setIns(!ins)
        console.log('2')
        break;

    }
  }

  function handleRemove() {
    let arr = [...cardMsg];
    console.log(arr);
    arr.pop();
    setCardMsg(arr);
  }

  function handleChange(e, i) {
    let arr = [...cardMsg];
    arr[i] = e.target.value;
    console.log(arr[i]);
    setCardMsg(arr);
    console.log(cardMsg);
  }

  function handleShuffle() {
    let arr = [...cardMsg];
    while (arr.length > 1) {
      let ay = Math.random();
      arr.splice(Math.round(ay * (arr.length - 1)), 1);
    }
    setCardMsg(arr);
  }

  useEffect(() => {
    const introEnd = setTimeout(() => {
      setIntro(false);
      displayOffStart;
    }, 5000);
    const displayOffStart = setTimeout(() => {
      setDisplayOff(true);
    }, 5300);
    introEnd;
  }, []);



  const ref = useRef();
  return (
    <Box className={styles.container}>
      <Instructions boolean={ins}/>
      <Title intro={intro} />
      <Credit intro={intro} />
     <Intro intro={intro} displayOff={displayOff} />
      <Flex
        width="100vw"
        height="100%"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <Box
          width="100%"
          disply={cardMsg.length === 1 && "flex"}
          justifyContent={cardMsg.length === 1 && "space-between"}
          height={cardMsg.length < 6 ? "90vh" : "100vh"}
        >
          {cardMsg.length === 1 && (
           <FinalAnswer cardMsg={cardMsg} finalColor={finalColor} setColor={setColor}/>
          )}
          {cardMsg.length > 1 &&
            cardMsg.map((x, i) => (
              <ChoiceInput
                handleChange={handleChange}
                cardMsg={cardMsg}
                x={x}
                i={i}
              />
            ))}
        </Box>
        <Box
          sx={{
            position: "absolute",
            flexDirection: 'column',
            display: "flex",
            top: 0,
            right: 0,
            transform: "scale(0.8)",
          }}
        >
          {cardMsg.length > 1 && (
            <ChoiceMaker
              handleClick={handleClick}
              handleShuffle={handleShuffle}
              cardMsg={cardMsg}
              buttonType={'main'}
            />
          )}
          {cardMsg.length > 2 && (
              <ChoiceMaker
              handleClick={handleRemove}
              handleShuffle={handleShuffle}
              cardMsg={cardMsg}
              buttonType={'sec'}
            />
            // <Box
            //   onClick={() => handleRemove()}
            //   sx={{
            //     borderRadius: 10,
            //     border: "2px solid black",
            //     m: 20,
            //     fontSize: "1.5rem",
            //     alignItems: "center",
            //     textAlign: "center",
            //     fontWeight: "bolder",
            //     color: "white",
            //     opacity: 0.2,
            //     ":hover": {
            //       opacity: 1,
            //       cursor: "pointer",
            //       boxSWhadow: "10px 10px 10px blue",
            //     },
            //   }}
            //   width={"100px"}
            //   height={"100%"}
            //   py={3}
            //   backgroundColor={"red"}
            // >
            //   DELETE ROW
            // </Box>
            
          )}
        </Box>
        {
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: cardMsg.length > 5 ? 0 : 1,
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer",
              zIndex: 3,
              ":hover": {
                backgroundColor: "limegreen",
                transform: "scale(1.1)",
              },
              transition: "all 300ms ease-in-out",
            }}
            width="100%"
            height="10vh"
            onClick={() => cardMsg.length < 6 && handleClick()}
            backgroundColor={cardMsg.length % 2 === 0 ? "orange" : "black"}
          >
            {cardMsg.length > 1
              ? "add option"
              : "start over"}
          </Box>
        }
      </Flex>
    </Box>
  );
}
