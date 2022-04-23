const axios = require('axios')

// Make a request for a user with a given ID

export const getEstimate = async (ethAddress) => {
  const response = await axios.get(
    `http://146.190.226.107:8000/estimate?address=${ethAddress}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  if (!response) {
    throw new Error('No estimate')
  }
  
  return response.data
}

export const redirectCheckout = async (ethAddress) => {
  const response = await axios.get(
    `http://146.190.226.107:8000?address=${ethAddress}`
  )
  if (!response) {
    throw new Error('Redirect is bad')
  }
  alert("You're about to be redirected.")
  return response.data
}
