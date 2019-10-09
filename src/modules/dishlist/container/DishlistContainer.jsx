import React from 'react';
import Dishlist from '../components/DishlistComponent'

class DishlistContainer extends React.Component {
   handleNavigation = () => {
      this.props.history.push('/details')
   }
   handleBack = () => {
      this.props.history.goBack()
   }
   render() {
      return (
       <Dishlist handleClick={this.handleNavigation} handleBack={this.handleBack}/>
      )
   }
}

export default DishlistContainer