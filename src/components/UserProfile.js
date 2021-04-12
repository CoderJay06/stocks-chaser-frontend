// import Logout from "./Logout";

import LogoutContainer from "../containers/LogoutContainer"
import PortfolioContainer from "../containers/PortfolioContainer";

const UserProfile = ({username}) => {
   return (
      <div className="max-w-6xl w-2/4 mx-auto mt-16 shadow-lg text-green-100 px-4 py-6">
         {/* {console.log(props)} */}
         <h1>{username}'s Profile</h1>
         {/* <Logout username={username} /> */}
         <br />
         <PortfolioContainer />
         <LogoutContainer />
      </div>
   )
};

export default UserProfile;