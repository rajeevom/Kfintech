import { BASE_API_URL } from '../constant/index'
export const appService = {
    login,
    signup,
    getAllProfiles,
    getMyProfiles
};


function login(loginData) {debugger
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(loginData),
    };
    console.log(requestOptions, "bodybody");
    return fetch(BASE_API_URL + `/login`, requestOptions)
      .then((res) => res.json())
      .then((result) => {
        if(result.token){
          localStorage.setItem('userData', result.token);
        }
        else {
          return result
        }
        
        return result;
      });
  }



  function signup(loginData) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(loginData),
    };
    return fetch(BASE_API_URL + `/register`, requestOptions)
      .then((res) => res.json())
      .then((result) => {
        return result;
      });
  }

  function getAllProfiles() {debugger
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'X-AUTH-TOKEN': localStorage.getItem('userData'),
      },
    };
  
    return fetch(
      BASE_API_URL + `/users?page=1`,
      requestOptions
    )
      .then((res) => res.json())
      .then((result) => {
       
  
        return result.data;
      });
  }


  function getMyProfiles() {debugger
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'X-AUTH-TOKEN': localStorage.getItem('userData'),
      },
    };
  
    return fetch(
      BASE_API_URL + `/users/4`,
      requestOptions
    )
      .then((res) => res.json())
      .then((result) => {
       
  
        return result.data;
      });
  }