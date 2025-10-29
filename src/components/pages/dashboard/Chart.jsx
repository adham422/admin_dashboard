import { Box, useTheme } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'
import React from 'react'
const data = [
    {
        "id": "hack",
        "label": "hack",
        "value": 435,
        "color": "hsl(97, 70%, 50%)"
    },
    {
        "id": "make",
        "label": "make",
        "value": 568,
        "color": "hsl(288, 70%, 50%)"
    },
    {
        "id": "go",
        "label": "go",
        "value": 523,
        "color": "hsl(108, 70%, 50%)"
    },

]
const Chart = () => {
    const theme =useTheme();
    return (
        <Box height={"70px"} width={"70px"}>
            <ResponsivePie
                data={data}
                margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
                innerRadius={0.7}
                enableArcLabels={false}
                enableArcLinkLabels={false}
                padAngle={0.6}
                cornerRadius={2}
                colors={{ scheme: "nivo" }}
               tooltip={({ datum }) => (
          <div style={{ display: "flex", justifyContent: "center", fontSize: "10px", color: "black", background: "white", padding: "5px", borderRadius: "3px", boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            {datum.label}={datum.value}
          </div>
        )}
        theme={{
          axis: {
            ticks: {
              text: {
                fill: theme.palette.text.primary,
              },
            },
            legend: {
              text: {
                fill: theme.palette.text.primary,
              },
            },
          },
          legends: {
            text: {
              fill: theme.palette.text.primary,
            },
          },
        }}
      />
           
          
      
        </Box>
    )
}

export default Chart
