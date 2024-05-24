import React from 'react';

function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Features</h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="bg-gray-200 p-10 rounded">
            <h3 className="text-xl font-bold">Feature 1</h3>
            <p>Details about feature 1.</p>
          </div>
          <div className="bg-gray-200 p-10 rounded">
            <h3 className="text-xl font-bold">Feature 2</h3>
            <p>Details about feature 2.</p>
          </div>
          <div className="bg-gray-200 p-10 rounded">
            <h3 className="text-xl font-bold">Feature 3</h3>
            <p>Details about feature 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
