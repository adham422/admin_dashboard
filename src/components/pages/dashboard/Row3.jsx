import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import Geography from './../geography/Geography';
import Bar from './../bar/Bar';
import Piee from './Piee';

const Row3 = () => {
  return (
    <Stack 
      direction={{ xs: "column", sm: "row" }} 
      gap={2} 
      flexWrap={"wrap"}
    >
      <Paper sx={{ 
          width: { xs: "100%", sm: "30%" }, 
          textAlign: "center", 
          padding: "20px 0", 
          flexGrow: 1 
        }}>
        <Typography sx={{ fontSize: "1rem" }}>Campaign</Typography>
        <Piee />
        <Typography>$48.352 revenue</Typography><br />
        <Typography>generated</Typography>
        <Typography>includes extra misc expenditures and costs</Typography>
      </Paper>

      <Paper sx={{ 
          width: { xs: "100%", sm: "30%" }, 
          textAlign: "center", 
          padding: "20px 0", 
          flexGrow: 1 
        }}>
        <Typography sx={{ fontSize: "1rem" }}>Sales Quantity</Typography>
        <Bar />
      </Paper>

      <Paper sx={{ 
          width: { xs: "100%", sm: "30%" }, 
          textAlign: "center", 
          padding: "20px 0", 
          minWidth: "300px", 
          flexGrow: 1 
        }}>
        <Typography sx={{ fontSize: "1rem" }}>Geography-Based Traffic</Typography>
        <br />
        <Geography />
      </Paper>
    </Stack>
  );
}

export default Row3;