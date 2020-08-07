// component reducer initial state to render menu component on loading IPOD
const initialState = {
  background: { backgroundColor: '#f5c8cf' },
  ipod_background: {
    backgroundImage: 'linear-gradient(to right, #396570, #1c7187, #184b58)',
  },
  circle_background: {
    backgroundImage: 'linear-gradient(to right, #e5b17a, #c66d18, #f3be8c)',
  },
  menu: {
    menu: {
      backgroundColor: '#fcffe3a1',
    },
    active: {
      backgroundImage: 'linear-gradient(to right, #cd2f0b, #b22100, #992409)',
      color: 'white',
    },
  },
};

export default function changingComponent(state = initialState, action) {
  switch (action.type) {
    // case to change the component on the basis of component received in props
    // default case to render menu component when IPOD is loaded initially
    default: {
      return state;
    }
  }
}
