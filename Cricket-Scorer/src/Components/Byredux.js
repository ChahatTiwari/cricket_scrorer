import React, { Component } from 'react'
import { connect} from 'react-redux'
import { actionCreators } from '../State'
import { bindActionCreators } from 'redux'


class Byredux extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const amount = this.props.amount
        console.log("amount");
        // const dispatch = useDispatch();
        // const action = bindActionCreators(actionCreators, dispatch);
        // const amount = useSelector(state => state.amount)
        return (
            <div>
                <button disabled={amount <= 0 && amount < 100} onClick={() => { this.props.action.withdrawMoney(100) }}>-</button>
                <button onClick={() => { this.props.action.depositMoney(100) }}>+</button>
                <p>{amount}</p>
                <p>this is </p>
            </div>
        )
    }
}
// const amount = useSelector(state => state.amount);
const mapStateToProps = state => ({
    amount: state.amount
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(actionCreators, dispatch)
})

// const mapDispatchToProps = (dispatch) => ({
//     withdrawMoney,depositMoney,
//     action: action
// });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Byredux);