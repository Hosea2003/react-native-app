import { login } from "@/data/users";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleLogin = async () => {
    const user = await login(data);

    if (!user) {
      console.log("error");
      return;
    }
    console.log(user);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        gap: 10,
        padding: 10,
      }}
    >
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 5,
        }}
        onChangeText={(text) => setData({ ...data, email: text })}
      />
      <TextInput
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 5,
        }}
        onChangeText={(text) => setData({ ...data, password: text })}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Go to register" onPress={() => router.push("/register")} />
    </SafeAreaView>
  );
};

export default LoginScreen;
