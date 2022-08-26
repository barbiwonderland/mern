import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

export const Footer = () =>
{
    return (
        <>
            <div className="bg-white border rounded-5 fixed-bottom ">

                <footer className="text-center  ">
                    <div className="container p-1 pb-0  d-flex justify-content-end">

                        <a className="btn btn-primary border-0 m-1 rounded-circle" href='/#' style={{ backgroundColor: "#ac2bac" }} role="button"> <BsInstagram /></a>

                        <a className="btn btn-primary border-0 m-1 rounded-circle" href='/#' style={{ backgroundColor: "#0082ca" }} role="button"> <BsLinkedin /></a>
                        <a className="btn btn-primary border-0 m-1 rounded-circle" href='/#' style={{ backgroundColor: "#333333" }} role="button"><BsGithub /></a>
                    </div>


                </footer>

            </div>
        </>
    );
};
