import React from 'react';
import { BsPersonBoundingBox, BsLinkedin, BsGithub } from "react-icons/bs";

export const Footer = () =>
{
    return (
        <>
            <div className="bg-white fixed-bottom container-fluid  ">

                <footer className="text-center  ">
                    <div className=" d-flex justify-content-center">

                        <a className=" btn btn-primary border-0 m-1 rounded-circle " target="_blank" href='https://barbarabottazzi.netlify.app/' style={{ backgroundColor: " rgb(72 222 127)", width: "40px", height: "40px" }} role="button"> <  BsPersonBoundingBox /></a>
                        <a className=" btn btn-primary border-0 m-1 rounded-circle" target="_blank" href='https://www.linkedin.com/in/barbara-bottazzi/' style={{ backgroundColor: "#0082ca", width: "40px", height: "40px" }} role="button"> <BsLinkedin /></a>
                        <a className=" btn btn-primary border-0 m-1 rounded-circle" target="_blank" href='https://github.com/barbiwonderland' style={{ backgroundColor: "rgb(222 87 158)", width: "40px", height: "40px" }} role="button"><BsGithub /></a>
                    </div>


                </footer>

            </div>
        </>
    );
};
