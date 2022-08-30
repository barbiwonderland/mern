import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { Layout } from "./components/Layout";
import { UserComments } from './pages/UserComments';
export const MainRoutes = () =>
{
    return (
        <>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/:id" element={<Users />} />
                    <Route path="/comments/:id" element={<UserComments />} />


                </Routes>
            </Layout>
        </>
    );
};
