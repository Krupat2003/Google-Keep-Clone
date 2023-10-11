import React from 'react';
import SwipeDrawer from './SwipeDrawer';
// import Notes from '../nots/Notes';
import Notes from './notes/Notes';
import DeleteNotes from './delete/DeleteNotes';
import Archives from './archives/Archives';

import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <Box style={{ display: 'flex', width: '100%' }} >
                <Router>
                    <SwipeDrawer />
                    <Routes>
                        <Route path='/' element={<Notes />} />
                        <Route path='/archive' element={<Archives />} />
                        <Route path='/delete' element={<DeleteNotes />} />
                    </Routes>
                </Router>
            </Box>
        </>
    )
}

export default Home
