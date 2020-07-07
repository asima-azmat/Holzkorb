import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";


const InventoryForm = ({
  match: {
    params: { inventoryId },
  },
  history
}) => {
console.log('history', history)
  const {token} = useContext(AuthContext)
  const isCreate = inventoryId === 'create';
  const [product, setProduct] = useState(1);
  const [stock, setStock] = useState(500);
  const [price, setPrice] = useState(6);
  const [minOrder, setMinOrder] = useState(6);
  const [startDate, setFromDate] = useState('07-07-2020');
  const [endDate, setToDate] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/inventory', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: 2,
        totalUnitsCount: stock,
        pricePerUnit: price,
        minUnitsPerOrder: minOrder,
        startDate,
        endDate,
        orderUnit: 'KG',
      }),
    }).then(res => {
      window.localStorage.setItem('isLoading', 1)
      history.push('/manage-inventory')
    }).catch((e) => console.error(e));
  };
  return (
    <main className="inventory-form">
      <div className="container mx-auto px-4 sm:px-8 rounded overflow-hidden shadow-lg mt-12 py-8 border lg:w-3/5 w-full">
        <h2 className="text-2xl font-semibold leading-tight mb-8 text-green-600">
          {isCreate
            ? 'Create new Inventory Item'
            : `Edit Inventory for ${inventoryId}`}
        </h2>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password">
                Product
              </label>
              <div className="relative w-full md:w-1/2">
                <select
                  onChange={(e) => setProduct(e.target.value)}
                  required
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option value="1">Valencia Orange</option>
                  <option value="2">Moroccan Olives</option>
                  <option value="3">Strawberries</option>
                  <option value="4">Pomengrate</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-xs italic mt-2">
                Wanna leave some notes here for the user ?
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-stock">
                Available Amount (in Kilograms)
              </label>
              <input
                onChange={(e) => setStock(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-stock"
                type="number"
                placeholder="500"
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-min-order">
                Min. Order (in Kilograms)
              </label>
              <input
                onChange={(e) => setMinOrder(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-min-order"
                type="number"
                placeholder="5"
                required
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-price">
                Price in Euros
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-price"
                type="number"
                placeholder="4.50"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-from-date">
                Available From
              </label>
              <input
                onChange={(e) => setFromDate(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-from-date"
                type="date"
                required
                placeholder="20-06-2020"
                defaultValue={new Date().toISOString().substr(0, 10)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-from-date">
                Available To (optional)
              </label>
              <input
                onChange={(e) => setToDate(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-from-date"
                type="text"
                placeholder="20-09-2020"
              />
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-400 text-white text-2xl font-bold py-6 px-24 border-b-4 border-green-700 hover:border-green-500 rounded">
            {isCreate ? 'Save & Create' : 'Save & Update'}
          </button>
        </form>
      </div>
    </main>
  );
};
export default InventoryForm;
