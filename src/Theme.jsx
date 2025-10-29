// function to conterol the color in state ligth mode or dark mode
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light" ? 
        {

    }
     : {

    }),
  },
});
