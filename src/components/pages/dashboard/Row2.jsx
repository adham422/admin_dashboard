import { Box, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import Line from '../line/Line';
import { DownloadOutlined } from '@mui/icons-material';

const Row2 = () => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} spacing={2} flexWrap="wrap" margin={"15px 0"} gap={"20"} >
            <Paper sx={{ margin: "20px auto", flexGrow: 5, flexBasis: "300px", minHeight: "500px" }}>
                <Stack direction={"row"} justifyContent={"space-between"} flexWrap="wrap" padding={"10px"} >
                    <Box>
                        <Typography>
                            Revenue Generated
                        </Typography>
                        <Typography>
                            $59,342,32
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton> <DownloadOutlined /></IconButton>

                    </Box>
                </Stack>
                <Line />
            </Paper>
            <Box sx={{ maxWidth: "350px", margin: "20px auto", flexGrow: "1", overflow: "auto", minHeight: "500px",maxHeight:"950px" }}>
                <Stack direction={"column"} gap={2}>
                    <Paper sx={{ height: "80px", fontSize: "1.2rem", fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <Box>
                            <Typography variant='h6'>test1</Typography>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{ padding: "3px", backgroundColor: theme.palette.mode === "dark" ? "#d61313cb" : "#dfd4d4ff", width: "80px", height: "40px", borderRadius: "10px" }}>$ 100</IconButton>
                        </Box>
                    </Paper>
                    <Paper sx={{ height: "80px", fontSize: "1.2rem", fontWeight: "300px", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <Box>
                            <Typography variant='h6'>test1</Typography>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{ padding: "3px", backgroundColor: theme.palette.mode === "dark" ? "#d61313cb" : "#dfd4d4ff", width: "80px", height: "40px", borderRadius: "10px" }}>$ 320</IconButton>
                        </Box>
                    </Paper>
                    <Paper sx={{ height: "80px", fontSize: "1.2rem", fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <Box>
                            <Typography variant='h6'>test1</Typography>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{ padding: "3px", backgroundColor: theme.palette.mode === "dark" ? "#d61313cb" : "#dfd4d4ff", width: "80px", height: "40px", borderRadius: "10px" }}>$ 100</IconButton>
                        </Box>
                    </Paper>
                    <Paper sx={{ height: "80px", fontSize: "1.2rem", fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <Box>
                            <Typography variant='h6'>test1</Typography>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{ padding: "3px", backgroundColor: theme.palette.mode === "dark" ? "#d61313cb" : "#dfd4d4ff", width: "80px", height: "40px", borderRadius: "10px" }}>$ 500</IconButton>
                        </Box>
                    </Paper>
                    <Paper sx={{ height: "80px", fontSize: "1.2rem", fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <Box>
                            <Typography variant='h6'>test1</Typography>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{ padding: "3px", backgroundColor: theme.palette.mode === "dark" ? "#d61313cb" : "#dfd4d4ff", width: "80px", height: "40px", borderRadius: "10px" }}>$ 400</IconButton>
                        </Box>
                    </Paper>
                    <Paper sx={{ height: "80px", fontSize: "1.2rem", fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <Box>
                            <Typography variant='h6'>test1</Typography>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{ padding: "3px", backgroundColor: theme.palette.mode === "dark" ? "#d61313cb" : "#dfd4d4ff", width: "80px", height: "40px", borderRadius: "10px" }}>$ 300</IconButton>
                        </Box>
                    </Paper>
                    <Paper sx={{ height: "80px", fontSize: "1.2rem", fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <Box>
                            <Typography variant='h6'>test1</Typography>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{ padding: "3px", backgroundColor: theme.palette.mode === "dark" ? "#d61313cb" : "#dfd4d4ff", width: "80px", height: "40px", borderRadius: "10px" }}>$ 300</IconButton>
                        </Box>
                    </Paper>
                    <Paper sx={{ height: "80px", fontSize: "1.2rem", fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <Box>
                            <Typography variant='h6'>test1</Typography>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{ padding: "3px", backgroundColor: theme.palette.mode === "dark" ? "#d61313cb" : "#dfd4d4ff", width: "80px", height: "40px", borderRadius: "10px" }}>$ 300</IconButton>
                        </Box>
                    </Paper>
                    <Paper sx={{ height: "80px", fontSize: "1.2rem", fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <Box>
                            <Typography variant='h6'>test1</Typography>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{ padding: "3px", backgroundColor: theme.palette.mode === "dark" ? "#d61313cb" : "#dfd4d4ff", width: "80px", height: "40px", borderRadius: "10px" }}>$ 100</IconButton>
                        </Box>
                    </Paper>
                    <Paper sx={{ height: "80px", fontSize: "1.2rem", fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <Box>
                            <Typography variant='h6'>test1</Typography>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{ padding: "3px", backgroundColor: theme.palette.mode === "dark" ? "#d61313cb" : "#dfd4d4ff", width: "80px", height: "40px", borderRadius: "10px" }}>$ 100</IconButton>
                        </Box>
                    </Paper>
                    <Paper sx={{ height: "80px", fontSize: "1.2rem", fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <Box>
                            <Typography variant='h6'>test1</Typography>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{ padding: "3px", backgroundColor: theme.palette.mode === "dark" ? "#d61313cb" : "#dfd4d4ff", width: "80px", height: "40px", borderRadius: "10px" }}>$ 100</IconButton>
                        </Box>
                    </Paper>
                    <Paper sx={{ height: "80px", fontSize: "1.2rem", fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <Box>
                            <Typography variant='h6'>test1</Typography>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{ padding: "3px", backgroundColor: theme.palette.mode === "dark" ? "#d61313cb" : "#dfd4d4ff", width: "80px", height: "40px", borderRadius: "10px" }}>$ 100</IconButton>
                        </Box>
                    </Paper>
                    <Paper sx={{ height: "80px", fontSize: "1.2rem", fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <Box>
                            <Typography variant='h6'>test1</Typography>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{ padding: "3px", backgroundColor: theme.palette.mode === "dark" ? "#d61313cb" : "#dfd4d4ff", width: "80px", height: "40px", borderRadius: "10px" }}>$ 100</IconButton>
                        </Box>
                    </Paper>
                    <Paper sx={{ height: "80px", fontSize: "1.2rem", fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <Box>
                            <Typography variant='h6'>test1</Typography>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{ padding: "3px", backgroundColor: theme.palette.mode === "dark" ? "#d61313cb" : "#dfd4d4ff", width: "80px", height: "40px", borderRadius: "10px" }}>$ 100</IconButton>
                        </Box>
                    </Paper>
                    <Paper sx={{ height: "80px", fontSize: "1.2rem", fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <Box>
                            <Typography variant='h6'>test1</Typography>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <Typography>test1</Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{ padding: "3px", backgroundColor: theme.palette.mode === "dark" ? "#d61313cb" : "#dfd4d4ff", width: "80px", height: "40px", borderRadius: "10px" }}>$ 100</IconButton>
                        </Box>
                    </Paper>
                </Stack>
            </Box>

        </Stack>
    );
}

export default Row2;