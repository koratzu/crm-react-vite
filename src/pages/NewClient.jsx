import FormClient from "../components/FormClient";

function NewClient() {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">
        Llena los siguientes campos para{" "}
        <span className="font-bold text-blue-900">registrar un cliente</span>
      </p>

      <FormClient />
    </>
  );
}

export default NewClient;
