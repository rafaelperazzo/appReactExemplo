import {Button} from '@react-native-material/core';
import axios from 'axios';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';

function App(): JSX.Element {
  const [dados, setDados] = React.useState([]);
  return (
    <View testID="viewPrincipal">
      <Button
        testID="botaoBuscar"
        title="Buscar"
        onPress={async () => {
          const {data} = await axios.get(
            'https://sci01-ter-jne.ufca.edu.br/cppgi/api/avaliacoes/2370/1/TODAS',
          );
          setDados(data);
        }}
      />
      <ScrollView testID="scroll">
        {dados.map(item => {
          return (
            <Text testID={String(item.id)} key={item.id}>
              {item.titulo} - {item.autores}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default App;
