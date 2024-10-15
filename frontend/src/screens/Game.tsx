import React from 'react';

export const Games = () => {
    return <div className='justify-center-flex'>
       <div className='pt-8 max-w-screen-lg'>
                <div>
                        <ChessBoard></ChessBoard>
                </div>
                <div>
                    <button>Play</button>
                </div>
       </div>
    </div>
}