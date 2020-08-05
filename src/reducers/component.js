const initialState = {
  activeComponent: 'Menu',
  activeItem: 'Music',
};

export default function changingComponent(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
