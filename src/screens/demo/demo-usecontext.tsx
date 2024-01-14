import { ReactNode, createContext, useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';

interface User {
  username: string;
}


interface AuthContextProps {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string) => {
      if (username === 'example' && password === 'password') {
          setUser({ username });
      } else {
          console.warn('Invalid credentials');
      }
  };

  const logout = () => {
      setUser(null);
  };

  const contextValue: AuthContextProps = {
      user,
      login,
      logout,
  };

  return (
      <AuthContext.Provider value={contextValue}>
          {children}
      </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const FeatureComponent1: React.FC = () => {
  const { user, login, logout } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feature 1</Text>
      {user ? (
        <>
          <Text>Welcome, {user.username}!</Text>
          <Button title="Logout" onPress={logout} />
        </>
      ) : (
        <>
          <Text>Please log in</Text>
          <Button title="Login" onPress={() => login('exampleUser', 'password')} />
        </>
      )}
    </View>
  );
};
  
// Example usage in a component
export const FeatureComponent2: React.FC = () => {
    const { user, login, logout } = useAuth();
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feature 2</Text>
        {user ? (
          <>
            <Text>Welcome, {user.username}!</Text>
            <Button title="Logout" onPress={logout} />
          </>
        ) : (
          <>
            <Text>Please log in</Text>
            <Button title="Login" onPress={() => login('exampleUser', 'password')} />
          </>
        )}
      </View>
    );
  };

const DemoUseContext: React.FC = () => {
  return (
    <AuthProvider>
      <FeatureComponent1 />
      <FeatureComponent2 />
    </AuthProvider>
  );
};

export default DemoUseContext;
