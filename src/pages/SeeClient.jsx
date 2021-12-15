import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SeeClient() {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);

  const { name, enterprise, email, phone, notes } = client;

  const { id } = useParams();

  useEffect(() => {
    setLoading(!loading);
    const getClient = async () => {
      try {
        const url = `http://localhost:4000/clients/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setClient(data);
      } catch (error) {
        console.log(error);
      }
    };

    setLoading(false);

    getClient();
  }, []);
  return Object.keys(client).length === 0 ? (
    <p className="font-black text-5xl text-blue-900">No hay resultados</p>
  ) : (
    <div>
      {loading ? (
        "Cargando..."
      ) : (
        <>
          <h1 className="font-black text-5xl text-blue-900">
            Ver Cliente: <span className="text-gray-700">{name}</span>
          </h1>
          <p className="text-xl mt-3">Información del Cliente</p>

          {name && (
            <p className="text-3xl text-gray-600 mt-8">
              <span className="text-gray-800 font-bold uppercase">
                Cliente:
              </span>{" "}
              {name}
            </p>
          )}
          {email && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 font-bold uppercase">E-mail:</span>{" "}
              {email}
            </p>
          )}
          {phone && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 font-bold uppercase">
                Teléfono:
              </span>{" "}
              {phone}
            </p>
          )}
          {enterprise && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 font-bold uppercase">
                Empresa del Cliente:
              </span>{" "}
              {enterprise}
            </p>
          )}
          {notes && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 font-bold uppercase">Notas:</span>{" "}
              {notes}
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default SeeClient;
