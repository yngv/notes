import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header"
import Form from "./components/Form"
import NoteContainer from "./components/NoteContainer"
import Detail from "./components/Detail"

function App() {

  const [inputText, setInputText] = useState("")
  const [notes, setNotes] = useState([
    {
      id: Math.random() * 1000,
      title: "First title",
      content: "some content inside"
    },
    {
      id: Math.random() * 1000,
      title: "Second title",
      content: "more content zzzzzzzzzzzzzzzzzzzzzzz"
    }
  ])

  return (
    <Router>

      <Header />

      <Switch>

        <Route exact path="/">
          <NoteContainer array={notes} />
        </Route>

        <Route exact path="/add">
          <Form text={inputText} setInputText={setInputText} notes={notes} setNotes={setNotes}></Form>
        </Route>

        <Route path="/detail/:id" >
          <Detail notes={notes} />
        </Route>

      </Switch>

    </Router>
  );
}



export default App;
