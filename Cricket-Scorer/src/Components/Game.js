
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square"
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}

// class Square extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null
//         }
//     }
//     render() {
//         return (
//             <button className="square"
//                     onClick={() => this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            innings: new Innings({
                teamName: "India",
                overs: 5,
                striker: "P1",
                nonStriker: "P2",
                bowler: "B1"
            })
        };
    }

    handleClick(i) {
        let innings = this.state.innings;
        innings.faceDelivery({ runs: i })
        this.setState({ innings: innings })
    }

    renderSquare(i) {
        return <Square
            value={i}
            onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        return (
            <div>
                <div> Current Score: {this.state.innings.currentScore}</div>
                <div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Runs</th>
                            <th>Balls</th>
                            <th>4s</th>
                            <th>6s</th>
                            <th>SR</th>
                        </tr>
                        <tr>
                            <td>{this.state.innings.striker}</td>
                            <td>{this.state.innings.playerScores[this.state.innings.striker].runs}</td>
                            <td>{this.state.innings.playerScores[this.state.innings.striker].balls}</td>
                            <td>{this.state.innings.playerScores[this.state.innings.striker].fours}</td>
                            <td>{this.state.innings.playerScores[this.state.innings.striker].sixes}</td>
                            <td>{this.state.innings.playerScores[this.state.innings.striker].strikeRate}</td>
                        </tr>
                        <tr>
                            <td>{this.state.innings.nonStriker}</td>
                            <td>{this.state.innings.playerScores[this.state.innings.nonStriker].runs}</td>
                            <td>{this.state.innings.playerScores[this.state.innings.nonStriker].balls}</td>
                            <td>{this.state.innings.playerScores[this.state.innings.nonStriker].fours}</td>
                            <td>{this.state.innings.playerScores[this.state.innings.nonStriker].sixes}</td>
                            <td>{this.state.innings.playerScores[this.state.innings.nonStriker].strikeRate}</td>
                        </tr>
                    </table>

                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Runs</th>
                            <th>Balls</th>
                        </tr>
                        <tr>
                            <td>{this.state.innings.bowler}</td>
                            <td>{this.state.innings.bowlerScores[this.state.innings.bowler].runs}</td>
                            <td>{this.state.innings.bowlerScores[this.state.innings.bowler].balls}</td>
                        </tr>
                    </table>
                </div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

class Innings {
    constructor(props) {
        this.teamName = props.teamName;
        this.maxOvers = props.overs;
        this.striker = props.striker;
        this.nonStriker = props.nonStriker;
        this.bowler = props.bowler;
        this.currentScore = 0;
        this.currentWicket = 0;
        this.currentBalls = 0;
        this.playerScores = {};
        this.playerScores[this.striker] = new BattingScore({ name: this.striker });
        this.playerScores[this.nonStriker] = new BattingScore({ name: this.nonStriker });
        this.bowlerScores = {};
        this.bowlerScores[this.bowler] = new BowlingScore({ name: this.bowler });
    }

    faceDelivery(delivery) {
        this.playerScores[this.striker].updateScore(delivery);
        this.currentScore += delivery.runs;
        this.currentBalls++;
        if (delivery.runs % 2 !== 0) {
            let previousStriker = this.striker;
            this.striker = this.nonStriker;
            this.nonStriker = previousStriker;
        }
        this.bowlerScores[this.bowler].bowlDelivery(delivery);
    }

    printCurrentScore() {
        this.playerScores[this.striker].printScore();
        this.playerScores[this.nonStriker].printScore();
        this.bowlerScores[this.bowler].printScore();
    }

}

class BowlingScore {

    constructor(props) {
        this.balls = 0;
        this.runs = 0;
        this.wickets = 0;
        this.name = props.name;
    }

    bowlDelivery(delivery) {
        this.balls++;
        this.runs += delivery.runs;
    }

    printScore() {
        for (let x in this) {
            console.log(x + " : " + this[x]);
        }
    }

}

class BattingScore {
    constructor(props) {
        this.runs = 0;
        this.balls = 0;
        this.fours = 0;
        this.sixes = 0;
        this.strikeRate = 0;
        this.name = props.name;
    }

    updateScore(delivery) {
        this.runs += delivery.runs;
        this.balls++;
        if (delivery.runs > 0) {
            if (delivery.runs === 4) {
                this.fours++;
            }
            if (delivery.runs === 6) {
                this.sixes++;
            }
            if (this.runs > 0 && this.balls > 0) {
                this.strikeRate = (this.runs / this.balls) * 100;
            }
        }
    }

    printScore() {
        for (let x in this) {
            console.log(x + " : " + this[x]);
        }
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
