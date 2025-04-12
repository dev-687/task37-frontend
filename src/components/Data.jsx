import { useEffect, useState } from 'react';
import axios from 'axios';

function Data() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('https://task37-backend.vercel.app/api/v1/data');
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Aggregated Data</h2>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => (
          <div
            key={item._id}
            className="p-4 bg-white shadow rounded-lg border border-gray-200"
          >
            <strong className="text-lg text-gray-700">{item._id}</strong>
            <div className="text-gray-600">
              Count: <span className="font-medium">{item.total}</span>, Average:{" "}
              <span className="font-medium">{item.averageValue.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;
