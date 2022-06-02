import React from 'react';
import { Delete } from '@mui/icons-material';
import { Avatar, IconButton, Typography, InputLabel } from '@mui/material';

export default function TimeTrabalhador({ queue }){
    function TrabalhadorNoTime({trabalhador}){
        const { thumbnail, name, occupation } = trabalhador;
        
        function handleRemoveQueue(){
            queue.queueDispatch({ type: 'REMOVE_QUEUE', payload: { trabalhador } })
        }

        return (
            <div style={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: '50px auto 50px', alignItems: 'center', margin: '10px' }}>
                <Avatar src={thumbnail} alt="Imagem da pessoa" style={{ width:'40px', height: '40px'}} />
                <div>
                    <Typography variant="subtitle1">{name}</Typography>
                    <Typography variant='body2'>{occupation}</Typography>
                </div>
                <IconButton onClick={handleRemoveQueue}><Delete color="error"/></IconButton>
            </div>
        );
    }

    return(
        <div>
            <InputLabel style={{ fontWeight: 'bold', fontSize: 40, marginTop: 50, color: 'cornflowerblue' }}>Time Atual de Trabalhadores</InputLabel>
            <Typography>Quantidade de Pessoas ({ queue.currentQueue.length })</Typography>
            {queue.currentQueue.map((trabalhador, index) => {
                return(<TrabalhadorNoTime key={index} trabalhador={trabalhador} />)
            })}
        </div>
    )
}