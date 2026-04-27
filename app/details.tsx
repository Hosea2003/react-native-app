import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type DetailsData = {
  text: string;
};

const Details = () => {
  const router = useRouter();
  const { text } = useLocalSearchParams<DetailsData>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          padding: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
        }}
      >
        {text}
      </Text>
    </SafeAreaView>
  );
};

export default Details;
