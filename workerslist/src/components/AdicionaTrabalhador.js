import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_WORKER } from '../graphql/mutation';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const DEFAULT_WORKER = {
    id: "",
    occupation: "",
    name: "",
    age: 17,
    thumbnail: ""
};

export default function AdicionaTrabalhador(){
    const [dialog, setDialog] = React.useState(false);
    const [worker, setWorker] = React.useState(DEFAULT_WORKER);
    const [addWorker] = useMutation(ADD_WORKER);

    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
   
    function handleEditDataWorker(event){
        const { name, value } = event.target;
        setWorker(prevWorker => ({
            ...prevWorker,
            [name] : value
        }));
    }

    async function handleAddWorker(){
        const { occupation, name, age, thumbnail } = worker;

        try{
            await addWorker({
                variables: {
                    name: name.length > 0 ? name : null,
                    age: age > 16 ? age : null,
                    occupation: occupation.length > 0 ? occupation : null,
                    thumbnail: thumbnail.length > 0 ? thumbnail : null
                }
            });
            setDialog(false);
            setWorker(DEFAULT_WORKER);
        }catch(e){
            alert(`Não foi possível adicionar a trabalhador (${e})`);
        }
    }

    return(
        <>
            <Dialog open={dialog}>
                <DialogTitle>Adicionar Trabalhador</DialogTitle>
                <DialogContent style={{ textAlign: 'center' }}>
                    <TextField onChange={handleEditDataWorker} style={{ marginTop: '10px'}} variant="outlined" value={worker.name} name="name" label="Nome do Trabalhador" fullWidth />
                    <TextField onChange={handleEditDataWorker} style={{ marginTop: '10px'}} variant="outlined" value={worker.age} type="number" name="age" label="Idade" fullWidth/>
                    <TextField onChange={handleEditDataWorker} style={{ marginTop: '10px'}} variant="outlined" value={worker.occupation} name="occupation" label="Profissão" fullWidth/>
                    <TextField onChange={handleEditDataWorker} style={{ marginTop: '10px'}} variant="outlined" value={worker.thumbnail} name="thumbnail" label="Imagem" fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={()=>setDialog(false)} color="primary">Cancelar</Button>
                    <Button variant='contained' onClick={handleAddWorker} color="primary">Salvar</Button>
                </DialogActions>
            </Dialog>

            <div style={{ display: 'flex', alignItems: 'center' }} >
                <Button style={{borderRadius: '100%', marginLeft: 50, marginTop: 20}} >
                    <AddReactionIcon fontSize="large" style={{fontSize: 100}} onClick={()=>setDialog(true)} variant="contained" color="primary"></AddReactionIcon>
                </Button>
            </div> 
        </>
    )
}