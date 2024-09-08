// 
// https://api.unsplash.com/search/photos?page=1&query=officeclient_id=
import React,{ useState } from 'react'
// import React from 'react'
import axios from 'axios'



function App() {
  
  const [image, setImage] = useState([])

  const getImage =()=> {
    console.log("clicked");
    axios.get("https://api.unsplash.com/search/photos?page=1&query=office&client_id=jG7gNGfup3rI8TxTICzdvWW4ExdLLCBf0iUXr_5Svq0")
      .then((response) => {
         console.log(response);
        setImage(response.data.results)
      })
  }
  return (
    // <div>
    //   <h1>Hello Faisal</h1>
    // </div>
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-4">
          <button className="btn btn-primary" onClick={getImage}>Get Image</button>
          </div>
        </div>
      </div>


     <div className="container"> 
        <div className="row">
          {
            image.map((value, index) => {
              return (
                <div key={index} className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                 <img src={value.urls.small} className="card-img-top" alt="image"/>                   
           </div>
          </div>)
            })
          } 
         </div>
      </div>     
   
    </>
  )
}

export default App;
