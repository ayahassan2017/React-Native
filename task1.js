import { StatusBar } from 'expo-status-bar';
import { Text, View , SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
    <View>
    <Text 
       style={{
         backgroundColor:'pink',
         marginTop:30
        }}
        >hello , iam aya</Text>
      <StatusBar style="auto" />
        </View>
    </SafeAreaView>
  );
}