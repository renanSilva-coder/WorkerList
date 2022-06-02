import React from 'react';
import Header from './components/Header';
import { Grid, useMediaQuery } from '@mui/material';
import { workerReducer, queueReducer } from './reducer'
import TimeTrabalhador from './components/TimeTrabalhador';
import ListaTrabalhador from './components/ListaTrabalhador';
import AdicionaTrabalhador from './components/AdicionaTrabalhador';

export const WorkerContext = React.createContext({
  worker: {
    id: 'fa5bfe85-3d6f-48e6-b981-9db6098d2aac',
    name: 'Roberto',
    occupation: 'Cantor',
    thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shareicon.net%2Fuser-office-worker-businessman-people-690824&psig=AOvVaw17UUTzS9LyBA0zZLnT2J5-&ust=1654269948341000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMDKwvmJj_gCFQAAAAAdAAAAABAO',
    age: 111
  },
  isPlaying: false,
});

export default function App() {
  const telaGrande = useMediaQuery('(min-width:900px)');
  const initialWorker = React.useContext(WorkerContext);
  const [currentQueue, queueDispatch] = React.useReducer(queueReducer, []);
  const [currentWorker, workerDispatch] = React.useReducer(workerReducer, initialWorker);
  

  return (
    <WorkerContext.Provider value={{currentWorker, workerDispatch}}>
    <Header />
    <Grid container style={{marginTop: '80px'}}>
        <Grid item md={7} xs={12} >
          <AdicionaTrabalhador />
          <ListaTrabalhador queue={{ queueDispatch }} />
        </Grid>
        <Grid style={
            telaGrande ? 
            { position: 'fixed', width: '100%', right: 0, top: 80 } :
            { position: 'block', width: '100%', left: 10, bottom: 10 }
          }
          item md={5} xs={12}>
        <TimeTrabalhador queue={{currentQueue, queueDispatch}} />
        </Grid>
      </Grid>
    </WorkerContext.Provider>
  );
}