import LogoutContainer from "../containers/LogoutContainer"
import PortfolioContainer from "../containers/PortfolioContainer";

const UserProfile = ({ username }) => {
   return (
      <div>
         <h1>{username}'s Profile</h1>
         <br />
         <PortfolioContainer />
         <LogoutContainer />
      </div>
   )
};

export default UserProfile;
