//
// DATA
import { Links } from "#/data/links"
//
//
//
export const POST_USER = "POST_USER";
//
//
//
export const postUser = () => {
    return (dispatch) => {
        return fetch(`${Links[3].url}/profile`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              'Content-Type': 'application/json',
            },
          })
            .then((res) => res.json())
            .then((res) => {
                dispatch({type: POST_USER, payload: res.body})
            })
            .catch((err) => console.log(err));
    }
}
//
//
//
export const PUT_USER = "PUT_USER";
//
//
//
export const putUser = (dataForm) => {
  const nameError = document.querySelector(".error_name");  
    return (dispatch) => {
        return fetch(`${Links[3].url}/profile`, {
            method: 'PUT',
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: dataForm.firstName,
              lastName: dataForm.lastName,
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              if (res.message === "Error: User not found!") {  
                nameError.innerHTML = "Email non valide";
              } else {
                nameError.innerHTML = "";
                dispatch({type: PUT_USER, payload: dataForm})
              }                
            })
            .catch((err) => console.log(err));
    }
}