import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
import firebase from 'firebase';

const useStyles = makeStyles({

});

function App() {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState(null);
  
  useEffect(() => {
    firebase.firestore().collection('notes').onSnapshot(serverUpdate =>{
      const notes = serverUpdate.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });
      setNotes(cur => notes);
      console.log(notes);
    });
    
  }, []);
  

  return (
    <Grid className="App">
         
    </Grid>
  );
}

export default App;
