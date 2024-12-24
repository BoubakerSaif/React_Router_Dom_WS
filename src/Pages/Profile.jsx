import { useParams } from "react-router-dom";
const Profile = () => {
  const { id } = useParams();

  console.log(id);

  return <div>This is the user profile page</div>;
};

export default Profile;
