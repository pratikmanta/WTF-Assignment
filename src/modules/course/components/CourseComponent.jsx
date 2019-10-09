import React from 'react'



const Course = ({ handleClick }) => {
    return (
    <div className="card-columns">
        <button className="card p-3 shadow p-3 mb-5 bg-white rounded" onClick={() => handleClick()} >
            <div className="row p-2 d-flex align-items-center">
                <div className="col">
                    <img className="card-img-top" src="/assets/chicken.jpg" width="100%" alt="dish"/>
                </div>
                <div className="col">
                    <h5 className="card-title">Starters</h5> 
                </div>
            </div>
        </button>
        <button className="card p-3 shadow p-3 mb-5 bg-white rounded" onClick={() => handleClick()}>
            <div className="row p-2 d-flex align-items-center">
                <div className="col">
                    <img className="card-img-top" src="/assets/chicken.jpg" width="100%" alt="dish"/>
                </div>
                <div className="col ">
                    <h5 className="card-title">Main Course</h5> 
                </div>
            </div>
        </button>
        <button className="card p-3 shadow p-3 mb-5 bg-white rounded" onClick={() => handleClick()} >
            <div className="row p-2 d-flex align-items-center">
                <div className="col">
                    <img className="card-img-top" src="/assets/chicken.jpg" width="100%" alt="dish"/>
                </div>
                <div className="col">
                    <h5 className="card-title">Beverages</h5> 
                </div>
            </div>
        </button>
        <button className="card p-3 shadow p-3 mb-5 bg-white rounded" onClick={() => handleClick()} >
            <div className="row p-2 align-items-center">
                <div className="col">
                    <img className="card-img-top" src="/assets/chicken.jpg" width="100%" alt="dish"/>
                </div>
                <div className="col">
                    <h5 className="card-title">Deserts</h5> 
                </div>
            </div>
        </button>
        <button className="card p-3 shadow p-3 mb-5 bg-white rounded" onClick={() => handleClick()} >
            <div className="row p-2 align-items-center">
                <div className="col">
                    <img className="card-img-top" src="/assets/chicken.jpg" width="100%" alt="dish"/>
                </div>
                <div className="col">
                    <h5 className="card-title">Juice</h5> 
                </div>
            </div>
        </button>
    </div>
    )
}

export default Course;