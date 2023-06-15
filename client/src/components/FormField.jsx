/* eslint-disable react/prop-types */


const FormField = ({ label, type, name, placeholder, value,
  handleChange, isSuprizeMe, handleSuprizeMe }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name}
          className="block text-sm font-medium text-gray-900">
          {label}
        </label>
        {isSuprizeMe && (
          <button type="button"
            onClick={handleSuprizeMe}
            className="font-semibold text-xs bg-[#ececf1] py-1 px-2
             rounded-[5px] text-black">
            Surprise me
          </button>
        )}
      </div>
      <input type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-100 text-gray-900 
        text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] 
        outline-none block w-full p-3" />
    </div>
  )
}

export default FormField
