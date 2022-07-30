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
  const resultados = buscar
    ? cryptos.filter((crypto) =>
        crypto.name.toLowerCase().includes(buscar.toLowerCase())
      )
    : cryptos;

  return (
    <div className="w-75 mx-auto">
      <input
        value={buscar}
        onChange={busqueda}
        placeholder=" Busca tu Crypto"
        className="form-control"
      />
      <table className="table table-dark table-hover mt-3">
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Price 24h</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((resultado) => (
            <tr key={resultado.id}>
              <td>{resultado.market_data.market_cap_rank}</td>
              <td>
                <img src={resultado.image.small} />
                {resultado.name}
              </td>
              <td>{resultado.symbol.toUpperCase()}</td>
              <td>{resultado.market_data.current_price.usd.toFixed(2)} </td>
              {/* si es + verde, - rojo /// USAR class badge bootstrap
              <td>{resultado.market_data.price_change_percentage_24h} </td>
               */}
              <td>
                {' '}
                {resultado.market_data.price_change_percentage_24h > 0 ? (
                  <span className="badge text-bg-success">
                    {resultado.market_data.price_change_percentage_24h}
                  </span>
                ) : (
                  <span className="badge text-bg-danger">
                    {resultado.market_data.price_change_percentage_24h}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crypto;
