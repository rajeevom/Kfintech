import { appConstants } from "../_constants/constants";

export function login(state = {}, action) {
  switch (action.type) {
    case appConstants.LOGIN_REQUEST:
      return {
        loading: true,
      };
    case appConstants.LOGIN_SUCCESS:
      return {
        login:action.login,
      
       
      };
    case appConstants.LOGIN_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}


export function signup(state = {}, action) {
  switch (action.type) {
    case appConstants.SIGNUP_REQUEST:
      return {
        loading: true,
      };
    case appConstants.SIGNUP_SUCCESS:
      return {
        signup:action.signup,
      
       
      };
    case appConstants.SIGNUP_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}





export function getAllProfiles(state = {}, action) {
  switch (action.type) {
    case appConstants. GET_ALL_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case appConstants. GET_ALL_PROFILE_SUCCESS:
      return {
        getAllProfiles:action.getAllProfiles,
      
       
      };
    case appConstants. GET_ALL_PROFILE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}

export function getMyProfiles(state = {}, action) {
  switch (action.type) {
    case appConstants. GET_MY_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case appConstants. GET_MY_PROFILE_SUCCESS:
      return {
        getMyProfiles:action.getMyProfiles,
      
       
      };
    case appConstants. GET_MY_PROFILE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}



