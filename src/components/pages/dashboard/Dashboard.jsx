import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import { Button } from '@mui/material'
import { GetAppOutlined } from '@mui/icons-material'

const Dashboard = () => {
  return (
    <div>

      <div style={{ display: "flex", justifyContent: "flex-end", padding: "6px 8px", textTransform: "capitalize" }}>
        <Button variant='contained' color='primary'> <GetAppOutlined />Download Reports</Button>
      </div>
     
      <Row1 />
      <Row2 />
      <Row3 />


    </div>
  )
}

export default Dashboard
