import { Box } from "@material-ui/core";
import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1024,
        mx: "auto",
        display: "flex",
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
