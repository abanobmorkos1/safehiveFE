import "../App.css";
import { useState } from "react";
import { useLoaderData , Form , Link } from "react-router-dom";
const Show = (props) => {
    const post = useLoaderData();
    const div = {
      backgroundColor: "#15172b",
      borderRadius: "20px",
      boxSizing: "border-box",
      height: "500px",
      padding: "20px",
      width: "293px",
      position: "relative",
      display: "flex",
      float: "right",
      justifyContent: "center",
      top: "80px",
      textAlign: "center", 
      marginRight: "15px",
      
      
    }
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxClick = (event) => {
      setIsChecked(event.target.checked);
    };    
    
        return <> 
        <h1 style={{textAlign: "left" , color:"red" , marginLeft: "20px"}}> Updating...  </h1>

        <div className="card">
        <div className="card2">
        <h2>{post.incident} At {post.address}</h2>
        <h5>{post.incident}</h5>
        </div>
        </div>
        <div style={div}> 
               <Form action={`/update/${post.id}`} method="post">
              <h2 style={{textAlign: "center"}}>update report</h2>
                <input className="input"
                  type="text"
                  name="address"
                  placeholder="write address here"

                /> 
                <br/>
                <input className="input"
                  type="text"
                  name="incident"
                  placeholder="write incident here"
                />
                <br/>
                Emergency?
                <input
                  type="checkbox"
                  checked={isChecked}
                  // value={isChecked} 
                  name="emergency"
                  onChange={handleCheckboxClick}
                />
                <br/>
                <input type="text" name="emergency" value={isChecked} style={{display:"none", marginBottom:"60px"}}></input>
                <button style={{marginTop:"20px"}}>Update report</button>
              </Form> 
        </div>
              <div className="buttons"> 
              <Form action={`/delete/${post.id}`} method="post">
                <button>Delete report</button>
            <Link to="/">
              <button>Go Back</button>
            </Link>
              </Form>
              </div>
        </>
      }

export default Show;