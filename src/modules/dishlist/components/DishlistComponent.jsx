import React from 'react';

const Dishlist = ({ handleClick, handleBack }) => {
    return (
        <>
            <div className="container mt-4">
                <div className="row" onClick={() => handleBack()}>
                    <h3><i className="fas fa-arrow-left ml-1 mr-3"></i></h3>
                    <h3>STARTERS</h3>
                </div>
                <div className="row ml-1 mt-2" style={{cursor:'pointer'}} onClick={() => handleClick()}>
                    <div className="border rounded shadow p-3 mb-4 bg-white">
                        <img src="/assets/chicken.jpg" width="150" height="100" alt="dish" />
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
                        <div className="row pl-1 mt-2 d-flex align-items-center">
                            <div className="col d-flex justify-content-start">
                                <i className="float-left fa fa-inr ml-1 mr-1"></i>
                                <h6 className="float-left">220</h6>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="row border rounded pt-2">
                                    <i className="fas fa-plus pl-3 pr-2"></i>
                                    <h6 className="pr-3 pl-2 ">Add</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ml-1 mt-2" style={{cursor:'pointer'}} onClick={() => handleClick()}>
                    <div className="border rounded shadow p-3 mb-4 bg-white">
                        <img src="/assets/veg.jpg" width="150" height="100" alt="dish" />
                    </div>
                    <div className="col">
                        <span>
                            <h4 className="ml-2">Veg Khorma</h4>
                        </span>
                        <div className=" ml-2">
                            <span className="row mx-auto">
                                <i className="far fa-star mr-1"></i>
                                <h6>4.6</h6>
                                <h6 className="ml-3">123 Ratings</h6>
                            </span>
                        </div>
                        <div className="ml-1">
                            <h6 className="p-1 border rounded d-inline">Indian</h6>
                        </div>
                        <div className="row pl-1 mt-2 d-flex align-items-center">
                            <div className="col d-flex justify-content-start">
                                <i className="float-left fa fa-inr ml-1 mr-1"></i>
                                <h6 className="float-left">220</h6>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="row border rounded pt-2">
                                    <i className="fas fa-plus pl-3 pr-2"></i>
                                    <h6 className="pr-3 pl-2 ">Add</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ml-1 mt-2" style={{cursor:'pointer'}} onClick={() => handleClick()}>
                    <div className="border rounded shadow p-3 mb-4 bg-white">
                        <img src="/assets/chicken.jpg" width="150" height="100" alt="dish" />
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
                        <div className="row pl-1 mt-2 d-flex align-items-center">
                            <div className="col d-flex justify-content-start">
                                <i className="float-left fa fa-inr ml-1 mr-1"></i>
                                <h6 className="float-left">220</h6>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="row border rounded pt-2">
                                    <i className="fas fa-plus pl-3 pr-2"></i>
                                    <h6 className="pr-3 pl-2 ">Add</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ml-1 mt-2" style={{cursor:'pointer'}} onClick={() => handleClick()}>
                    <div className="border rounded shadow p-3 mb-4 bg-white">
                        <img src="/assets/veg.jpg" width="150" height="100" alt="dish" />
                    </div>
                    <div className="col">
                        <span>
                            <h4 className="ml-2">Veg Khorma</h4>
                        </span>
                        <div className=" ml-2">
                            <span className="row mx-auto">
                                <i className="far fa-star mr-1"></i>
                                <h6>4.6</h6>
                                <h6 className="ml-3">123 Ratings</h6>
                            </span>
                        </div>
                        <div className="ml-1">
                            <h6 className="p-1 border rounded d-inline">Indian</h6>
                        </div>
                        <div className="row pl-1 mt-2 d-flex align-items-center">
                            <div className="col d-flex justify-content-start">
                                <i className="float-left fa fa-inr ml-1 mr-1"></i>
                                <h6 className="float-left">220</h6>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="row border rounded pt-2">
                                    <i className="fas fa-plus pl-3 pr-2"></i>
                                    <h6 className="pr-3 pl-2 ">Add</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dishlist