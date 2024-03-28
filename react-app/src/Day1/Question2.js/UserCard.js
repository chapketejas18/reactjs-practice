import './UserCard.css';
export default function UserCard ({name, email, avatarURL}){
    return (
        <div className="user-card">
            <img src={avatarURL} alt="User Avatar" />
            <div>
                <p>Hi I am {name}. You can contact me on {email}</p>
            </div>
        </div>
    );
};