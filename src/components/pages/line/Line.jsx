import { Box, useTheme } from '@mui/material'
import React from 'react'
import { ResponsiveLine } from '@nivo/line'
const data = [
  {
    "id": "japan",
    "data": [
      {
        "x": "plane",
        "y": 144
      },
      {
        "x": "helicopter",
        "y": 5
      },
      {
        "x": "boat",
        "y": 85
      },
      {
        "x": "train",
        "y": 48
      },
      {
        "x": "subway",
        "y": 81
      },
      {
        "x": "bus",
        "y": 78
      },
      {
        "x": "car",
        "y": 122
      },
      {
        "x": "moto",
        "y": 95
      },
      {
        "x": "bicycle",
        "y": 117
      },
      {
        "x": "horse",
        "y": 80
      },
      {
        "x": "skateboard",
        "y": 283
      },
      {
        "x": "others",
        "y": 211
      }
    ]
  },
  {
    "id": "france",
    "data": [
      {
        "x": "plane",
        "y": 190
      },
      {
        "x": "helicopter",
        "y": 234
      },
      {
        "x": "boat",
        "y": 123
      },
      {
        "x": "train",
        "y": 67
      },
      {
        "x": "subway",
        "y": 231
      },
      {
        "x": "bus",
        "y": 139
      },
      {
        "x": "car",
        "y": 219
      },
      {
        "x": "moto",
        "y": 151
      },
      {
        "x": "bicycle",
        "y": 218
      },
      {
        "x": "horse",
        "y": 183
      },
      {
        "x": "skateboard",
        "y": 246
      },
      {
        "x": "others",
        "y": 176
      }
    ]
  },
  {
    "id": "us",
    "data": [
      {
        "x": "plane",
        "y": 215
      },
      {
        "x": "helicopter",
        "y": 54
      },
      {
        "x": "boat",
        "y": 227
      },
      {
        "x": "train",
        "y": 117
      },
      {
        "x": "subway",
        "y": 63
      },
      {
        "x": "bus",
        "y": 197
      },
      {
        "x": "car",
        "y": 279
      },
      {
        "x": "moto",
        "y": 68
      },
      {
        "x": "bicycle",
        "y": 254
      },
      {
        "x": "horse",
        "y": 127
      },
      {
        "x": "skateboard",
        "y": 242
      },
      {
        "x": "others",
        "y": 134
      }
    ]
  },
  {
    "id": "germany",
    "data": [
      {
        "x": "plane",
        "y": 219
      },
      {
        "x": "helicopter",
        "y": 163
      },
      {
        "x": "boat",
        "y": 299
      },
      {
        "x": "train",
        "y": 116
      },
      {
        "x": "subway",
        "y": 65
      },
      {
        "x": "bus",
        "y": 84
      },
      {
        "x": "car",
        "y": 71
      },
      {
        "x": "moto",
        "y": 54
      },
      {
        "x": "bicycle",
        "y": 182
      },
      {
        "x": "horse",
        "y": 297
      },
      {
        "x": "skateboard",
        "y": 205
      },
      {
        "x": "others",
        "y": 15
      }
    ]
  },
  {
    "id": "norway",
    "data": [
      {
        "x": "plane",
        "y": 19
      },
      {
        "x": "helicopter",
        "y": 192
      },
      {
        "x": "boat",
        "y": 255
      },
      {
        "x": "train",
        "y": 61
      },
      {
        "x": "subway",
        "y": 275
      },
      {
        "x": "bus",
        "y": 129
      },
      {
        "x": "car",
        "y": 86
      },
      {
        "x": "moto",
        "y": 54
      },
      {
        "x": "bicycle",
        "y": 126
      },
      {
        "x": "horse",
        "y": 82
      },
      {
        "x": "skateboard",
        "y": 218
      },
      {
        "x": "others",
        "y": 83
      }
    ]
  }
]
const Line = () => {
  const theme = useTheme();
  return (
    <Box sx={{height:"75vh"}}>
     <ResponsiveLine 
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisBottom={{ legend: 'transportation', legendOffset: 36 }}
        axisLeft={{ legend: 'count', legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
        tooltip={({ point }) => (
          <div style={{ display: "flex", justifyContent: "center",backgroundColor:"white",padding:"5px", fontSize: "10px", color: "black" }}>
            {point.data.x}-{point.data.y}
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

export default Line

