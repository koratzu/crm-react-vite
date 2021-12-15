import { useState, useEffect } from "react";
import Client from "../components/Client";

function Index() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClient = async () => {
      try {
        const url = "http://localhost:4000/clients";
        const response = await fetch(url);
        const data = await response.json();

        setClients(data);
      } catch (error) {
        console.log(error);
      }
    };

    getClient();
  }, []);

  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">
        Administra tus <span className="font-bold text-blue-900">clientes</span>
      </p>

      <table className="w-full mt-5 table-auto shadow-md bg-white">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <Client key={client.id} client={client} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;
