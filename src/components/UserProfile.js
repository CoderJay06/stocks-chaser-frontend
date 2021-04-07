// import Logout from "./Logout";

import LogoutContainer from "../containers/LogoutContainer"
import PortfolioContainer from "../containers/PortfolioContainer";

const UserProfile = ({username}) => {
   return (
      <div>
         {/* {console.log(props)} */}
         <h4>{username}'s Profile</h4>
         {/* <Logout username={username} /> */}
         <br />
         <PortfolioContainer />
         <LogoutContainer />
      </div>
   )
};

export default UserProfile;