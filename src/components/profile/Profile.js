import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton"
import { Link } from "react-router-dom";
const Profile = ()=>{
    const {user,isAuthenticated}=useAuth0()
    const content=(
      <>
      <h1>Profile</h1>
<article className="column">
<h2>{user?.name}</h2>
<br/>
{user?.picture && <img src={user.picture} alt={user?.name}/>}
{<p>Your email:{user?.email}</p>}

</article>
<LogoutButton/>
<p><Link to="edit">Edit Profile</Link></p>
<p><Link to="survey">Survey Button</Link></p>
</>
        )

    
    return content
}
export default Profile