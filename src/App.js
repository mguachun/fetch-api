import React, { useEffect, useState } from "react";
import './App.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import './index.css'

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
  
    <div className="container">
      <h2 class="text-white">Having a bad day?</h2>
      <h3>Take a gander at these good bois! 💝  </h3>
      <img alt="a random dog" src={dogs} />
      <div class="dog">
        <>
        <br></br>
          <ButtonGroup size="lg" className="mb-2">
            <Button onClick={refreshPage}>Show Me Another One! </Button>
          </ButtonGroup>
        </>
      </div>

      Want to never have a bad day ever again? Think about adopting! 
    </div>



  );
}

export default App;
