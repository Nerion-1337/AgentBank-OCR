// BUILDER
import Typo  from "#/components/build/global/typography"
import isEmpty from "#/components/build/global/isEMpty";
//
// DATA
import { Links } from "#/data/links"
//
// REDUX
import { useSelector } from "react-redux";
import { store } from "#/reducers/store";
import { resetContent } from "../../actions/reset_action";
//
//
//
export default function Nav(){
//
// VARIABLE
//
const user = useSelector((state) => state.userReducer);
//
// BUILDER
//
const logo = (
<>
<Typo
          href={Links[0].url}
          type={Links[0].type}
          className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./assets/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Typo>
</>
)
//
// FONCTION CLICK
//
const handleClick = () => {
  localStorage.removeItem('token');
  store.dispatch(resetContent());  
};
//
//
//
    return(
      <>
{isEmpty(user.firstName) ? (     
        <nav className="main-nav">
          {logo}
      <div>
      <Typo
          href={Links[1].url}
          type={Links[1].type}
          classLien="main-nav-item">
          <i className="fa fa-user-circle"/> Sign In
        </Typo>
      </div>
    </nav>
      ) : (
<nav className="main-nav">
      {logo}
  <div>
  <Typo
      href={Links[2].url}
      type={Links[2].type}
      className="main-nav-item">
      <i className="fa fa-user-circle"/> {user.firstName}
    </Typo>
    <Typo
    fonction={handleClick}
    href={Links[0].url}
    type={Links[0].type}
    className="main-nav-item">
      <i className="fa fa-sign-out" /> Sign Out
    </Typo>
  </div>
</nav>
      )}
    </>
    )
}