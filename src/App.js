import React, { useEffect, useState } from "react";

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
  
   
  return (
    <>
    <h1>LOOK AT THESE BOIS</h1>
    <img src={dogs} />
    </>
   
  );
}

export default App;
