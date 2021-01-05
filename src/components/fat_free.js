import React, {Component} from 'react';
import {GetFoodList} from '../actions';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import ListDisplay from './fat_free_display';


class ListView extends Component {

    componentDidMount(){
        this.props.dispatch(GetFoodList())
        
    }
    render(){
        return(
            <React.Fragment>
                <ListDisplay proddata={this.props.food.foodcat}></ListDisplay>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    return{
        food:state.food
    }
    
}

ListView.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(ListView);