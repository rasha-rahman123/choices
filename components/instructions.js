import { Box } from "rebass";
import { Title } from "./title";

export const Instructions = ({ boolean }) => {
  const instructions = [
    "type in your choices for choice 1 & 2",
    "click at the bottomn to add more cohices if needed",
    "delete row 3 and on with the `delete row` button",
    "once ready to make a choice, press `make choice`",
  ];
  return (
    <Box
      sx={{
        backgroundColor: "black",
        position: "fixed",
        top: 0,
        left: 0,
        minWidth: "100vw",
        minHeight: "100vh",
        zIndex: 9,
        cursor: "none",
        display: boolean ? "flex" : 'none',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title />
      <Box
        sx={{
          color: "white",
          backgroundColor: "#01143f90",
          // position: 'relative',
          width: "90vw",
          height: "80vh",
          zIndex: 10,
          cursor: "none",
          borderRadius: 20,
          display: "flex",
          justifyContent: "left",
          flexDirection: "column",
          padding: 10,
        }}
      >
        <Box as="h2" m={20} sx={{
            backgroundColor: 'yellow',
            color: 'navy',
            px: 2,
            borderRadius: 2
        }} >instructions:</Box>
        <Box as="h4">
          <Box as="ul">
            {instructions.map((x, i) => (
              <Box as="li" sx={{
                  listStyle: 'none',
                  my: 3
              }} key={i}>
                <Box as="span" sx={{
                    fontWeight: 800,
                    fontSize: '1.2rem'
                }}>
                    {i + 1 + " - "}
                </Box> {x}
              </Box>
            ))}
          </Box>
        </Box>
        <Box as="h3" m={4} width="50%" sx={{
            lineHeight: '200%'
        }}>choices. was developed by <Box sx={{
            backgroundColor: 'yellow',
            color: 'navy',
            px: 2,
            borderRadius: 2
        }} as="object">
            Rasha Rahman</Box> as a tool to help him choose between different options such as where to get takeout, what numbers to write on the lotto, and many more!</Box>
      </Box>
    </Box>
  );
};
