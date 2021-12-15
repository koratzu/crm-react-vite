import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Client({ client }) {
  const navigate = useNavigate();

  const { name, email, phone, enterprise, id } = client;
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">{name}</td>
      <td className="p-3">
        <p>
          <span className="text-gray-800 uppercase font-bold">E-mail: </span>
          {email}
        </p>
        <p>
          <span className="text-gray-800 uppercase font-bold">Teléfono: </span>
          {phone}
        </p>
      </td>
      <td className="p-3">{enterprise}</td>
      <td className="p-3 flex items-center">
        <button
          type="button"
          className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 text-center uppercase font-bold"
          onClick={() => navigate(`/clients/${id}`)}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
        <button
          type="button"
          className="bg-blue-600 ml-2 hover:bg-blue-700 block w-full text-white p-2 text-center uppercase font-bold"
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button
          type="button"
          className="bg-red-600 ml-2 hover:bg-red-700  w-full text-white p-2 text-center uppercase font-bold"
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
}

export default Client;
