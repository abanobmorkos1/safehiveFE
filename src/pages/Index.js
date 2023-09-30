import { useState } from "react";
import Post from "../components/Post"
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import "../App.css"

const Index = (props) => {
    const safehive = useLoaderData()
    const [isChecked, setIsChecked] = useState(false);    
    
    const handleCheckboxClick = (event) => {
        setIsChecked(event.target.checked);
      };

    const incidentCounts={};

    safehive.forEach((post) => {
        const incidentType = post.incident;
        if (!incidentCounts[incidentType]) {
          incidentCounts[incidentType] = 1;
        } else {
          incidentCounts[incidentType]++;
        }
      });
    return <>
    <div className="form">
        <Form  action="/create" method="post">
            <h2>Create a report</h2>
      
            <input className="input"
            type="text" 
            name="address" 
            placeholder="Adress">
            </input>
               <br />
           
            <input className="input"
            type="text" 
            name="incident"
            placeholder="incident">
             </input>
              <br />
            
            <label>
            <input className="input"
            type="checkbox"
            name="emergency"
            onChange={handleCheckboxClick}
            />
            
            <input type="text" name="emergency" value={isChecked} style={{display:"none"}}></input>
            emergency ?
        </label>
        <br />
            <button className="button">Submit</button>
        <br />
            </Form>
        </div>
        <h1 style={{textAlign: "left" , color:"red" , marginLeft: "20px"}}> Reports:  </h1>
    <div className="results"> 
        {safehive.map((post) => <Post post={post} key={post.id}
        />)}
        <h4>{Post.address}</h4>
    </div>
      <div className="stats">

        {Object.keys(incidentCounts).map((incidentType) => (
          <div className="statistics" key={incidentType}>
            <h4>{incidentType}: {incidentCounts[incidentType]}</h4>
          </div>
        ))}
      </div>
        </> 
};

export default Index