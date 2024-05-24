import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-white p-10 rounded">
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input type="text" className="w-full p-2 border rounded"/>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded"/>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
