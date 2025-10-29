import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import Chart from './Chart'

const Card = ({ icon, num, percentage, title }) => {
    return (
        <>
            <Paper sx={{ minWidth: "300px", display: "flex", justifyContent: "space-between", padding: "15px", margin: "auto" }}>
                <Stack direction={"column"} gap={"5px"} justifyContent={"center"}>
                    {icon}
                    <Typography>{num}</Typography>
                    <Typography>{title}</Typography>
                </Stack>
                <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Chart />

                    <Typography>{percentage}</Typography>
                </Stack>
            </Paper>
        </>
    )
}

export default Card
