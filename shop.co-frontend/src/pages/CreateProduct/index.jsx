import { React, useState } from 'react';

const CreateProduct = () => {
    const [product, setProduct] = useState({
        id: '',
        title: '',
        description: '',
        category: '',
        price: '',
        discountPercentage: '',
        rating: '',
        stock: '',
        tags: '',
        brand: '',
        sku: '',
        weight: '',
        dimensions: { width: '', height: '', depth: '' },
        warrantyInformation: '',
        shippingInformation: '',
        availabilityStatus: '',
        reviews: [],
        returnPolicy: '',
        minimumOrderQuantity: '',
        meta: { createdAt: '', updatedAt: '', barcode: '', qrCode: '' },
        images: '',
        thumbnail: '',
      });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleDimensionsChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      dimensions: {
        ...prevProduct.dimensions,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    fetch('http://localhost:4000/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
      
      console.log(product);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4 max-w-lg mx-auto">
      <label className="flex flex-col">
        <span className="font-semibold">ID:</span>
        <input
          type="number"
          name="id"
          value={product.id}
          onChange={handleChange}
          required
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Title:</span>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Description:</span>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Category:</span>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Price:</span>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Discount Percentage:</span>
        <input
          type="number"
          name="discountPercentage"
          value={product.discountPercentage}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Rating:</span>
        <input
          type="number"
          name="rating"
          value={product.rating}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Stock:</span>
        <input
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Tags (comma separated):</span>
        <input
          type="text"
          name="tags"
          value={product.tags}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Brand:</span>
        <input
          type="text"
          name="brand"
          value={product.brand}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">SKU:</span>
        <input
          type="text"
          name="sku"
          value={product.sku}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Weight:</span>
        <input
          type="number"
          name="weight"
          value={product.weight}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Dimensions:</span>
        <div className="flex gap-2 mt-1">
          <input
            type="number"
            name="width"
            placeholder="Width"
            value={product.dimensions.width}
            onChange={handleDimensionsChange}
            className="p-2 border rounded-md flex-1"
          />
          <input
            type="number"
            name="height"
            placeholder="Height"
            value={product.dimensions.height}
            onChange={handleDimensionsChange}
            className="p-2 border rounded-md flex-1"
          />
          <input
            type="number"
            name="depth"
            placeholder="Depth"
            value={product.dimensions.depth}
            onChange={handleDimensionsChange}
            className="p-2 border rounded-md flex-1"
          />
        </div>
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Warranty Information:</span>
        <textarea
          name="warrantyInformation"
          value={product.warrantyInformation}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Shipping Information:</span>
        <textarea
          name="shippingInformation"
          value={product.shippingInformation}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Availability Status:</span>
        <input
          type="text"
          name="availabilityStatus"
          value={product.availabilityStatus}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Return Policy:</span>
        <textarea
          name="returnPolicy"
          value={product.returnPolicy}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Minimum Order Quantity:</span>
        <input
          type="number"
          name="minimumOrderQuantity"
          value={product.minimumOrderQuantity}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Meta:</span>
        <div className="flex gap-2 mt-1">
          <input
            type="date"
            name="createdAt"
            placeholder="Created At"
            value={product.meta.createdAt}
            onChange={handleChange}
            className="p-2 border rounded-md flex-1"
          />
          <input
            type="date"
            name="updatedAt"
            placeholder="Updated At"
            value={product.meta.updatedAt}
            onChange={handleChange}
            className="p-2 border rounded-md flex-1"
          />
          <input
            type="text"
            name="barcode"
            placeholder="Barcode"
            value={product.meta.barcode}
            onChange={handleChange}
            className="p-2 border rounded-md flex-1"
          />
          <input
            type="text"
            name="qrCode"
            placeholder="QR Code"
            value={product.meta.qrCode}
            onChange={handleChange}
            className="p-2 border rounded-md flex-1"
          />
        </div>
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Images (comma separated URLs):</span>
        <input
          type="text"
          name="images"
          value={product.images}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-semibold">Thumbnail URL:</span>
        <input
          type="text"
          name="thumbnail"
          value={product.thumbnail}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md"
        />
      </label>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Create Product</button>
    </form>
  );
}

export default CreateProduct