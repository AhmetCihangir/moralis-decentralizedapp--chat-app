const ModalInput = ({ value, setValue, placeholder, type }) => {
    return (
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-none bg-gradient-to-r from-black to-fuchsia-900 text-white px-2 rounded-md py-1 mt-4"
        placeholder={placeholder}
      />
    );
}

export default ModalInput
