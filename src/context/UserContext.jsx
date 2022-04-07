import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { getUser } from '../services/user';

const UserContext = createContext();

function UserProvider({ children }) {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser ? currentUser : {});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser needs to be inside the UserProvider');
  }
  return context;
}

export { UserProvider, useUser };
