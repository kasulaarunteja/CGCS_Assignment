import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Characters from '../Components/Characters';
import Comics from '../Components/Comics';
import Stories from '../Components/Stories';

const AllRoutes = () => {
    return (
        <Routes>
            
            <Route path="/" element={<Characters/>}/>
            <Route path="/comics" element={<Comics/>}/>
            <Route path="/stories" element={<Stories/>}/>
        </Routes>
    );
}

export default AllRoutes;
