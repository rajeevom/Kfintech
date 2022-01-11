import React, { useEffect } from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import HeaderTop from "../components/header";
import LeftMenu from "../components/left-navigation";
import { useDispatch, useSelector } from 'react-redux'
import { appAction } from '../_actions/action'
import dashImg from "../assets/images/dash-wgt.jpg";

function Dashboard(props) {
  const dispatch = useDispatch()
  const getAllProfilesData = useSelector((state) => state.getAllProfiles);
  
  useEffect(() => {
    dispatch(appAction.getAllProfiles())
  
  }, [])

  console.log(getAllProfilesData, 'getAllProfilesData')
    return (
      
      <React.Fragment>
         <section className="page-container">
            <div className="clearfix" />
            <div className="container-fluid  ">
            <div className="container-inner">
        <HeaderTop />
             <LeftMenu />
        <h2 className="page-title">
          All Profiles
        </h2>

        

        <div className="welcome-text mt-4">
          <h2>Welcome kfintech!</h2>
         
        </div>
    
        <div className="dashboard-widgets">
          <div className="row">

            {
              getAllProfilesData && getAllProfilesData.loading ? 'Loading...' :
              getAllProfilesData && getAllProfilesData.getAllProfiles && getAllProfilesData && getAllProfilesData.getAllProfiles.map((item, index)=> {
                return (
                  <div className="col-sm-4">
                  <Card className="widgets-box clearfix">
                    <Card.Img
                      variant="top"
                      className="img-placeholder"
                      src={item.avatar}
                    />
                    <Card.Body className="box-content">
                      <Card.Title as="h4">{item.first_name} {item.first_name}</Card.Title>
                      <Card.Text>{item.email}</Card.Text>
                    
                    </Card.Body>
                  </Card>
                </div>
                )
              }) 
            }

            
           
          </div>
        </div>

        <div className="clearfix" />
            
        </div>
            </div>
          </section>
      </React.Fragment>
    );
}

export default Dashboard;
