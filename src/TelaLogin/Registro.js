import React, { useState } from 'react';
import { View, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, NativeBaseProvider, Box, FormControl, Stack, Input, FormControlHelperText, FormControlErrorMessage, WarningOutlineIcon, Center } from 'native-base';

const RegistroScreen = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleRegister = async () => {
    try {
      await AsyncStorage.setItem('usuario', usuario);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('senha', senha);
      navigation.navigate('Login');
    } catch (error) {
      alert('Erro ao cadastrar usuário!');
    }
  };

  return (
    <NativeBaseProvider>
      <Box alignItems="center">
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label>Usuário</FormControl.Label>
              <Input
                value={usuario}
                onChangeText={(text) => setUsuario(text)}
              />
              <FormControl.Label>Email</FormControl.Label>
              <Input
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <FormControl.Label>Senha</FormControl.Label>
              <Input
                value={senha}
                onChangeText={(text) => setSenha(text)}
                type="password"
              />
              <FormControl.HelperText>
                A senha deve ter pelo menos 6 caracteres.
              </FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                São necessários pelo menos 6 caracteres.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <Box alignItems={"center"}>
          <Button onPress={handleRegister} style={{ width: 100 }}>Registrar</Button>
          </Box>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default RegistroScreen;