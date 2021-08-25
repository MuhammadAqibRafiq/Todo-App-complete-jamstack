import React from "react";
// import * as containerStyles from './../style/card.module.css'
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function List({ links, loadLinks }) {

    return (
        <>

            <div className='list-main'>

                    <Row xs={1} md={1} className="g-3" >
                        {links && links.map((elem, ind) => {

                            return <div key={ind}>

                                <Col >
                                    <Card bg='light' >
                                        <div className='card-header d-flex justify-content-between' >
                                        <div  style={{ textTransform: 'uppercase'}}>{elem.item}</div>
                                            <span >
                                            <FontAwesomeIcon color='#FF0000' icon={faTrash} size='1x'
                                            title='Delete'
                                                style={{ cursor: "pointer" }}
                                                onClick={async () => {
                                                    const id = elem._id;
                                                    try {
                                                        await fetch('/.netlify/functions/deleteLink', {
                                                            method: 'DELETE',
                                                            body: JSON.stringify({ id }),
                                                        });
                                                        toast.info("Deleted Succesfully", {
                                                            autoClose: 4000,
                                                        });
                                                        loadLinks();
                                                        // console.log(id)
                                                    } catch (error) {
                                                        console.error('LIST ERROR', error);
                                                    }
                                                }} />
                                            <ToastContainer />
                                            </span>
                                        </div>
                                    </Card>
                                </Col>

                            </div>
                        })
                        }

                    </Row>
            </div>
        </>
    );

}

export default List;

