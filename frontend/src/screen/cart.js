import React from 'react'
import { useCart, useDispatch } from '../Component/context/context'

export default function Cart() {
  const dispatch = useDispatch();
  const data = useCart();

  const totalAmount = data.reduce((final, item) => {
    return final + item.total
  }, 0)

  const handleDispatch = (id) => {
    dispatch({
      type: "remove_to_cart",
      id: id
    });
  }

  return (
    <div className='container-fluid mt-3 px-2'>

      {data.length === 0 ? (
        <div className='text-center mt-5'>
          <h2>Oops 😢 Cart is Empty</h2>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                  <td>{item.total}</td>
                  <td>
                    <button
                      className='btn btn-danger btn-sm'
                      onClick={() => handleDispatch(item.id)}
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}

      {/* Total */}
      <div className='text-center mt-4'>
        <h3>Total cart price: ₹{totalAmount}</h3>
      </div>

    </div>
  )
}