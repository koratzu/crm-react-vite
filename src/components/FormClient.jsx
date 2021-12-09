import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Error from "./Error";

function FormClient() {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "El nombre es muy corto")
      .max(26, "El nombre es muy largo")
      .required("El nombre del cliente es obligatorio"),
    enterprise: yup
      .string()
      .min(3, "El nombre de la empresa es muy corto")
      .max(40, "El nombre de la empresa es muy largo")
      .required("El nombre de la empresa es obligatorio"),
    email: yup
      .string()
      .max(254, "El email es muy largo")
      .email("Email no valido")
      .required("El email del cliente es obligatorio"),
    phone: yup
      .number()
      .positive("El telefono no es valido")
      .integer("El telefono no es valido")
      .typeError("El telefono no es valido"),
  });

  const handleSubmit = (values) => {
    // const { name, enterprise, email, phone, notes } = values;
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-2xl uppercase text-center">
        Agregar Cliente
      </h1>

      <Formik
        initialValues={{
          name: "",
          enterprise: "",
          email: "",
          phone: "",
          notes: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => {
          return (
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
                  name="name"
                />

                {errors.name && touched.name ? (
                  <Error>
                    <p>{errors.name}</p>
                  </Error>
                ) : null}
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
                  name="enterprise"
                />

                {errors.enterprise && touched.enterprise ? (
                  <Error>
                    <p>{errors.enterprise}</p>
                  </Error>
                ) : null}
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
                  name="email"
                />

                {errors.email && touched.email ? (
                  <Error>
                    <p>{errors.email}</p>
                  </Error>
                ) : null}
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
                  name="phone"
                />

                {errors.phone && touched.phone ? (
                  <Error>
                    <p>{errors.phone}</p>
                  </Error>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800 font-bold" htmlFor="notes">
                  Notas
                </label>
                <Field
                  as="textarea"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50 h-36"
                  id="notes"
                  placeholder="Notas del Cliente"
                  name="notes"
                />
              </div>
              <input
                type="submit"
                value="Agregar Cliente"
                className="mt-5 w-full bg-blue-800 hover:bg-blue-300 p-3 text-white uppercase font-bold text-lg rounded-md"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormClient;
