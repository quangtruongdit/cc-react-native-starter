import { View, Text, Button } from 'react-native';
import { AuthProvider, useAuth } from '../../../contexts/auth-context';

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
