import { Color, PieceSymbol, Square } from 'chess.js';
import React from 'react'

const ChessBoard = ({board}: {
 board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
} | null)[][]
}) => {
  return <div className='text-white-200'>
      {board.map((row,i) => {
        return <div key={i} className='flex '>
            {row.map((square, j) => {
               return <div key={j} className={`w-16 h-16 ${(i+j)%2 === 0? 'bg-green-500': 'bg-white' }`}>
                {square && <div className={`square ${square.color}-${square.type}`}>
                    {square.type}
                </div>}
                </div>
      })}
          </div>
        
      })}
    </div>
  
}

export default ChessBoard