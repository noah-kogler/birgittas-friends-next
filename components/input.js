export default function Input({name, label, placeholder, type = 'text'}) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mt-10 text-sm text-black text-left">{label}</label>
      {
        type === 'textarea'
        ? (
            <textarea rows="5"
                      name={name}
                      id={name}
                      placeholder={placeholder}
                      className="w-full px-0 py-2 border-b border-black placeholder-brown-dark bg-transparent focus:outline-none focus:border-black focus:placeholder-transparent"
                      required>
            </textarea>
          )
          : (
            <input type={type}
                   name={name}
                   id={name}
                   placeholder={placeholder}
                   required
                   className="w-full px-0 py-2 border-b border-black placeholder-brown-dark bg-transparent focus:outline-none focus:placeholder-transparent"/>
          )
      }
    </div>
  );
}