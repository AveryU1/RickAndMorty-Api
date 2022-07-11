import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Residents = ({ resident }) => {
  const [residents, setResidents] = useState([]);
  const [alive, setAlive] = useState("");
  const status = () => {
    if (alive === "Alive") {
      setAlive(1);
    } else if (alive === "Dead") {
      setAlive(2);
    } else {
      setAlive(3);
    }
  };
  useEffect(() => {
    axios.get(resident).then(res => {
      setResidents(res.data);
      setAlive(res.data.residents?.status);
      status;
    });
  }, [resident]);
  console.log(alive);
  console.log(residents);
  return (
    <li className="card">
      <h2>{residents.name}</h2>
      <img src={residents.image} alt="" />
      <div>
        <b>Status: </b>
        {residents.status}
      </div>
      <br />
      <b>Origin: </b>
      {residents.origin?.name}
      <br />
      <b>Episodes where appear: </b>
      {residents.episode?.length}
    </li>
  );
};

export default Residents;
