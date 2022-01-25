import React, { useEffect, useState } from "react";
import './App.css';
import {Card, Button} from 'react-bootstrap';

const App = () => {
  const [dogs, setDogs] = useState([]);


  useEffect(() => {
    const url = "https://dog.ceo/api/breeds/image/random";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.message);
        setDogs(json.message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  
  function refreshPage() {
    window.location.reload(false);
  }
   
  return (
    // <>
    // <h1>LOOK AT THESE BOIS</h1>
    // <img alt="a random dog" src={dogs}/>
    // </>
    <Card className="text-center">
    <Card.Header>Having a bad day?</Card.Header>
    <Card.Body>
      <Card.Title>Take a gander at these good bois!</Card.Title>
      <img alt="a random dog" src={dogs}/>
    </Card.Body>
    <Button variant="primary" onClick={refreshPage}>Show Me Another One! </Button>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
  </Card>
   
  );
}

export default App;
