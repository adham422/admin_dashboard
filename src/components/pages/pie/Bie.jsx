import React from 'react'
import { Box, useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';
const data = [
  { id: 'span', label: 'Span', value: 900 },
  { id: 'france', label: 'France', value: 1400 },
  { id: 'germany', label: 'Germany', value: 1700 },
  { id: 'KSA', label: 'KSA', value: 1800 },
  { id: 'EGY', label: 'EGY', value: 1900 },
];
const Bie = () => {
  const theme = useTheme();
  return (
    <Box sx={{ height: "75vh" }}>
      <ResponsivePie
        data={data}
        keys={['span', 'france', 'germany', "KSA", "EGY"]}
        indexBy="year"
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            symbolShape: 'circle'
          }

        ]}
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

export default Bie
