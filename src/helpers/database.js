const URL = "http://wettayakorn.com/"

export const customerPostJob = function (value = {"text":"build marketing website using javascript"}) {
  console.log(value)
  return fetch(URL + 'products/made-to-order/insert', {
    method: 'POST', 
    body: JSON.stringify(value), 
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
}

export const fetchShelf = function (value = {"text":"build marketing website using javascript"}) {
  return fetch(URL + 'products/off-the-shelf/search', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(value), 
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => {
    return res.json()
  })
}

export const fetchMadeToOrder = function (value = {"text":"build marketing website using javascript"}) {
  return fetch(URL + 'products/made-to-order/search', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(value), 
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => {
    return res.json()
  })
}

export const fetchFreelance = function (value) {
  return fetch(URL + 'products/match', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify({"text":"build marketing website using javascript"}), 
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => {
    return res.json()
  })
}