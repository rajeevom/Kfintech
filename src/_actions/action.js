import { appConstants } from "../_constants/constants";
import { appService } from "../_services/services";
import { history } from '../_helpers';
export const appAction = {
    login,
    signup,
    getAllProfiles,
    getMyProfiles,
  };


  function login(loginData, from) {debugger
    return (dispatch) => {
      dispatch(request());
  
      appService.login(loginData).then(
        login => {
          dispatch(success(login));
          if(localStorage.getItem('userData') != undefined && localStorage.getItem('userData') != null){
           
            history.push(from);
          }else {
            history.push('/');
          }
        },
        error => {
          dispatch(failure(error.toString()));
        }
      );
    };
  
    function request(login) {
      console.log(login)
      return { type: appConstants.LOGIN_REQUEST, login };
    }
    function success(login) {
      return { type: appConstants.LOGIN_SUCCESS, login };
    }
    function failure(error) {
      console.log(error)
      return { type: appConstants.LOGIN_FAILURE, error };
    }
  }



  function signup(loginData) {
    return (dispatch) => {
      dispatch(request());
  
      appService.signup(loginData).then(
        (signup) => dispatch(success(signup)),
        (error) => dispatch(failure(error))
      );
    };
  
    function request(signup) {
      return { type: appConstants.SIGNUP_REQUEST, signup };
    }
    function success(signup) {
      return { type: appConstants.SIGNUP_SUCCESS, signup };
    }
    function failure(error) {
      return { type: appConstants.SIGNUP_FAILURE, error };
    }
  }
  


  function getAllProfiles() {
    return (dispatch) => {
      dispatch(request());
  
      appService.getAllProfiles().then(
        (getAllProfiles) => dispatch(success(getAllProfiles)),
        (error) => dispatch(failure(error))
      );
    };
  
    function request(getAllProfiles) {
      return { type: appConstants.GET_ALL_PROFILE_REQUEST, getAllProfiles };
    }
    function success(getAllProfiles) {
      return { type: appConstants.GET_ALL_PROFILE_SUCCESS, getAllProfiles };
    }
    function failure(error) {
      return { type: appConstants.GET_ALL_PROFILE_FAILURE, error };
    }
  }

  function getMyProfiles() {
    return (dispatch) => {
      dispatch(request());
  
      appService.getMyProfiles().then(
        (getMyProfiles) => dispatch(success(getMyProfiles)),
        (error) => dispatch(failure(error))
      );
    };
  
    function request(getMyProfiles) {
      return { type: appConstants.GET_MY_PROFILE_REQUEST, getMyProfiles };
    }
    function success(getMyProfiles) {
      return { type: appConstants.GET_MY_PROFILE_SUCCESS, getMyProfiles };
    }
    function failure(error) {
      return { type: appConstants.GET_MY_PROFILE_FAILURE, error };
    }
  }

