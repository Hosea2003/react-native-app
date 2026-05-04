import { supabase } from "@/lib/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

const registerSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
  //   confirmPassword: z.string().min(6),
});

type RegisterSchema = z.infer<typeof registerSchema>;

const RegisterScreen = () => {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleRegister = async (data: RegisterSchema) => {
    const { data: registerResponse, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (error) {
      console.log(error);
      console.log(error.code);
      if (
        error.code === "email_exists" ||
        error.code === "user_already_exists"
      ) {
        form.setError("email", {
          message: "Cet email existe deja",
        });
      }
      return;
    }

    console.log(registerResponse);
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
      <Controller
        name="email"
        control={form.control}
        render={({ field: { value, onChange } }) => (
          <TextInput
            value={value}
            onChangeText={(text) => onChange(text)}
            style={{
              borderWidth: 1,
              borderColor: "black",
              padding: 10,
            }}
            placeholder="Email"
          />
        )}
      />
      <Controller
        name="password"
        control={form.control}
        render={({ field: { value, onChange } }) => (
          <TextInput
            value={value}
            onChangeText={(text) => onChange(text)}
            style={{
              borderWidth: 1,
              borderColor: "black",
              padding: 10,
            }}
            placeholder="Password"
            secureTextEntry
          />
        )}
      />
      {form.formState.errors.email && (
        <Text>{form.formState.errors.email.message}</Text>
      )}
      <Button
        title="Register"
        disabled={!form.formState.isValid}
        onPress={form.handleSubmit(handleRegister)}
      />
    </SafeAreaView>
  );
};

export default RegisterScreen;
