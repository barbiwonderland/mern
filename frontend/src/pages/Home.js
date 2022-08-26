import React, { useState } from 'react';
import home from "./home.css";
import { AddOrEdit } from "../components/AddOrEdit";
export const Home = () =>
{
    const [edit, setEdit] = useState(false);
    console.log(edit);
    return (
        <>
            <div className="backgroundHome text-center ">
                <h3 className='text-center text-white border-bottom pt-3'> <span>¡Bienvenido!</span></h3>
                <button type="button" className=" mt-5 btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                    Agregar usuario
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className=' mx-auto'>{edit ? "Editar Usuario" : "Nuevo Usuario"}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>

                            </div>
                            <div className="modal-body">
                                <AddOrEdit edit={edit} />
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
