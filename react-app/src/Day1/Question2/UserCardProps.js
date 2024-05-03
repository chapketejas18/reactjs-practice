import "./UserCard.css";
const UserCardProps = ({ name, email, avatarURL, color, city, phone }) => {
  return (
    <div className="user-card" style={{ backgroundColor: color }}>
      <img src={avatarURL} alt="User Avatar" />
      <div>
        <p>
          Hi I am {name}. You can contact me on {email}
        </p>
        {city && <p>City : {city}</p>}
        {phone && <p> Phone No : {phone}</p>}
        {email && <p> Email : {email}</p>}
      </div>
    </div>
  );
};

export default UserCardProps;
