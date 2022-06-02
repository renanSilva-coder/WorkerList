import React from 'react';
import { WorkerContext } from '../App';
import { useSubscription } from '@apollo/client';
import { GET_WORKERS } from '../graphql/subscription';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';  


export default function ListaTrabalhador({ queue }){
    const { data, loading, error } = useSubscription(GET_WORKERS);

    if(loading) {
        return <div>Carregando...</div>
    }

    if(error) {
        console.log(error);
        return <div>ERRO</div>;
    }

    function Trabalhador({trabalhador}){
        const {thumbnail, name, occupation, age} = trabalhador;
        const [isCurrentWorker, setIsCurrentWorker] = React.useState(false);
        const { currentWorker, workerDispatch } = React.useContext(WorkerContext);

        React.useEffect(()=>{
            setIsCurrentWorker(currentWorker.worker.id === trabalhador.id)
        },[currentWorker.worker.id, trabalhador.id])

        function handleAddQueue(){
            queue.queueDispatch({ type: "ADD_QUEUE", payload: { trabalhador } });
        }

        return (
            <Card style={{ display:'flex', alignItems: 'center', margin: '10px' }}>
                <CardMedia image={thumbnail} style={{ objectFit: 'cover', width: '140px', height:'140px' }}/>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <CardContent>
                        <Typography variant='h5' component="h2">{name}</Typography>
                        <Typography variant='subtitle1' component="h3">{occupation}</Typography>
                        <Typography variant='subtitle1' component="h3">{age} anos</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton onClick={handleAddQueue}>
                            <PlaylistAddIcon color="primary" fontSize='large'/>
                        </IconButton>
                    </CardActions>
                </div>
            </Card>
        );
    }

    return(
        <div style={{marginLeft: 150, marginTop: 20}}>
            {data.functionary.map((trabalhador) => {
                return(<Trabalhador key={trabalhador.id} trabalhador={trabalhador} />)
            })}
        </div>
    )
}