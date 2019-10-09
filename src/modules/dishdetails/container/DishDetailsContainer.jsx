import React from 'react';
import { connect } from 'react-redux';
import DishDetails from '../components/DishDetails'
import { increaseCount, decreaseCount } from '../../../store/actions/actions';

class DishDetailsContainer extends React.Component<Props> {
   increment = () => {
      this.props.dispatch(increaseCount())
   }

   decrement = () => {
      this.props.dispatch(decreaseCount())
   }

   handleBack = () => {
      this.props.history.goBack()
   }

   render(){
      return (
       <DishDetails 
         increment={this.increment} 
         decrement={this.decrement}
         count={this.props.count}
         handleBack={this.handleBack}
      />
      )
   }
}

const mapStateToProps = (state) => {
   return {
     count: state.counter.count
   };
 }

export default connect(mapStateToProps)(DishDetailsContainer)