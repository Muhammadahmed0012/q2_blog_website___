// 'use client'
// import { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e:any) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e:any) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
//       >
//         <h2 className="text-3xl font-bold text-center underline text-[#7c4ee4]">
//           Contact Us
//         </h2>

//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Your Name"
//           className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#7c4ee4]"
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Your Email"
//           className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#7c4ee4]"
//           required
//         />

//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Your Message"
          
//           className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#7c4ee4]"
//           required
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full bg-[#7c4ee4] text-white p-2 rounded transition-all duration-300 ease-in-out hover:bg-[#5c2fbf] hover:shadow-lg hover:scale-105"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


'use client'
import { useState, ChangeEvent, FormEvent } from 'react';

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  // Define the event type for handleChange function
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Define the event type for handleSubmit function
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-3xl font-bold text-center underline text-[#7c4ee4]">
          Contact Us
        </h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#7c4ee4]"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#7c4ee4]"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#7c4ee4]"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#7c4ee4] text-white p-2 rounded transition-all duration-300 ease-in-out hover:bg-[#5c2fbf] hover:shadow-lg hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
