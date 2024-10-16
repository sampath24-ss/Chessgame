import React, { useEffect, useState } from 'react';
import ChessBoard from '../components/ChessBoard';
import Button from '../components/Button';
import { useSocket } from '../hooks/useSockets';
import {Chess} from 'chess.js';

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

export const Games = () => {
    const socket = useSocket();
    const [chess,setChess] = useState(new Chess());
    const [board, setBoard] = useState(chess.board());
    

    useEffect(() => {
        if(!socket){
            return;
        }
        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log(message);
            switch (message.type) {
                case INIT_GAME:
                    setChess(new Chess());
                    setBoard(chess.board());
                    break;
                case MOVE:
                    const move = message.payload;
                    chess.move(move);
                    setBoard(chess.board());
                    break;
                case GAME_OVER:
                    break;
                default:
                    break;
            }
        }
    }, [socket]);
    if(!socket) return <div>
        Connecting...
    </div>
    return <div className='justify-center-flex'>
       <div className='pt-8 max-w-screen-lg w-full'>
                <div className='grid grid-cols-6 gap-4 w-full '>
                        <div className='col-span-4 w-full flex justify-center'>
                        <ChessBoard board={board}></ChessBoard>
                        </div>
                        
               
                <div className='col-span-2 bg-green-200 w-full'>
                  <Button onClick={() => {
                    socket.send(JSON.stringify({
                        type: INIT_GAME,
                        
                    }))
                  }}>
                    Play
                  </Button>
                </div>
                </div>
       </div>
    </div>
}