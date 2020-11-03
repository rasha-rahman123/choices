import { Box } from "rebass"
import styles from "../styles/Home.module.css";

export const ChoiceMaker = ({cardMsg, handleClick, handleShuffle, buttonType}) => {
    return <Box
    onClick={() => 
      buttonType === 'main' ? cardMsg.length > 1 ? handleShuffle() : handleClick() : handleClick()
    }className={ buttonType === 'main' ? styles.choicebox : styles.deletebox}
    sx={{

      borderRadius: '5px',
      m: 2,
      fontSize: "1.5rem",
      alignItems: "center",
      textAlign: "center",
      fontWeight: "bolder",
      color: "black",
      opacity: 1,
      transition: 'all 300ms ease-in-out',
      // backgroundImage: 'linear-gradient(90deg, #FFA500 60%, #32cd32 40%)',
      ":hover": {
  
        cursor: "pointer",

      },
    }}
    width={"300px"}
    height={"100%"}
    py={3}
    
  >
    { buttonType === 'main' ? cardMsg.length > 1 ? "make a choice" : "start over" : 'delete choice'}
  </Box>
}