// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

/*
action, store

okay let me see

store copy

*/

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
