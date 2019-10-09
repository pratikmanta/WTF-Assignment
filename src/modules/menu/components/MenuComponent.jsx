import React from 'react';
import CourseContainer from '../../course/container/CourseContainer';


  const Menu = ({ handleClick }) => {
      
      return (
        <>
            <section className="mt-4">
            <div className="row border-top p-3 m-2">
                <div className="col d-flex justify-content-center">
                    <h3 className="pr-4">TODAYS SPECIAL</h3>
                </div>
                <div className="d-flex col align-items-center justify-content-center">
                    <h4><a href='/course'>See all</a></h4>
                </div>
            </div>
            <section className="border-bottom pb-3">
                <div className="row d-grid justify-content-center">
                    <img style={{cursor:'pointer'}} className="mr-3 ml-3 rounded-circle" src="/assets/veg.jpg" width="125" height="130" alt="dish" onClick={() => handleClick()}/>
                    <img style={{cursor:'pointer'}} className="mr-3 ml-3 rounded-circle" src="/assets/chicken.jpg" width="125" height="130" alt="dish" onClick={() => handleClick()}/>
                    <img style={{cursor:'pointer'}} className="mr-3 ml-3 rounded-circle" src="/assets/veg.jpg" width="125" height="130" alt="dish" onClick={() => handleClick()}/>
                    <img style={{cursor:'pointer'}} className="mr-3 ml-3 rounded-circle" src="/assets/chicken.jpg" width="125" height="130" alt="dish" onClick={() => handleClick()}/>
                </div>
            </section>
            </section>
            <section className="mt-4">
                <div className="container">
                    <div className="col d-flex justify-content-start">
                        <h3 className="pr-4">COURSES</h3>
                    </div> 
                    <CourseContainer />
                </div>
            </section>
        </>
      )}

export default Menu;