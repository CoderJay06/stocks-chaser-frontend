import PortfolioContainer from "../containers/PortfolioContainer";

const UserProfile = ({ username }) => {
   return (
      <div>
         <br />
         <h1>Welcome, {username}</h1>
         <PortfolioContainer />
      </div>
   )
};

export default UserProfile;
