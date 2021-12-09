import { Formik, Form, Field } from "formik";

function FormClient() {
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/5 mx-auto">
      <h1 className="text-gray-600 font-bold text-2xl uppercase text-center">
        Agregar Cliente
      </h1>

      <Formik>
        <Form className="mt-6">
          <div className="mb-4">
            <label className="text-gray-800 font-bold" htmlFor="name">
              Nombre
            </label>
            <Field
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              id="name"
              placeholder="Nombre del Cliente"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-800 font-bold" htmlFor="enterprise">
              Empresa
            </label>
            <Field
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              id="enterprise"
              placeholder="Empresa del Cliente"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-800 font-bold" htmlFor="email">
              E-mail
            </label>
            <Field
              type="email"
              className="mt-2 block w-full p-3 bg-gray-50"
              id="email"
              placeholder="Email del Cliente"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-800 font-bold" htmlFor="phone">
              Teléfono
            </label>
            <Field
              type="tel"
              className="mt-2 block w-full p-3 bg-gray-50"
              id="phone"
              placeholder="Telefono del Cliente"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-800 font-bold" htmlFor="notes">
              Notas
            </label>
            <Field
              as="textarea"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              id="notes"
              placeholder="Notas del Cliente"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default FormClient;
