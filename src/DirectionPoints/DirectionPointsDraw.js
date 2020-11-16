import React, { Component } from 'react'

class DirectionPointsDraw extends Component
{
    render() {
        return (
            <div>
                <h5>Násobek 't' přímky p, bodu X: {this.props.PX}</h5>
                <h5>Násobek 't' přímky p, bodu Y: {this.props.PY}</h5>
                <h5>Násobek 't' přímky q, bodu X: {this.props.QX}</h5>
                <h5>Násobek 't' přímky q, bodu Y: {this.props.QY}</h5>
            </div>
        )
    }
}

export default DirectionPointsDraw;