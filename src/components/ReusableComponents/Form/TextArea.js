

const TextArea = ({ label, placeholder}) => {
    return (
        <div>
            <label className="text-sm">{label}</label>
            <textarea
              cols="10"
              rows="5"
              className="border border-black w-full px-2 py-2 rounded  placeholder:text-sm focus:bg-white focus:bg-opacity-80"
              type="text"
              placeholder={placeholder}
            />
          </div>
    );
};

export default TextArea;