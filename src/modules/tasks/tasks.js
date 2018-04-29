export const types = {

};

const DEFAULT_STATE = [
  {
    id: 1,
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'In Progress',
  },
];

export function reducer(state = DEFAULT_STATE, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export const actions = {

};