import { getPosts, Post } from "@/data/posts";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const data = await getPosts();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    // <SafeAreaView style={style.container}>
    //   <TextInput
    //     style={{
    //       borderWidth: 2,
    //       borderColor: "black",
    //       borderRadius: 5,
    //       padding: 5,
    //       fontSize: 20,
    //     }}
    //     onChangeText={(value) => {
    //       setText(value);
    //     }}
    //   />
    //   <TouchableOpacity
    //     style={{
    //       backgroundColor: "red",
    //       borderRadius: 10,
    //       padding: 10,
    //       justifyContent: "center",
    //       flexDirection: "row",
    //       marginTop: 10,
    //     }}
    //     onPress={() => {
    //       click();
    //     }}
    //   >
    //     <Text
    //       style={{
    //         color: "white",
    //       }}
    //     >
    //       Click me
    //     </Text>
    //   </TouchableOpacity>

    //   <FlatList
    //     data={users}
    //     renderItem={({ item }) => <UserCard data={item} />}
    //   />
    // </SafeAreaView>
    // <SafeAreaView style={{ flex: 1 }}>
    //   <FlatList
    //     data={posts}
    //     renderItem={({ item }) => (
    //       <View>
    //         <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
    //         <Text>{item.body}</Text>
    //       </View>
    //     )}
    //   />
    // </SafeAreaView>
    <Redirect href={"/login"} />
  );
}
