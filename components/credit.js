import { Box } from "rebass";

export const Credit = ({intro}) => {
  return (
    <Box
        onClick={() => typeof window !== 'undefined' && window.location.assign('https://rasha.world')}
      sx={{
        position: "fixed",
        backgroundColor: "orange",
        color: "navyblue",
        fontWeight: "600",
        borderRadius: 10,
        bottom: 20,
        right: 10,
        padding: 10,
        zIndex: 5,
        transition: "all 600ms ease-in-out",
        opacity: intro ? 0 : 0.5,
        ":hover": {
          backgroundColor: "black",
          color: "white",
          cursor: "pointer",
          transform: "scale(1.02)",
          opacity: 1,
        },
      }}
    >
      developed by Rasha Rahman
    </Box>
  );
};
