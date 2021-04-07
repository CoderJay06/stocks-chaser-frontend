// import Logout from "./Logout";

import LogoutContainer from "../containers/LogoutContainer"

const UserProfile = ({username}) => {
   return (
      <div>
         {/* {console.log(props)} */}
         <h4>{username}'s Profile</h4>
         {/* <Logout username={username} /> */}
         <LogoutContainer />
      </div>
   )
};

export default UserProfile;