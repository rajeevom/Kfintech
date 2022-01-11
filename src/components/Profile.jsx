import React, { useEffect } from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import HeaderTop from "../components/header";
import LeftMenu from "../components/left-navigation";
import { useDispatch, useSelector } from 'react-redux'
import { appAction } from '../_actions/action'
import dashImg from "../assets/images/dash-wgt.jpg";

function Profile(props) {
  const dispatch = useDispatch()
  const getMyProfilesData = useSelector((state) => state.getMyProfiles);
  
  useEffect(() => {
    dispatch(appAction.getMyProfiles())
  
  }, [])

  console.log(getMyProfilesData, 'getAllProfilesData')
    return (
      
      <React.Fragment>
         <section className="page-container">
            <div className="clearfix" />
            <div className="container-fluid  ">
            <div className="container-inner">
        <HeaderTop />
             <LeftMenu />
        <h2 className="page-title">
          My Profiles
        </h2>

        

      
    
        <div className="dashboard-widgets">
          <div className="row">

            {
              getMyProfilesData && getMyProfilesData.loading ? 'Loading...' :
             
               
                  <div className="col-sm-4">
                  <Card className="widgets-box clearfix">
                    <Card.Img
                      variant="top"
                      className="img-placeholder"
                      src={ getMyProfilesData && getMyProfilesData.getMyProfiles &&  getMyProfilesData.getMyProfiles.avatar}
                    />
                    <Card.Body className="box-content">
                      <Card.Title as="h4">{ getMyProfilesData && getMyProfilesData.getMyProfiles &&  getMyProfilesData.getMyProfiles.first_name} { getMyProfilesData && getMyProfilesData.getMyProfiles &&  getMyProfilesData.getMyProfiles.first_name}</Card.Title>
                      <Card.Text>{ getMyProfilesData && getMyProfilesData.getMyProfiles &&  getMyProfilesData.getMyProfiles.email}</Card.Text>
                    
                    </Card.Body>
                  </Card>
                </div>
                
              
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

export default Profile;
