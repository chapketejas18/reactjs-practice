import Greetings from "./Question1/Greetings";
import UserCard from "./Question2.js/UserCard";
import Weather from "./Question3.js/Weather";
import CounterOne from "./Question4/CounterOne";
import TaskArray from "./Question5/TaskArray";
import ButtonColor from "./Question6/ButtonColor";

export default function DayOneIndex() {
  return (
    <>
      <Greetings />
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
      <Weather temp="20" />
      <Weather temp="26" />
      <Weather temp="2" />
      <CounterOne />
      <TaskArray />
      <ButtonColor />
      <hr/>
    </>
  );
}
