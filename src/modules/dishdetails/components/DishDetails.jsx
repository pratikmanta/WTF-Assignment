import React from 'react';

const DishDetails = ({ increment, decrement, count, handleBack }) => {
    return (
        <>
            <div className="container mt-4">
                <div className="row" onClick={() => handleBack()}>
                    <h3><i className="fas fa-arrow-left ml-1 mr-3"></i></h3>
                    <h3>ADD TO MY PLATE</h3>
                </div>
                <div className="row ml-1 mt-2">
                    <div className="border rounded shadow p-3 mb-4 bg-white">
                        <img className="border rounded" src="/assets/chicken.jpg" alt="dish" width="150" height="100" />
                    </div>
                    <div className="col">
                        <span>
                            <h4 className="ml-2">Chicken Drumstik</h4>
                        </span>
                        <div className=" ml-2">
                            <span className="row mx-auto">
                                <i className="far fa-star mr-1"></i>
                                <h6>4.6</h6>
                                <h6 className="ml-3">123 Ratings</h6>
                            </span>
                        </div>
                        <div className="ml-1">
                            <h6 className="p-1 border rounded d-inline">Chinese</h6>
                        </div>
                        <div className="row pl-2 mt-2 d-flex align-items-center">
                            <div className="col d-flex justify-content-start">
                                <i className="fa fa-inr mr-1"></i>
                                <h6>220</h6>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <i onClick={decrement} style={{cursor:'pointer'}} className="d-flex align-self-center p-2 border fas fa-minus"></i>
                                <h5 className="p-3">{count}</h5>
                                <i onClick={increment} style={{cursor:'pointer'}} className=" d-flex align-self-center p-2 border fas fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ml-2 bg-warning p-2 mt-2 mb-3">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae rerum unde it
                        enetur doloremque modi e
                        ligendi nostrum! Nam saepe corrupti natus inci
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae rerum unde it
                        enetur doloremque modi e
                        ligendi nostrum! Nam saepe corrupti natus inciLorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae rerum unde it
                        enetur doloremque modi e
                        ncidunt dignissimos pariatur aliquid sunt quos.
                    </p>
                </div>
                <div className="row pt-2">
                    <div className="col ml-2 form-group">
                        <label htmlFor="note"><h5>Note to Chef</h5></label>
                        <textarea className="form-control" placeholder="Write your preference here" rows="6" id="note"></textarea>
                    </div>
                </div>
                <div className=" row pt-2 ml-2 btn btn-primary btn-block">
                    <h6>Add to my plate</h6>
                </div>
            </div>
        </>
    )
}

export default DishDetails