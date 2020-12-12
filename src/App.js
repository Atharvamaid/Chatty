import logo from './logo.svg';
import './App.css';
import {auth, firestore} from './Firebase/firebase';
import {useEffect, useState} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'

function App() {
  const [value, setValue] = useState("");

  const onInputChange = (e) => {
    setValue(e.target.value);
  }
  const onFormSubmit = (e) => {
    e.preventDefault();
    const msgRef = firestore.collection("Users").add({
      "Name" : value
    })
    setValue("");
  }
  return (
    <div className="container">
      <Form onSubmit={onFormSubmit}>
        <FormGroup>
          <Label>Add Comment  :</Label>
          <Input type="text" id="msg" value={value} onChange={onInputChange}  placeholder="Enter text" />
        </FormGroup>
        <Button type="submit" color="primary">Send</Button>
      </Form>
    </div>
  );
}

export default App;
