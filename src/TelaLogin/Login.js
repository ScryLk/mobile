import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Center, Box, FormControl, Stack, Input, WarningOutlineIcon, Text, Pressable, Tooltip, Spinner, Checkbox } from "native-base";
import { NativeBaseProvider } from 'native-base';

const LoginScreen = ({ navigation }) => {
  const [usuario, setusuario] = useState('');
  const [senha, setsenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [manterAcessado, setManterAcessado] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const storedusuario = await AsyncStorage.getItem('usuario');
      const storedsenha = await AsyncStorage.getItem('senha');
      console.log(storedusuario, storedsenha);
      console.log(usuario, senha);
      if (usuario !== storedusuario || senha !== storedsenha) {
        alert('Erro Usuário ou senha incorretos.');
      } else {
        navigation.navigate('Home');
      }
    } catch (error) {
      alert('Error!\nThere was an error verifying user data.');
    }
    setIsLoading(false);
  };

  const handleCheckboxChange = async (newValue) => {
    setManterAcessado(newValue);
    try {
      await AsyncStorage.setItem('ManterAcessado', JSON.stringify(newValue));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <NativeBaseProvider>
      <Box alignItems="center">
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label>usuario</FormControl.Label>
              <Input 
                value={usuario}
                onChangeText={(text) => setusuario(text)}
              />
              <FormControl.Label>senha</FormControl.Label>
              <Input 
                type="password"
                value={senha}
                onChangeText={(text) => setsenha(text)}
              />
              <FormControl.HelperText>
               Precisa ser no mínimo 6 Caracteres
              </FormControl.HelperText>
              <Checkbox
                isChecked={manterAcessado}
                onChange={handleCheckboxChange}
                id="ManterAcessado"
              >
                <Text>Manter acesso?</Text>
              </Checkbox>
            </Stack>
          </FormControl>
       
          <Box alignItems="center">
            <Button style={{ width: 100, justifyContent: "center" }} onPress={handleLogin}>
              <Tooltip label="Login" openDelay={500}>
                {isLoading ? <Spinner color="white" /> : <Text style={{ color: "white" }}>Login</Text>}
              </Tooltip>
            </Button>
            <Pressable mt={4} onPress={() => navigation.navigate('Registro')}>
              <Text style={{ color: "blue" }}>Não tem uma conta? Cadastre-se</Text>
            </Pressable>
          </Box>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default LoginScreen;