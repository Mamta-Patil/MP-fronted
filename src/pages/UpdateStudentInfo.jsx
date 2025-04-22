// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

// const UpdateStudentInfo = () => {
//   const [studentata, setstudentdata] = useState({
//     Name: "",
//     Roll_No: "",
//     Standerd: "",
//   });
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setstudentdata({ ...studentata, [name]: value });
//   };

//   const {id}=useParams()
//   const getsinglestudentdata = () => {
//     axios.get(`https://mp-demobackend-production.up.railway.app/studentsinfo/getsinglestudentinfo/${id}`)
//       .then((res) => {
//         console.log(res.data)
//         console.log(res.data.data)
//         setstudentdata(res.data.data)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.patch(`https://mp-demobackend-production.up.railway.app/studentsinfo/update/${id}`,studentata)
//     .then((res)=>{
//       alert("Student Information updated successfully")
//     })
//     .catch((err)=>{
//       alert(err)
//     })
//   };

//   useEffect(() => {
//      getsinglestudentdata()
//   }, []); 

//   return (
//     <div>
//       <form action="" className='p-5 m-5 bg-slate-500 w-[400px]' onSubmit={handleSubmit}>
//         <p className='font-bold text-center pt-5 text-white'>Update Student Information</p>
//         <input type="text" placeholder='Enter Name' className='p-2 border mt-1 border-black rounded' name='Name' value={studentata.Name} onChange={handleChange} /><br />
//         <input type="number" placeholder='Enter Roll_No' className='p-2 mt-1 border border-black rounded' name="Roll_No" value={studentata.Roll_No} onChange={handleChange}/> <br />
//         <input type="number" placeholder='Enter Standard' className='p-2 mt-1 border border-black rounded' name='Standerd' value={studentata.Standerd} onChange={handleChange} /> <br />
//         <button className='p-2 mt-3 border border-black rounded bg-white ps-5 pe-5' type='submit'> Update  </button>
//       </form>
//     </div>
//   )
// }

// export default UpdateStudentInfo
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateStudentInfo = () => {
  const [studentData, setStudentData] = useState({
    Name: '',
    Roll_No: '',
    Standerd: '',
  });

  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const getSingleStudentData = () => {
    axios
      .get(`https://mp-demobackend-production.up.railway.app/studentsinfo/getsinglestudentinfo/${id}`)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.data);
        setStudentData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`https://mp-demobackend-production.up.railway.app/studentsinfo/update/${id}`, studentData)
      .then((res) => {
        alert('Student Information updated successfully');
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getSingleStudentData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Update Student Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              value={studentData.Name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <div>
            <label htmlFor="Roll_No" className="block text-sm font-medium text-gray-700">
              Roll Number
            </label>
            <input
              type="number"
              id="Roll_No"
              name="Roll_No"
              value={studentData.Roll_No}
              onChange={handleChange}
              placeholder="Enter Roll Number"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <div>
            <label htmlFor="Standerd" className="block text-sm font-medium text-gray-700">
              Standard
            </label>
            <input
              type="number"
              id="Standerd"
              name="Standerd"
              value={studentData.Standerd}
              onChange={handleChange}
              placeholder="Enter Standard"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudentInfo;