import React, { PureComponent } from 'react';
import Menu from '../components/MenuComponent'
import { withRouter } from 'react-router-dom'

class MenuContainer extends PureComponent<Props> {
   
   handleNavigation = () => {
     this.props.history.push("/course") 
   }

   render() {
      return (
      <Menu handleClick={this.handleNavigation}/>
      )
   }
}

export default withRouter(MenuContainer);