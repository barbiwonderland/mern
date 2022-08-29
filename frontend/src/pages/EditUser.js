import React from 'react';
import { FormAddOrEditUsers } from '../components/FormAddOrEditUsers';

export const EditUser = ({ edit }) =>
{
    return (
        <>
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
                            <FormAddOrEditUsers edit={edit} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
