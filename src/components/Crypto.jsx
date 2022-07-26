import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Crypto = () => {
  //1- states
  const [buscar, setBuscar] = useState('');
  const [cryptos, setCryptos] = useState([]);

  //2- axios api
  const miUrl = 'https://api.coingecko.com/api/v3/coins';
  const misDatos = () => {
    axios.get(miUrl).then((response) => {
      setCryptos(response.data);
    });
  };

  useEffect(() => {
    misDatos();
  }, []);

  //3- función input búsqueda
  const busqueda = (e) => setBuscar(e.target.value);

  //4- filtrar
  const resultado = buscar
    ? cryptos.filter((crypto) =>
        crypto.name.toLowerCase().includes(buscar.toLowerCase())
      )
    : cryptos;

  return <div>Crypto</div>;
};

export default Crypto;
