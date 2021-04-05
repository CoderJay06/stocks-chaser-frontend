

const UserProfile = (props) => {
   return (
      <div>
         {console.log(props)}
         <h4>{props.username}'s Profile</h4>
      </div>
   )
};

export default UserProfile;