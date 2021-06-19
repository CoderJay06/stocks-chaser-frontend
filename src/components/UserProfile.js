import LogoutContainer from "../containers/LogoutContainer"
import PortfolioContainer from "../containers/PortfolioContainer";

const UserProfile = ({ username }) => {
   return (
      <div>
         <br />
         <PortfolioContainer />
         <LogoutContainer />
      </div>
   )
};

export default UserProfile;
