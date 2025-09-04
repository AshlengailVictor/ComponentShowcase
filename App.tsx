import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ComponentShowcase from './ComponentShowcase';

export default function App() {
  return (
    <SafeAreaProvider>
      <ComponentShowcase />
    </SafeAreaProvider>
  );
}
