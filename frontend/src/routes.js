import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { Layout } from "./components/Layout";
import { AddOrEdit } from './components/AddOrEdit';
import { EditUser } from './pages/EditUser';
export const MainRoutes = () =>
{
    return (
        <>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/:id" element={<Users />} />

                </Routes>
            </Layout>
        </>
    );
};
