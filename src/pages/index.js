import React, { useState, useEffect } from "react";
import AddForm from './../component/Form';
import ListRender from './../component/List'
import Footer from './../component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as containerStyles from './../style/card.module.css'

function App() {

  const [links, setLinks] = useState();

  const loadLinks = async () => {
    const res = await fetch('/.netlify/functions/getLinks');
    const Links = await res.json();
    setLinks(Links)
    // console.log(Links);
  }
  // console.log("use", links);

  useEffect(() => {
    loadLinks();
  }, [])

  let Time = new Date().toLocaleTimeString();
  const [ctime,setctime]=useState(Time);

  const updateTime = () =>{
      Time = new Date().toLocaleTimeString();
      setctime(Time);
  };
  setInterval(updateTime,1000);

  return (


    <div className="card mt-3" style={{
      maxWidth: '370px', background: "#F0F8FF", borderRadius: "40px",
      marginLeft: "auto", marginRight: "auto"
    }}>

      <div className="mb-2" style={{
        paddingTop: '45px',
        paddingLeft: '30px',
         // borderRadius: "50px", 
      }}>

        <h3>Todo App</h3>
        <h6 style={{fontSize:'12px' }}>{Time}</h6>

        </div>


      <div className="container" style={{
        borderStartStartRadius: "35px",borderStartEndRadius: "35px",
        background: "#4DA8D5",minHeight: "450px"
         // width: '400px',   // borderRadius: "35px",
      }}>

        <AddForm loadLinks={loadLinks} />
        <ListRender links={links} loadLinks={loadLinks} />

      </div>
      <Footer />
    </div>



  );
}

export default App;

