import { Box } from "rebass"

export const Intro = ({intro, displayOff}) => {
    return  <Box
    sx={{
      position: "absolute",
      width: "100vw",
      minHeight: "100vh",
      backgroundColor: "black",
      zIndex: intro ? 4 : "unset",
      display: displayOff ? "none" : "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "goldenrod",
      opacity: intro ? 1 : 0,
      transition: "all 300ms ease-in-out",
      cursor: 'none'
    }}
  >
    <Box
      sx={{
        transform: "scale(1.8)",
      }}
    >
      <h1>choices.</h1>
      <Box lineHeight="1%" color={"aquamarine"}>
        <h6>a tool created by rasha rahman</h6>
        <Box as="h6" display="block" mt={-10}>
          is loading now
        </Box>
      </Box>
    </Box>
  </Box>
}