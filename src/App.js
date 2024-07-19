// import React, { useState } from 'react';
// import axios from 'axios';
// import SalesForm from './SalesForm';

// function App() {
//   const [forms, setForms] = useState([{ id: 1 }]);
//   const [formData, setFormData] = useState({});

//   const duplicateForm = () => {
//     setForms([...forms, { id: forms.length + 1 }]);
//   };

//   const updateFormData = (id, data) => {
//     setFormData(prevFormData => ({
//       ...prevFormData,
//       [id]: data,
//     }));
//   };

//   const handleFormSubmit = async () => {
//     const dataArray = Object.values(formData);
//     try {
//       const response = await axios.post('http://localhost:8080/salesrecords', dataArray, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       console.log('Success:', response.data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Sales Form</h1>
//       {forms.map((form, index) => (
//         <SalesForm
//           key={form.id}
//           id={form.id}
//           isLastForm={index === forms.length - 1}
//           onDuplicate={duplicateForm}
//           onUpdateFormData={updateFormData}
//         />
//       ))}
//       <button onClick={handleFormSubmit}>Submit All</button>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import axios from 'axios';
import SalesForm from './SalesForm';

function App() {
  const [forms, setForms] = useState([{ id: 1 }]);
  const [formData, setFormData] = useState({});

  const duplicateForm = () => {
    setForms([...forms, { id: forms.length + 1 }]);
  };

  const updateFormData = (id, data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: data,
    }));
  };

  const handleFormSubmit = async () => {
    const dataArray = Object.values(formData);
    try {
      const response = await axios.post('http://localhost:8080/salesrecords', dataArray, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Sales Form</h1>
      {forms.map((form, index) => (
        <SalesForm
          key={form.id}
          id={form.id}
          isLastForm={index === forms.length - 1}
          onDuplicate={duplicateForm}
          onUpdateFormData={updateFormData}
        />
      ))}
      <button onClick={handleFormSubmit}>Submit All</button>
    </div>
  );
}

export default App;