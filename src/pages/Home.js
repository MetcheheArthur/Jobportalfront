import React, { useState, useEffect } from 'react';
import { useSelector } from '@mui/material/hooks';
import Navbar from '../component/Navbar';
import Header from '../component/Header';

const Home = () => {
    const [category, setCategory] = useState('');

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const { jobs } = useSelector((state) => state.jobs);
    const { palette } = useTheme();

    return (
        <>
            <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>

                <Navbar />
                <Header />
                <Container>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        <Box sx={{ flex: 2, p: 2 }}>
                            <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                                <Box sx={{ pb: 2 }}>
                                    <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                                        Filter job by category
                                    </Typography>
                                    <select onChange={handleCategoryChange}>
                                        <option value="">Select a category</option>
                                        {jobs.map((job) => (
                                            <option key={job._id} value={job.jobTypeName}>{job.jobTypeName}</option>
                                        ))}
                                    </select>
                                </Box>

                            </Card>                            
                        </Box>
                        <Box sx={{flex:5, pb: 2 }}>

                        </Box>
                    </Stack>
                </Container>
            </Box>

        </>
    )
}

export default Home;