import React from 'react';

function Products() {
  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Products</h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="bg-white p-10 rounded">
            <h3 className="text-xl font-bold">Product 1</h3>
            <p>Details about product 1.</p>
          </div>
          <div className="bg-white p-10 rounded">
            <h3 className="text-xl font-bold">Product 2</h3>
            <p>Details about product 2.</p>
          </div>
          <div className="bg-white p-10 rounded">
            <h3 className="text-xl font-bold">Product 3</h3>
            <p>Details about product 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
