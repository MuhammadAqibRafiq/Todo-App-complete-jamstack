import React, { useState } from 'react';
import * as containerStyles from './../style/card.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPlus } from "@fortawesome/free-solid-svg-icons";


function FORM({ loadLinks }) {

    const [item, setItem] = useState('');

    const resetForm = () => {
        setItem('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { item };
        if (!item) {
            toast.error("Item is empty.", { autoClose: 4000, });
        }
        else {
            try {
                const res = await fetch('/.netlify/functions/createLink', {
                    method: 'POST',
                    body: JSON.stringify(body),
                });
                toast.success("Item Succesfully added.", { position: "top-center", autoClose: 4000, });
                resetForm();
                loadLinks();
            } catch (error) { console.error(error); }
        }
    };

    return (

            <div className="card-body mb-4 mt-3">
                   
                    <div className='d-flex justify-content-between' >

                        <input className="form-control"  placeholder='✍ Add Items...' value={item} onChange={(e) => setItem(e.target.value)}  />
                        <button className="btn" title='add' onClick={handleSubmit}><FontAwesomeIcon color='white' icon={faPlus} size='1x'/></button>
                     
                    </div>

                <ToastContainer />
            </div>

    )
}

export default FORM;

