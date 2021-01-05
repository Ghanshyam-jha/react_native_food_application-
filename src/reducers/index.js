import { combineReducers} from 'redux';
import FoodReducers from './food_reducer';
import FoodVeganReducers from './vegan_reducer';

const rootReducer = combineReducers({
    food : FoodReducers,
    vegan: FoodVeganReducers
})

export default rootReducer