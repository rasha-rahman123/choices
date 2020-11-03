import { Box } from "rebass";

export const Title = ({intro}) => {
  return (
    <Box
        onClick={() => typeof window !== 'undefined' && window.location.reload()}
      sx={{
        position: "fixed",
        backgroundColor: "black",
        color: "white",
        fontWeight: "600",
        borderRadius: 10,
        bottom: 20,
        left: 10,
        padding: 10,
        zIndex: 5,
        transition: "all 600ms ease-in-out",
        opacity: intro ? 0 : 0.5,
        ":hover": {


          cursor: "pointer",
          transform: "scale(1.02)",
          opacity: 1,
        },
      }}
    >
      choices.
    </Box>
  );
};
