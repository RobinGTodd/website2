import React from 'react';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';

import Navigation from '../Navbar/Navbar';

import Home from '../../Pages/Home';
import BlogPost from '../../Pages/BlogPost';
import About from '../../Pages/About';
import Portfolio from '../../Pages/Portfolio';
import PageTemplate from '../../Pages/PageTemplate';

import './App.scss';


function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/blogpost' element={<PageTemplate type={<BlogPost/>} typename='Blog Post'/>} />
              <Route path='/about' element={<PageTemplate type={<About/>} typename = 'About'/>} />
              <Route path='/portfolio' element={<PageTemplate type={<Portfolio/>} typename = 'Portfolio'/>} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {this.props.value}
//       </button>
//     );
//   }
// }
//
// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square value={i} />;
//   }
//
//   render() {
//     const status = 'Next player: X';
//
//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }
//
// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }
//
// // ========================================
//
// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );
