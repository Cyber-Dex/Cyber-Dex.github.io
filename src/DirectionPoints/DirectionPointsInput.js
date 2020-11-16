import React, { Component } from 'react'

class DirectionPointsInput extends Component
{
    render() {
        return (
            <form>
                <input className={'std-inp std-dir-inp'} onChange={this.props.change} type={'text'} name={'PX'} placeholder={'Vložte X přímky p'} />
                <input className={'std-inp std-dir-inp'} onChange={this.props.change} type={'text'} name={'PY'} placeholder={'Vložte Y přímky p'} />
                <input className={'std-inp std-dir-inp'} onChange={this.props.change} type={'text'} name={'QX'} placeholder={'Vložte X přímky q'} />
                <input className={'std-inp std-dir-inp'} onChange={this.props.change} type={'text'} name={'QY'} placeholder={'Vložte Y přímky q'} />
            </form>
        )
    }
}

export default DirectionPointsInput;