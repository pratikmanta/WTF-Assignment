import React from 'react';
import { withRouter } from 'react-router-dom'
import Course from '../components/CourseComponent'

class CourseContainer extends React.Component {

   handleNavigation = () => {
      this.props.history.push("/course") 
    }
 
   render() {
      return (
         <Course handleClick={this.handleNavigation}/>
      )
   }
}

export default withRouter(CourseContainer)