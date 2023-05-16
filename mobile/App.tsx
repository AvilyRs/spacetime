import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='bg-zinc-900 flex-1 items-center justify-center'>
      <StatusBar style='light' translucent />
      <Text className='text-zinc-50 font-bold text-4xl'>React Native</Text>
    </View>
  );
}