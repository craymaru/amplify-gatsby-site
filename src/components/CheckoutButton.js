import React from "react"
import { API } from "aws-amplify"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(
  "pk_test_51Ic1jbBwqJdwftoiP3hDQ1bV5NbJqkLxWur2THnAheHlG6NIuavkSi9yjNkGdaEtLFoAdM316t1cGDo4g3IyS9lN00tMzySFDf"
)

const CheckoutButton = () => {
  const redirectToCheckout = async () => {
    const fetchSession = async () => {
      const apiName = "stripeAPI"
      const apiEndpoint = "/checkout"
      const body = {
        quantity: 1,
        client_reference_id: "UniqueString",
        priceId: "price_1LVvfzBwqJdwftoiPtjt1b5D",
      }
      const session = await API.post(apiName, apiEndpoint, { body })
      return session
    }

    const session = await fetchSession()
    const sessionId = session.id
    const stripe = await stripePromise
    stripe.redirectToCheckout({ sessionId })
  }

  return <button onClick={redirectToCheckout}>Continue to payment</button>
}

export default CheckoutButton
