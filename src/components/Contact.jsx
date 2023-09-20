import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    answer: "",
  });
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(true); // Track answer correctness
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     // Validate the math question's answer
     const correctAnswer = 12; // Change this to the correct answer
     if (parseInt(formData.answer) !== correctAnswer) {
       setIsAnswerCorrect(false); // Answer is incorrect
       return;
     }
 
     setIsAnswerCorrect(true); // Answer is correct
 
     // EmailJS parameters...
     // (Your email sending logic)
 
    // EmailJS parameters
    const templateParams = {
      to_email: formData.email,
      message: formData.message,
      // Add other template params here
    };

    emailjs
      .send(
        "service_c2o2xjb",
        "template_nr2p8a4",
        templateParams,
        "2SfExqYFm1w17PWkQ"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setFormData({
          name: "",
          email: "",
          message: "",
          answer: "",
        });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      {!isAnswerCorrect && ( // Show the error message if the answer is incorrect
        <p className="text-red-500 mb-4">
          Incorrect answer. Please check your math!
        </p>
      )}

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">
            What is the sum of 5 and 7? (Anti-Spam)
          </label>
          <input
            type="text"
            name="answer"
            value={formData.answer}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
