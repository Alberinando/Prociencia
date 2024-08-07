// src/App.js
import React from 'react';

function App() {
  return (
    <div className="App flex items-center justify-center min-h-screen bg-custom-pink from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <img src="" alt="Logo" className="mb-4 mx-auto" />
        <h2 className="text-xl font-bold text-center mb-2">Registre sua denúncia</h2>
        <p className="text-center mb-4">
          Por favor, preencha o formulário a seguir com os seus dados para que possamos entrar em contato
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome*:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md rounded focus:outline-none focus:ring-2 focus:ring-custom-pink"
            />
          </div>
          <div className="md:flex mb-4">
            <div className="mr-2 md:w-1/2">
              <label htmlFor="data" className="block text-sm font-medium text-gray-700">Data*:</label>
              <input
                type="date"
                id="data"
                name="data"
                required
                className="mt-1 block w-full p-2 border border-gray-300  rounded-md rounded focus:outline-none focus:ring-2 focus:ring-custom-pink"
              />
            </div>
            <div className="mr-2 md:w-1/2">
              <label htmlFor="horario" className="block text-sm font-medium text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-custom-pink">Horário*:</label>
              <input
                type="time"
                id="horario"
                name="horario"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md rounded focus:outline-none focus:ring-2 focus:ring-custom-pink"
              />
            </div>
          </div>
          <div className="md:flex mb-4">
            <div className="mr-2 md:w-1/2">
              <label htmlFor="contato" className="block text-sm font-medium text-gray-700">Selecione uma forma de contato*:</label>
              <input
                type="text"
                id="contato"
                name="contato"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md rounded focus:outline-none focus:ring-2 focus:ring-custom-pink"
              />
            </div>
            <div className="mr-2 md:w-1/2 md:mt-5">
              <label htmlFor="contatoInfo" className="block text-sm font-medium text-gray-700">Whatsapp / E-mail*:</label>
              <input
                type="text"
                id="contatoInfo"
                name="contatoInfo"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md rounded focus:outline-none focus:ring-2 focus:ring-custom-pink"
              />
            </div>
          </div>
          <div className="md:text-right text-sm text-red mb-4">
            * Campos obrigatórios
          </div>
          <div className="text-center">
            <button type="submit" className="bg-custom-pink text-white py-0 px-2 rounded-md hover:bg-pink-600">
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

