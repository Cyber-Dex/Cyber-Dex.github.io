import React, { Component } from 'react'
/* Direction Points Handling */
import DirectionPointsInput from './DirectionPoints/DirectionPointsInput'
import DirectionPointsCalc from './DirectionPoints/DirectionPointsCalc'
import DirectionPointsDraw from './DirectionPoints/DirectionPointsDraw'

class App extends Component
{

  state = {
      PX : 1,
      PY : 1,
      QX : 1,
      QY : 1
  }

  handleDirectionPointsChange = (e) =>
  {
    if( e.target.name === "PX" ) this.setState({ PX : parseInt(e.target.value) });
    if( e.target.name === "PY" ) this.setState({ PY : parseInt(e.target.value) });
    if( e.target.name === "QX" ) this.setState({ QX : parseInt(e.target.value) });
    if( e.target.name === "QY" ) this.setState({ QY : parseInt(e.target.value) });
  }
  render() {
    return (
        <div>
            <header></header>
          <main>
            <section>
              <div>
                <DirectionPointsInput change={ this.handleDirectionPointsChange } />
              </div>
              <div>
                <DirectionPointsCalc PX={this.state.PX} PY={this.state.PY} QX={this.state.QX} QY={this.state.QY} />
              </div>
              <div>
                <DirectionPointsDraw PX={this.state.PX} PY={this.state.PY} QX={this.state.QX} QY={this.state.QY} />
              </div>
            </section>
          </main>
        </div>
    )
  }
}

export default App;
