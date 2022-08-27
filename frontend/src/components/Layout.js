import React from 'react';
import { Footer } from './Footer';
import Bar from './Bar';

export const Layout = ({ children }) =>
{
    return (
        <>
            <Bar />
            {children}
            <Footer />
        </>
    );
};
