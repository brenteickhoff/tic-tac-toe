import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      gameOver: false,
      turn: 'X',
      board: [
        ['~', '~', '~'],
        ['~', '~', '~'],
        ['~', '~', '~']
      ],
    };
  }   

  reset () {
    this.setState({board: [
      ['~', '~', '~'],
      ['~', '~', '~'],
      ['~', '~', '~']
    ]});
    this.setState({gameOver: false});
  }
  gameIsOver () {
    let cell = this.state.board;
    console.log(cell)
    for (let i = 0; i < 3; i++) {
      if (cell[i][0] === cell[i][1] && cell[i][1] === cell[i][2] && cell[i][1] !== '~') {
        this.setState({winner: cell[i][0]});
        return true;
      }
      if (cell[0][i] === cell[1][i] && cell[1][i] === cell[2][i] && cell[2][i] !== '~') {
        this.setState({winner: cell[0][i]});
        return true;
      }
    }
    if (cell[0][0] === cell[1][1] && cell[1][1] === cell[2][2] && cell[2][2] !== '~') {
      this.setState({winner: cell[1][1]});
      return true;
    }
    if (cell[0][2] === cell[1][1] && cell[1][1] === cell[2][0] && cell[2][0] !== '~') {
      this.setState({winner: cell[1][1]});
      return true;
    }
  }
  clickHandler (e) {
    if (e.target.id === 'winner') {
      this.reset();
    } else if (this.state.gameOver === false) {
      let row = e.target.id.split('')[0];
      let col = e.target.id.split('')[1];
      if (this.state.board[row][col] === '~') {
        this.state.board[row][col] = this.state.turn;
        this.setState({turn: this.state.turn === 'X' ? 'O' : 'X'});
      }
      if (this.gameIsOver()) { 
        this.setState({gameOver: true});
      }
    }
  }
  render() {
    return (
      <div>
      <h2>Player Turn <button><h2>{ this.state.turn }</h2></button></h2>
   
        <table>
          <tbody>
            <tr>
              <td>
                <button id="00" onClick={ this.clickHandler.bind(this) }>
                  <h2 id="00">{ this.state.board[0][0] }</h2>
                </button>
              </td>
              <td>
                <button id="01" onClick={ this.clickHandler.bind(this) }>
                  <h2 id="01">{ this.state.board[0][1] }</h2>
                </button>
              </td>
              <td>
                <button id="02" onClick={ this.clickHandler.bind(this) }>
                  <h2 id="02">{ this.state.board[0][2] }</h2>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button id="10" onClick={ this.clickHandler.bind(this) }>
                  <h2 id="10">{ this.state.board[1][0] }</h2>
                </button>
              </td>
              <td>
                <button id="11" onClick={ this.clickHandler.bind(this) }>
                  <h2 id="11">{ this.state.board[1][1] }</h2>
                </button>
              </td>
              <td>
                <button id="12" onClick={ this.clickHandler.bind(this) }>
                  <h2 id="12">{ this.state.board[1][2] }</h2>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button id="20" onClick={ this.clickHandler.bind(this) }>
                  <h2 id="20">{ this.state.board[2][0] }</h2>
                </button>
              </td>
              <td>
                <button id="21" onClick={ this.clickHandler.bind(this) }>
                  <h2 id="21">{ this.state.board[2][1] }</h2>
                </button>
              </td>
              <td>
                <button id="22" onClick={ this.clickHandler.bind(this) }>
                  <h2 id="22">{ this.state.board[2][2] }</h2>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {this.state.gameOver === true ? <button><h2 id="winner" onClick={ this.clickHandler.bind(this) }>Winner is {this.state.winner}. Play again!</h2></button> : null}
      </div>
    );

  }
};

export default Game;