import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { Layout } from "./components/Layout";
import { FormAddOrEditUsers } from './components/FormAddOrEditUsers';
import { EditUser } from './pages/EditUser';
import { Comments } from './components/Comments';
export const MainRoutes = () =>
{
    return (
        <>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/:id" element={<Users />} />
                    <Route path="/comments" element={<Comments />} />
                    <Route path="/comments/:id" element={<Comments />} />


                </Routes>
            </Layout>
        </>
    );
};
