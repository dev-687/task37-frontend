import { useState } from 'react';
import axios from 'axios';

function Form({ onSubmit }) {
  const [category, setCategory] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://task37-backend.vercel.app/api/v1/data', { category, value: Number(value) });
    setCategory('');
    setValue('');
    onSubmit(); 
  };

const categories = [
    { id: 'Laptop', name: 'Laptop' },
    { id: 'Smartphone', name: 'Smartphone' },
    { id: 'Tablet', name: 'Tablet' },
    { id: 'Smartwatch', name: 'Smartwatch' },
    { id: 'Headphones', name: 'Headphones' },
    { id: 'Camera', name: 'Camera' },
    { id: 'Printer', name: 'Printer' },
    { id: 'Monitor', name: 'Monitor' },
    { id: 'Keyboard', name: 'Keyboard' },
    { id: 'Mouse', name:'Mouse' },
];

return (
    <div className="flex items-start justify-center bg-gray-100 pt-10">
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md space-y-4 w-96"
        >
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="" disabled>
                    Select a category
                </option>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                        {cat.name}
                    </option>
                ))}
            </select>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Value"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
                Submit
            </button>
        </form>
    </div>
);
}

export default Form;
