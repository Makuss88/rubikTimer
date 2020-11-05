import React, { Component } from 'react';
import { MIXING_COLOR } from '../../settings/settings'

class ResolveCubeComponent extends Component {

  componentDidMount() {
    const col = MIXING_COLOR;
    const canvas = this.refs.rubik;
    const ctx = canvas.getContext('2d');
    
    const drawCube = (x, y, w, color) => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, w, w);
    };
    
    const drawPaddle = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(120, 0, 130, 10);
      ctx.fillRect(120, 40, 130, 10);
      ctx.fillRect(120, 80, 130, 10);
      ctx.fillRect(0, 120, 480, 10);
      ctx.fillRect(0, 160, 480, 10);
      ctx.fillRect(0, 200, 480, 10);
      ctx.fillRect(0, 240, 480, 10);
      ctx.fillRect(120, 280, 130, 10);
      ctx.fillRect(120, 320, 130, 10);
      ctx.fillRect(120, 360, 130, 10);
    
      ctx.fillRect(0, 120, 10, 130);
      ctx.fillRect(40, 120, 10, 130);  
      ctx.fillRect(80, 120, 10, 130);
      ctx.fillRect(120, 0, 10, 360);
      ctx.fillRect(160, 0, 10, 360);  
      ctx.fillRect(200, 0, 10, 360);
      ctx.fillRect(240, 0, 10, 360);
      ctx.fillRect(280, 120, 10, 130);
      ctx.fillRect(320, 120, 10, 130);  
      ctx.fillRect(360, 120, 10, 130);
      ctx.fillRect(400, 120, 10, 130);
      ctx.fillRect(440, 120, 10, 130);  
      ctx.fillRect(480, 120, 10, 130);
    };
    
    const drawGame = (color) => {
    
      drawCube(130, 130, 30, color[0]); //white
      drawCube(170, 130, 30, color[1]);
      drawCube(210, 130, 30, color[2]);
      drawCube(210, 170, 30, color[3]);
      drawCube(210, 210, 30, color[4]);
      drawCube(170, 210, 30, color[5]);
      drawCube(130, 210, 30, color[6]);
      drawCube(130, 170, 30, color[7]);
      drawCube(170, 170, 30, color[8]);
    
      drawCube(130, 250, 30, color[9]); //green
      drawCube(170, 250, 30, color[10]);
      drawCube(210, 250, 30, color[11]);
      drawCube(210, 290, 30, color[12]);
      drawCube(210, 330, 30, color[13]);
      drawCube(170, 330, 30, color[14]);
      drawCube(130, 330, 30, color[15]);
      drawCube(130, 290, 30, color[16]);
      drawCube(170, 290, 30, color[17]);
      
      drawCube(10, 130, 30, color[18]); //orange
      drawCube(50, 130, 30, color[19]);
      drawCube(90, 130, 30, color[20]);
      drawCube(90, 170, 30, color[21]);
      drawCube(90, 210, 30, color[22]);
      drawCube(50, 210, 30, color[23]);
      drawCube(10, 210, 30, color[24]);
      drawCube(10, 170, 30, color[25]);
      drawCube(50, 170, 30, color[26]);
    
      drawCube(130, 10, 30, color[27]); //blue
      drawCube(170, 10, 30, color[28]);
      drawCube(210, 10, 30, color[29]);
      drawCube(210, 50, 30, color[30]);
      drawCube(210, 90, 30, color[31]);
      drawCube(170, 90, 30, color[32]);
      drawCube(130, 90, 30, color[33]);
      drawCube(130, 50, 30, color[34]);
      drawCube(170, 50, 30, color[35]);
      
      drawCube(250, 130, 30, color[36]); //red
      drawCube(290, 130, 30, color[37]);
      drawCube(330, 130, 30, color[38]);
      drawCube(330, 170, 30, color[39]);
      drawCube(330, 210, 30, color[40]);
      drawCube(290, 210, 30, color[41]);
      drawCube(250, 210, 30, color[42]);
      drawCube(250, 170, 30, color[43]);
      drawCube(290, 170, 30, color[44]);
    
      drawCube(370, 130, 30, color[45]); //yellow
      drawCube(410, 130, 30, color[46]);
      drawCube(450, 130, 30, color[47]);
      drawCube(450, 170, 30, color[48]);
      drawCube(450, 210, 30, color[49]);
      drawCube(410, 210, 30, color[50]);
      drawCube(370, 210, 30, color[51]);
      drawCube(370, 170, 30, color[52]);
      drawCube(410, 170, 30, color[53]);
    };
    
    const updateU = () => {
      const t = col[22];
      col[22] = col[11];
      col[11] = col[36];
      col[36] = col[33];
      col[33] = t;
      
      const t2 = col[21];
      col[21] = col[10];
      col[10] = col[43];
      col[43] = col[32];
      col[32] = t2;
    
      const t3 = col[20];
      col[20] = col[9];
      col[9] = col[42];
      col[42] = col[31];
      col[31] = t3;
    
      const t4 = col[6];
      col[6] = col[4];
      col[4] = col[2];
      col[2] = col[0];
      col[0] = t4;
    
      const t5 = col[7];
      col[7] = col[5];
      col[5] = col[3];
      col[3] = col[1];
      col[1] = t5;  
    };
    
    const updateR = () => {
      const t = col[51];
      col[51] = col[11];
      col[11] = col[2];
      col[2] = col[29];
      col[29] = t;
      
      const t2 = col[52];
      col[52] = col[12];
      col[12] = col[3];
      col[3] = col[30];
      col[30] = t2;
    
      const t3 = col[45];
      col[45] = col[13];
      col[13] = col[4];
      col[4] = col[31];
      col[31] = t3;
    
      const t4 = col[36];
      col[36] = col[38];
      col[38] = col[40];
      col[40] = col[42];
      col[42] = t4;
    
      const t5 = col[37];
      col[37] = col[39];
      col[39] = col[41];
      col[41] = col[43];
      col[43] = t5;  
    };
    
    const updateL = () => {
      const t = col[27];
      col[27] = col[0];
      col[0] = col[9];
      col[9] = col[49];
      col[49] = t;
      
      const t2 = col[34];
      col[34] = col[7];
      col[7] = col[16];
      col[16] = col[48];
      col[48] = t2;
    
      const t3 = col[33];
      col[33] = col[6];
      col[6] = col[15];
      col[15] = col[47];
      col[47] = t3;
    
      const t4 = col[18];
      col[18] = col[20];
      col[20] = col[22];
      col[22] = col[24];
      col[24] = t4;
    
      const t5 = col[19];
      col[19] = col[21];
      col[21] = col[23];
      col[23] = col[25];
      col[25] = t5;  
    };
    
    const updateD = () => {
      const t = col[27];
      col[27] = col[24];
      col[24] = col[13];
      col[13] = col[38];
      col[38] = t;
      
      const t2 = col[28];
      col[28] = col[25];
      col[25] = col[14];
      col[14] = col[39];
      col[39] = t2;
    
      const t3 = col[29];
      col[29] = col[18];
      col[18] = col[15];
      col[15] = col[40];
      col[40] = t3;
    
      const t4 = col[45];
      col[45] = col[47];
      col[47] = col[49];
      col[49] = col[51];
      col[51] = t4;
    
      const t5 = col[46];
      col[46] = col[48];
      col[48] = col[50];
      col[50] = col[52];
      col[52] = t5;  
    };
    
    const updateF = () => { 
      const t = col[24];
      col[24] = col[6];
      col[6] = col[42];
      col[42] = col[51];
      col[51] = t;
      
      const t2 = col[23];
      col[23] = col[5];
      col[5] = col[41];
      col[41] = col[50];
      col[50] = t2;
    
      const t3 = col[22];
      col[22] = col[4];
      col[4] = col[40];
      col[40] = col[49];
      col[49] = t3;
    
      const t4 = col[9];
      col[9] = col[11];
      col[11] = col[13];
      col[13] = col[15];
      col[15] = t4;
    
      const t5 = col[10];
      col[10] = col[12];
      col[12] = col[14];
      col[14] = col[16];
      col[16] = t5;  
    };
    
    const updateB = () => { 
      const t = col[18];
      col[18] = col[0];
      col[0] = col[36];
      col[36] = col[45];
      col[45] = t;
      
      const t2 = col[19];
      col[19] = col[1];
      col[1] = col[37];
      col[37] = col[46];
      col[46] = t2;
    
      const t3 = col[20];
      col[20] = col[2];
      col[2] = col[38];
      col[38] = col[47];
      col[47] = t3;
    
      const t4 = col[27];
      col[27] = col[33];
      col[33] = col[31];
      col[31] = col[29];
      col[29] = t4;
    
      const t5 = col[28];
      col[28] = col[34];
      col[34] = col[32];
      col[32] = col[30];
      col[30] = t5;  
    };
    
    const swap = () => {
      const move = ["U", "U2", "U'", "R", "R2", "R'", "D", "D2", "D'", "F", "F2", "F'", "B", "B2", "B'", "L", "L2", "L'"];
      const numberOfSwap = 15;
      let arrowMove = [];
      arrowMove[0] = move[Math.floor(Math.random() * move.length)];
      
      for (let i = 1; i < numberOfSwap; i++) {
        let oneMove = move[Math.floor(Math.random() * move.length)];
        if (oneMove[0] !== arrowMove[i-1][0]) {
          arrowMove[i] = oneMove;
        } else { 
          i--; 
        }
      };
      
      let resolveText = '';
      arrowMove.forEach(e => {
        resolveText += e + '-';
      });
      
      const solveText = document.querySelector('.txt-resolve');
      solveText.innerHTML = resolveText.slice(0,-1);
      
      return arrowMove
    };

    const resolve = () => {
      let swapCube = swap();
    
      swapCube.forEach(s => { // eslint-disable-next-line
        switch(s) {
          case "U":
            updateU(col);
            break;
          case "U2":
            updateU(col);
            updateU(col);
            break;
          case "U'": 
            updateU(col);
            updateU(col);
            updateU(col);
            break;
          case "R":  
            updateR(col);
            updateR(col);
            updateR(col);
            break;
          case "R2": 
            updateR(col);
            updateR(col);
            break;
          case "R'":  
            updateR(col);
            break;
          case "L":  
            updateL(col);
            updateL(col);
            updateL(col);
            break;
          case "L2": 
            updateL(col);
            updateL(col);
            break;
          case "L'": 
            updateL(col);
            break;
          case "D": 
            updateD(col);
            updateD(col);
            updateD(col);
            break;
          case "D2":
            updateD(col);
            updateD(col);
            break;
          case "D'":
            updateD(col);
            break;
          case "F": 
            updateF(col);
            updateF(col);
            updateF(col);
            break;
          case "F2": 
            updateF(col);
            updateF(col);
            break;
          case "F'": 
            updateF(col);
            break;
          case "B": 
            updateB(col);
            break;
          case "B2": 
            updateB(col);
            updateB(col);
            break;
          case "B'":
            updateB(col);
            updateB(col);
            updateB(col);
            break;       
        }
      });
      drawGame(col);
    };

    document.getElementById('btn-mixing').addEventListener('click', resolve);
    drawPaddle();
    drawGame(col);
  };

  render() {
    return ( 
      <div className='rubik-mixing'>
        <div> Rubik's Cube Mixer </div>
        <div className='txt-resolve'> Push button "MIX ME!"... </div>
        <canvas ref='rubik'  width='490px' height='370px'></canvas>
        <button id='btn-mixing' className='stopwatch-btn'> MIX ME!! </button>
      </div>
    );
  }
}

export default ResolveCubeComponent;