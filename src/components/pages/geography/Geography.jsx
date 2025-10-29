import React from 'react';
import { Box, useTheme } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo';
import { geo } from './world_countries'; // Make sure this is valid GeoJSON

const data = [
  { id: 'EGY', value: 780843 },
  { id: 'USA', value: 534026 },
  { id: 'RUS', value: 854837 },
  { id: 'CHN', value: 270339 },
  { id: 'IND', value: 69379 },
  { id: 'BRA', value: 80297 },
  { id: 'ZAF', value: 513469 },
  { id: 'CANn', value: 553651 },
  { id: 'AUSn', value: 640000 },
   { id: 'BRAn', value: 80297 },
  { id: 'ZAFn', value: 513469 },
];

const Geography = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box sx={{ height: '75vh' }}>
      <ResponsiveChoropleth
        data={data}
        features={geo.features} 
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors={isDarkMode ? ['#ff7f50', '#3f3dac'] : ['#add8e6', '#4682b4']}
        domain={[0, 1000000]}
        unknownColor={isDarkMode ? '#666666' : '#cccccc'}
        label="properties.name"
        valueFormat=".2s"
        projectionScale={120} 
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor={isDarkMode ? '#444444' : '#9756568c'}
        borderWidth={0.5}
        borderColor={isDarkMode ? '#ffffff' : '#1e0349'}
        legends={[
          {
            anchor: 'bottom-left',
            direction: 'column',
            justify: true,
            translateX: 20,
            translateY: -60,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemTextColor: isDarkMode ? '#ffffff' : '#160202ff',
            itemOpacity: 0.85,
            symbolSize: 18
          }
        ]}
        tooltip={({ feature }) => {
          if (!feature.data) return null;
          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '10px',
                color: 'black',
                background: 'white',
                padding: '5px',
                borderRadius: '3px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
              }}
            >
              {feature.properties.name}={feature.data.value}
            </div>
          );
        }}
      />
    </Box>
  );
};

export default Geography;
