import { Stack, useTheme } from '@mui/material'
import React from 'react'
import Card from './Card'
import { Email, PersonAdd, PointOfSale, Traffic } from '@mui/icons-material'

const Row1 = () => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} gap={"1"} flexWrap={"wrap"} justifyContent={{ xs: "center", sm: "space-between" }}>
            <Card icon={<Email sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />} num={"12,361"} title={"Emails Sent"}  percentage={"+14%"} />
            <Card icon={<PointOfSale sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />} num={"431,225"} title={"Sales obtained"}  percentage={"+21%"} />
            <Card icon={<PersonAdd sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />} num={"32,441"} title={"New Clients"}  percentage={"+5%"} />
            <Card icon={<Traffic sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />} num={"1,325,134"} title={"Traffic Received"}  percentage={"+43%"} />


        </Stack>
    )
}

export default Row1
