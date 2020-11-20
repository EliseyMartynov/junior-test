import { Box } from "@material-ui/core";
import React from "react";

const Error = ({message}) => {
  return (
    <Box
     width={1}
     style={{
        padding: '1rem',
        margin: '1rem 0'
      }}
     color="#fff"
     bgcolor="error.main">
      {message}
    </Box>
  );
};

export default Error;
