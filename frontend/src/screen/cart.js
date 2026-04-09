import React from 'react'
import { useCart } from '../Component/context/context'
import { useDispatch } from '../Component/context/context'

export default function Cart() {
  const dispatch = useDispatch();
    const data = useCart();
    const totalAmount = data.reduce((final, item)=>{
      return final + item.total
    },0)
    const handleDispatch =(product)=>{
     
      dispatch({
        type:"remove_to_cart",
        id: product
      });
    }
  return (
    <>
    <div className='container-fluid m-5 '>
      {data.length ===0 ?(
        <div className='text-center mt-5'>
    <h1>Oops 😢 Cart is Empty</h1>
  </div>
      ):(
        <table className="table w-80 p-3">
  <thead>
    <tr>
      <th scope="col " className='fs-2 text-muted'>S.No</th>
      <th scope="col"className='fs-2 text-muted'>Name</th>
      <th scope="col"className='fs-2 text-muted'>Qty</th>
      <th scope="col"className='fs-2 text-muted'>price</th>
      <th scope="col"className='fs-2 text-muted'>Total-Amount</th>
    </tr>
  </thead>
  <tbody>
   {data.map((item, idx)=>{
    return <>
    <tr key={idx}>
      <th scope="row">{idx+1}</th>
      <td>{item.name}</td>
      <td>{item.qty}</td>
      <td>{item.price}</td>
      <td>{item.total}</td>
      <td style={{color:"red"}}><button className='btn' type='button' onClick={() => handleDispatch(item.id)}><i class="fa-solid fa-trash"></i></button></td>
    </tr>
    </>
   })}
  </tbody>
</table>
      )}
{<div className='fs-2 m-5 text-center'> <h1>Total cart price:-{totalAmount}   <i class="fa-solid fa-indian-rupee-sign"></i></h1></div>}
    </div>
    </>
  )
}
