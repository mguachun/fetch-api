import React, { useEffect, useState } from "react";
import './App.css';
import { Card, Button, ButtonGroup } from 'react-bootstrap';


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
  
    <div>
      <h2>Having a bad day?</h2>
      <h3>Take a gander at these good bois!</h3>
      <img alt="a random dog" src={dogs} />
      <div>
        <>
          <ButtonGroup size="lg" className="mb-2">
            <Button onClick={refreshPage}>Show Me Another One! </Button>
          </ButtonGroup>
        </>
      </div>
    </div>



  );
}

export default App;
