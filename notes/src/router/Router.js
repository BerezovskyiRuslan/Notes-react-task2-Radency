import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from '../components/Home/Home';
import HomeContainer from '../components/Home/HomeContainer';
import CreateOrEditNote from '../components/CreateOrEditNote/CreateOrEditNoteContainer.js';
import PageNotFound from '../components/PageNotFound/pageNotFound';
import NotesItem from '../components/NotesItem/NotesItemContainer';

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeContainer />}></Route>
                <Route path="/:id" element={<NotesItem/>}></Route>
                <Route path="/create" element={<CreateOrEditNote />}></Route>
                <Route path="/edit/:id" element={<CreateOrEditNote />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;