import React, { Component } from 'react'

class DirectionPointsCalc extends Component
{
    state = {
        PX1 : 1,
        PY1 : 1,
        QX1 : 1,
        QY1 : 1
    }

    handlePointsChange = (e) => {
        if ( e.target.name === 'PX1') return this.setState({ PX1 : parseInt(e.target.value) })
        if ( e.target.name === 'PY1') return this.setState({ PY1 : parseInt(e.target.value) })
        if ( e.target.name === 'QX1') return this.setState({ QX1 : parseInt(e.target.value) })
        if ( e.target.name === 'QY1') return this.setState({ QY1 : parseInt(e.target.value) })
    }

    calculateDirectionVector = (x, y) =>
    {
        return [x,y];
    }

    calculateDifference = (VectorP, VectorQ) =>
    {
        if( (( VectorQ[0] / VectorP[0]) * VectorP[1] ) === VectorQ[1] ) return this.calculateFeedback(VectorP, VectorQ);
        else return 'Rozdílné';
    }

    calculatePoints = (VectorP, VectorQ) => {
        const A = [this.state.PX1, this.state.PY1]
        const B = [this.state.QX1, this.state.QY1]
        if ( ((this.state.QX1-(A[0])) / this.props.QX).toFixed(2) === (this.state.QY1-(A[1]) / this.props.QY).toFixed(2) ) return 'Různoběžné' + 'S1: '+((this.state.QX1-(A[0])) / this.props.QX) + ' S2:' + ((this.state.QY1-(A[1]) / this.props.QY));
        else return 'Rovnoběžné' + 'S1: '+((this.state.QX1-(A[0])) / this.props.QX) + ' S2:' + ((this.state.QY1-(A[1]) / this.props.QY));
    }

    calculateFeedback = (VectorP, VectorQ) =>
    {
        return (
            <div>
                <h3>Jsou shodné, vložte další informace pro zjištění detailů</h3>
                <form>
                    <input type={'text'} name={'PX1'} onChange={this.handlePointsChange} className={'std-inp std-calc'} placeholder={'Vložte první hodnotu bodu X přímky p'} />
                    <input type={'text'} name={'PY1'} onChange={this.handlePointsChange} className={'std-inp std-calc'} placeholder={'Vložte první hodnotu bodu Y přímky p'} />
                    <input type={'text'} name={'QX1'} onChange={this.handlePointsChange} className={'std-inp std-calc'} placeholder={'Vložte první hodnotu bodu x přímky q'} />
                    <input type={'text'} name={'QY1'} onChange={this.handlePointsChange} className={'std-inp std-calc'} placeholder={'Vložte první hodnotu bodu Y přímky q'} />
                </form>
                {this.calculatePoints(VectorP, VectorQ)}
            </div>
        )
    }

    render() {
        return (
            <div>
                <h3>{this.calculateDifference(this.calculateDirectionVector(this.props.PX, this.props.PY), this.calculateDirectionVector(this.props.QX, this.props.QY))}</h3>
            </div>
        );
    }
}

export default DirectionPointsCalc;