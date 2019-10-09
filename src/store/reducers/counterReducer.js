import { INCREMENT, DECREMENT } from '../actions/actions'

const INITIAL_STATE = {
  count: 0,
}

const handleChange = (state, change) => {
  const { count } = state;
  console.log(count)
    return ({
      count: count + change,
    })
}

export default function counter(state = INITIAL_STATE, action) {
  switch(action.type) {
    case INCREMENT:
      return handleChange(state, 1);
    
    case DECREMENT:
      return handleChange(state, -1);
    
    default:
      return state;
  }
}