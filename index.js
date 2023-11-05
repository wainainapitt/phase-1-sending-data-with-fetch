function submitData (name , email){
  return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
  },
      body: JSON.stringify({
          name,
          email
      }),
  })
  .then( (response)=>response.json())
  .then( (res)=>res.json())
  .then(function (funny) {
      return document.body.innerHTML = funny["id"]
      })
      .catch(function (error) {
      alert(error.message);
      console.log(error.message);
      document.body.innerHTML = error.message;
    })
}