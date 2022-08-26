import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { Layout } from "./components/Layout";
export const MainRoutes = () =>
{
    return (
        <>
            <Layout>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/users" element={<Users />} />
                    </Routes>
                </BrowserRouter>
            </Layout>
        </>
    );
};
