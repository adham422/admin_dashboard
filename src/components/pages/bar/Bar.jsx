import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Box, useTheme } from '@mui/material';

const data = [
  {
    year: 2019,
    span: 900,
    france: 1400,
    germany: 1700,
  },
  {
    year: 2020,
    span: 1000,
    france: 1500,
    germany: 1800,
  },
  {
    year: 2021,
    span: 1100,
    france: 1600,
    germany: 2000,
  },
  {
    year: 2022,
    span: 1200,
    france: 1800,
    germany: 2100,
  },
  {
    year: 2023,
    span: 1300,
    france: 1900,
    germany: 2200,
  },
];

const Bar = () => {
 const theme = useTheme();

  return (
    <Box sx={{ height: '75vh' }}>
      <ResponsiveBar
      
        data={data}
        keys={['span', 'france', 'germany']}
        indexBy="year"
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            translateX: 120,
            itemsSpacing: 3,
            itemWidth: 100,
            itemHeight: 16,
          },
        ]}
        axisBottom={{ legend: 'Year', legendOffset: 35 }}
        axisLeft={{ legend: 'Value', legendOffset: -60 }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        tooltip={({ id, value}) => (
          <div style={{ display: "flex", justifyContent: "center", fontSize: "10px", color: "black", background: "white", padding: "5px", borderRadius: "3px", boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            {id}={value}
          </div>)}
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
  );
};

export default Bar;