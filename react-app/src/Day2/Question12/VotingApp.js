import React, { useReducer } from "react";

const initialState = {
  party: {
    bjp: 0,
    shivsena: 0,
    congress: 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "VOTE":
      return {
        ...state,
        party: {
          ...state.party,
          [action.payload]: state.party[action.payload] + 1,
        },
      };
    default:
      return state;
  }
};

export const VotingApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleVote = (option) => {
    dispatch({ type: "VOTE", payload: option });
  };

  return (
    <div>
      <h1>Vote for your preferred party:</h1>
      <div>
        <button onClick={() => handleVote("bjp")}>BJP</button>
        <span>Vote Count: {state.party.bjp}</span>
      </div>
      <div>
        <button onClick={() => handleVote("shivsena")}>Shiv sena</button>
        <span>Vote Count: {state.party.shivsena}</span>
      </div>
      <div>
        <button onClick={() => handleVote("congress")}>Congress</button>
        <span>Vote Count: {state.party.congress}</span>
      </div>
    </div>
  );
};
