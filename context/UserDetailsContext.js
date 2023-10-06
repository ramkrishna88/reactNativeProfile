import React, {createContext, useState, useContext} from 'react';

const UserDetailsContext = createContext();

export const UserDetailsProvider = ({children}) => {
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: 'john@example.com',
  });

  return (
    <UserDetailsContext.Provider value={{userDetails, setUserDetails}}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export const useUserDetails = () => {
  return useContext(UserDetailsContext);
};
