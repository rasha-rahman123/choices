import { Box } from "rebass";
import { Input } from "@rebass/forms";
import styles from "../styles/Home.module.css";

export const ChoiceInput = ({ cardMsg, handleChange, x, i }) => {
  return (
    <Box
  
      sx={{
        color: "white",

        transition: "all 300ms ease-in-out",
        ":hover": {
          backgroundColor: "#f7c05b",
          cursor: "pointer",
          color: "black",
          // color: i%2 === 0 ? "orange" : 'black',
        },
        ":focus": {
          outline: "none",
        },
      }}
      width="100%"
      height={100 * (1 / cardMsg.length) + "%"}
      backgroundColor={i % 2 === 0 ? "orange" : "black"}
    >
      <Box
        sx={{
          position: "absolute",
          display: "inline",
          cursor: 'text',
          borderRadius: 5,
          backgroundColor: "gray",
          color: "white",
          margin: "10px 0px 0px 10px",
          padding: 1,
          opacity: 0.6,
          ":hover": {
            opacity: 1,
          },
        }}
      >
        {x}
      </Box>
      <Input
        fontFamily="Inter"
        fontSize={20 - cardMsg.length * 2 + "rem"}
        fontWeight="bold"
        lineHeight="body"
        sx={{
          width: "100%",
          cursor: "pointer",
          height: "100%",
          outline: "none",
        }}
        className={styles.inputer}
        onChange={(e) => handleChange(e, i)}
        id={x}
        name="name"
        value={x}
      ></Input>
    </Box>
  );
};
