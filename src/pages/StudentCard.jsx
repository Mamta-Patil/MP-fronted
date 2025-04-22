// import axios from 'axios'
// import React from 'react'
// import { Link } from 'react-router-dom'

// const StudentCard = ({ id, Name, Roll_No, Standerd }) => {

//     const handleDelate = (_id) => {
//         console.log(_id)
//         axios.delete(`https://mp-demobackend-production.up.railway.app/studentsinfo/delete/${_id}`)
//             .then((res) => {
//                 alert("student information delated succeesfully")
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }
//     return (
//         <div className='bg-slate-500 m-5 p-5 text-white font-serif rounded text-center'>
//             <p> Name : {Name} </p>
//             <p> Roll_No : {Roll_No} </p>
//             <p> Standerd : {Standerd} </p>
//             <div className="flex justify-around mt-4">
//                 <button className='bg-white text-black rounded-full w-20 h-10' onClick={() => { handleDelate(id) }}> Delete </button>
//                 <button className='bg-white text-black rounded-full w-20 h-10' >
//                     <Link to={`/edit/${id}`}>Edit</Link>
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default StudentCard
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const StudentCard = ({ id, Name, Roll_No, Standerd }) => {
  const handleDelete = (_id) => {
    console.log(_id);
    axios
      .delete(`https://mp-demobackend-production.up.railway.app/studentsinfo/delete/${_id}`)
      .then((res) => {
        alert('Student information deleted successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full max-w-sm p-6 m-4 bg-white rounded-lg shadow-md">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800">Name: {Name}</h3>
        <p className="text-gray-600 mt-1">Roll No: {Roll_No}</p>
        <p className="text-gray-600 mt-1">Standard: {Standerd}</p>
      </div>
      <div className="flex justify-around mt-4">
        <button
          onClick={() => handleDelete(id)}
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        >
          Delete
        </button>
        <Link
          to={`/edit/${id}`}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default StudentCard;