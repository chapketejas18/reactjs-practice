import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Day1/Question1/App';
import UserCard from './Day1/Question2.js/UserCard';
import App3 from './Day1/Question3.js/App3';
import Counter from './Day1/Question4/Counter';
import App4 from './Day1/Question5/App4';
import App5 from './Day1/Question6/App5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <UserCard
                name="John Doe"
                email="john@example.com"
                avatarURL="https://imgs.search.brave.com/crCTUJ8pbBvv7vu4QaiHZ1Pip5yleonH_bpz5GGzDQ8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9saWZl/aGFja2VyLmNvbS9p/bWFnZXJ5L2FydGlj/bGVzLzAxSEYyR0tO/UlFaNE1OMVlBNjM5/UTUzTlFWL2hlcm8t/aW1hZ2UuZmlsbC5z/aXplXzEyNDh4NzAy/LnYxNjk5ODMzNTkw/LnBuZw"
    />
    <UserCard
                name="Joey Dope"
                email="joyedope@example.com"
                avatarURL="https://imgs.search.brave.com/crCTUJ8pbBvv7vu4QaiHZ1Pip5yleonH_bpz5GGzDQ8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9saWZl/aGFja2VyLmNvbS9p/bWFnZXJ5L2FydGlj/bGVzLzAxSEYyR0tO/UlFaNE1OMVlBNjM5/UTUzTlFWL2hlcm8t/aW1hZ2UuZmlsbC5z/aXplXzEyNDh4NzAy/LnYxNjk5ODMzNTkw/LnBuZw"
    />
    <App3/>
    <Counter/>
    <App4/>
    <App5/>
  </React.StrictMode>
);
