import React from "react";
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function IndexScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Barra de pesquisa centralizada */}
        <TextInput
          placeholder="Buscar..."
          placeholderTextColor="#999"
          style={styles.searchInput}
        />

        {/* Imagem do Bulbasaur */}
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          }}
          style={styles.bulbasaurImage}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCCCCC", // Cinza
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  searchInput: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 40,
  },
  bulbasaurImage: {
    width: width * 0.6,
    height: width * 0.6,
    marginTop: 20,
  },
});
