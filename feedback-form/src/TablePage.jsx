import { useEffect, useState } from 'react';

const TablePage = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Retrieve records from localStorage
    const storedRecords = JSON.parse(localStorage.getItem('feedbackFormData'));
    if (Array.isArray(storedRecords)) {
      setRecords(storedRecords);
    } else {
      console.error('Data retrieved from localStorage is not an array:', storedRecords);
      setRecords([]); // Set records to an empty array
    }
  }, []);

  if (records.length === 0) {
    return <div>No data available.</div>;
  }

  // Get headers from the first record
  const headers = Object.keys(records[0]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Feedback Summary</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {headers.map((key) => (
              <th key={key} className="py-2 px-4 border-b">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              {headers.map((key) => (
                <td key={key} className="py-2 px-4 border-b">
                  {record[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
