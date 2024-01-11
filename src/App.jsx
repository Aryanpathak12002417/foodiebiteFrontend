import { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';

function App() {
  const [product,setProduct]=useState({
      product:'Basic Meal Plain',
      price:10
  })

  const makePayment=(token)=>{
    // const body={
    //   product,
    //   token
    // }

    // const headers={
    //   "Content-Type":"application/json"
    // }

    // return fetch('http://localhost:4000/payment/plains',{
    //   method:'POST',
    //   headers,
    //   body:JSON.stringify(body)
    // }).then((result)=>{
    //   console.log(result)
    //   const {status}=result;
    //   console.log("STATUS ",result.status)
    // }).catch((err)=>{
    //   console.log(err)
    // })
    const anchorTag=document.createElement('a')
    anchorTag.setAttribute('href','https://buy.stripe.com/test_14kcQmehFdI7fHa7ss')
    anchorTag.click()
  }

  return (
    <>
      {/* <StripeCheckout
        stripeKey='pk_test_51OSwy2SIifX02Hek7UcgNLRlzPy4Hs4ayo6srpoGjURwjZkWUBoQ3V0eoxMXC3rOOyZ0JnGUOp2i9oXNOmZ2z8JP00qRbgP5bN'
        token={makePayment}
        name="Buying basic meal plain"
        description="enjoy every bite of your food"
        amount={product.price*100}
      >
        <button>Pay with api</button>
      </StripeCheckout> */}
      <button onClick={makePayment}>Click me</button>
    </>
  )
}

export default App
