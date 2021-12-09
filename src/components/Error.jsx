function Error({ children }) {
  return (
    <div className="bg-red-600 text-white text-center font-bold w-full p-3 my-3 uppercase">
      {children}
    </div>
  );
}

export default Error;
