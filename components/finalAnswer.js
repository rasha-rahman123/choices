import { useEffect, useState } from "react";
import { Box } from "rebass";

export const FinalAnswer = ({ cardMsg, finalColor, setColor }) => {

  const [grow, setGrow] = useState(false)
  useEffect(() => {
    const time = setTimeout(
      () => {
        setColor(cardMsg.length > 1 ? "black" : "limegreen");
      },
      finalColor === "limegreen" ? 100 : 2000
    );
    time;
  }, [cardMsg]);

  useEffect(() => {
    finalColor === 'limegreen' && setGrow(true)
  })
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
        transition: "all 3s ease-in-out",
        transform: grow ? 'scale(1)' : 'scale(0.8)',
        zIndex: -1
      }}
      width={"100vw"}
    >
      <Box as="h4" color="white">
        the gods have spoken:
      </Box>
      <Box
        as="h1"
        color={finalColor}
        sx={{
          transition: "all 3s ease-in-out",
        }}
      >
        {cardMsg[0]}
      </Box>
    </Box>
  );
};
