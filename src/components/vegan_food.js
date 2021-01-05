import React, {Component} from 'react';
import {GetVeanList} from '../actions';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import VeganListDisplay from './vegan_food_display';


class VeganListView extends Component {

    componentDidMount(){
        this.props.dispatch(GetVeanList())
        
    }
    render(){
        return(
            <React.Fragment>
                <VeganListDisplay prodvegandata={this.props.vegan.foodvegcat}></VeganListDisplay>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    return{
        vegan:state.vegan
    }
    
}

VeganListView.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(VeganListView);