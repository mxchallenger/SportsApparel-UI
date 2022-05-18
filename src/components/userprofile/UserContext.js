import React from 'react';

// look up docs
const UserContext = React.createContext();

// changing users
// needs dispatch statement to be called
function userReducer(state, action) {
  switch (action.type) {
    case 'delete': {
      return {
        ...state,
        users: {}
        // state.users.filter((user) => user.firstName !== action.user.firstName)
      };
    }
    case 'add': {
      return {
        ...state,
        users: action.users
        // users: [...state.users, action.user]
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// stores info
function UserProvider({ children }) {
  const initialUsers = {
    users: {
    },
    setUser: () => { }
  };
  const [state, userDispatch] = React.useReducer(userReducer, initialUsers);

  const value = { state, userDispatch };
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
// access information in userProvider
function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('userDispatch must be used within a UserProvider');
  }
  return context;
}

export { UserProvider, useUser };
