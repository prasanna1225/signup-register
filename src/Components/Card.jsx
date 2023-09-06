import React from "react";
import person1 from "../images/page4_2/karan.png";  
import person2 from "../images/page4_2/krishna.png";

const CardComponent = ({ heading }) => {
  return (
    
    <div className="container ">
      <h2 className="text-center" style={{ marginBottom:"22px",fontSize:"30px" , color:"#45776B" }}>{heading}</h2>
      <div className="row "style={{ width:"100%" }}>
        
        
        <div className="col" style={{padding:"1.5rem"}}> 
          
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={person1}
                className="img-fluid rounded-start"
                alt="..."
              />
              
            </div>
            <div className="col-md-8">
              <div className="mr-3 " style={{ marginLeft:"1rem" ,marginTop:".5rem", width: "366px",height: "197px"}}>
                
                <div className="row" style={{ color: "#215D4F",alignItems:"end"  }}>
                  <h3 className="col" style={{ fontSize: "24px" , fontWeight:"600" ,marginRight: "-210px"}} >Karan Jariwala
                  <span className="col text-center"style={{ fontSize: "12px" , fontWeight:"400" , }} >(Graphic Designer at apple)</span>
                  </h3>
                </div>
                <p className="card-text" style={{ fontSize: "18px" , color: "#215D4F" ,margin:"revert"}} >
                  6+ years of Experience in Motion Design Ex-Google ,Ex-Flipkart
                </p>

                <div className="row" style={{ color: "#215D4F" , fontSize:"14px"}}>
                  <p className="col" style={{marginRight:"-50px"}}>13+ Course Published </p>
                  
                  <p className="col"> 4.6⭐Rating (10k Rating)</p>
                </div>
                <button className="btn btn-outline-success" style={{ width: "153px" , height:"45" , color:"white" , backgroundColor:"#45776B" ,marginTop: "1rem",fontSize: "revert",padding: "0.7rem 0",borderRadius: "10px"}} type="submit">
                View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        

        <div className="col " style={{ padding:"1.5rem"}}>  
            
                     
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={person2}
                className="img-fluid rounded-start"
                alt="..."
              />
              
            </div>
            <div className="col-md-8">
              <div className="mr-3 " style={{ marginLeft:"1rem" ,marginTop:".5rem", width: "366px",height: "197px"}}>
                
                <div className="row" style={{ color: "#215D4F",alignItems:"end"  }}>
                  <h3 className="col" style={{ fontSize: "24px" , fontWeight:"600" ,marginRight: "-210px"}} >Krishna
                  <span className="col text-center"style={{ fontSize: "12px" , fontWeight:"400" , }} >(Senior 3D Designer at Apple)</span>
                  </h3>
                </div>
                <p className="card-text" style={{ fontSize: "18px" , color: "#215D4F" ,margin:"revert"}} >
                9+ years of experience in UI/UX Design Ex-Google, Ex-Flipkart
                </p>

                <div className="row" style={{ color: "#215D4F" , fontSize:"14px"}}>
                  <p className="col" style={{marginRight:"-50px"}}>113+ Course Published </p>
                  
                  <p className="col"> 4.9⭐Rating (2k Rating)</p>
                </div>
                <button className="btn btn-outline-success" style={{ width: "153px" , height:"45" , color:"white" , backgroundColor:"#45776B" ,marginTop: "1rem",fontSize: "revert",padding: "0.7rem 0",borderRadius: "10px"}} type="submit">
                View Profile
                </button>
              </div>
            </div>
          </div>
        
        </div>

        <div className="w-100" ></div>

        <div className="col " style={{padding:"1.5rem"}}>
            
                      
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={person1}
                className="img-fluid rounded-start"
                alt="..."
              />
              
            </div>
            <div className="col-md-8">
              <div className="mr-3 " style={{ marginLeft:"1rem" ,marginTop:".5rem", width: "366px",height: "197px"}}>
                
                <div className="row" style={{ color: "#215D4F",alignItems:"end"  }}>
                  <h3 className="col" style={{ fontSize: "24px" , fontWeight:"600" ,marginRight: "-210px"}} >Karan Jariwala
                  <span className="col text-center"style={{ fontSize: "12px" , fontWeight:"400" , }} >(Graphic Designer at apple)</span>
                  </h3>
                </div>
                <p className="card-text" style={{ fontSize: "18px" , color: "#215D4F" ,margin:"revert"}} >
                  6+ years of Experience in Motion Design Ex-Google ,Ex-Flipkart
                </p>

                <div className="row" style={{ color: "#215D4F" , fontSize:"14px"}}>
                  <p className="col" style={{marginRight:"-50px"}}>13+ Course Published </p>
                  
                  <p className="col"> 4.6⭐Rating (10k Rating)</p>
                </div>
                <button className="btn btn-outline-success" style={{ width: "153px" , height:"45" , color:"white" , backgroundColor:"#45776B" ,marginTop: "1rem",fontSize: "revert",padding: "0.7rem 0",borderRadius: "10px"}} type="submit">
                View Profile
                </button>
              </div>
            </div>
          </div>
        
        </div>

        <div className="col " style={{padding:"1.5rem"}}>
            
                      
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={person2}
                className="img-fluid rounded-start"
                alt="..."
              />
              
            </div>
            <div className="col-md-8">
              <div className="mr-3 " style={{ marginLeft:"1rem" ,marginTop:".5rem", width: "366px",height: "197px"}}>
                
                <div className="row" style={{ color: "#215D4F",alignItems:"end"  }}>
                  <h3 className="col" style={{ fontSize: "24px" , fontWeight:"600" ,marginRight: "-210px"}} >Krishna
                  <span className="col text-center"style={{ fontSize: "12px" , fontWeight:"400" , }} >(Senior 3D Designer at Apple)</span>
                  </h3>
                </div>
                <p className="card-text" style={{ fontSize: "18px" , color: "#215D4F" ,margin:"revert"}} >
                9+ years of experience in UI/UX Design Ex-Google, Ex-Flipkart
                </p>

                <div className="row" style={{ color: "#215D4F" , fontSize:"14px"}}>
                  <p className="col" style={{marginRight:"-50px"}}>113+ Course Published </p>
                  
                  <p className="col"> 4.9⭐Rating (2k Rating)</p>
                </div>
                <button className="btn btn-outline-success" style={{ width: "153px" , height:"45" , color:"white" , backgroundColor:"#45776B" ,marginTop: "1rem",fontSize: "revert",padding: "0.7rem 0",borderRadius: "10px"}} type="submit">
                View Profile
                </button>
              </div>
            </div>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
