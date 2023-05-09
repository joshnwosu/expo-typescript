import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { v4 as uuidv4 } from "uuid";

interface Post {
  id: string | number;
  title: string;
}

// Custom posts
const POSTS: Post[] = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

// Create a client
const queryClient = new QueryClient();

export default function App() {
  useEffect(() => {
    console.log(POSTS);
  }, [POSTS]);
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <Post />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

function Post() {
  const queryClient = useQueryClient();

  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  const newPostMutation = useMutation<Post, unknown, { title: string }>(
    ({ title }) =>
      wait(1000).then(() => {
        const post: Post = {
          id: uuidv4(),
          title,
        };
        POSTS.push(post);
        return post;
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["posts"]),
    }
  );

  if (postQuery.isLoading) return <Text>Loading...</Text>;
  if (postQuery.isError) return <Text>{JSON.stringify(postQuery.error)}</Text>;

  return (
    <View>
      {postQuery.data?.map((post) => (
        <View key={post.id}>
          <Text>{post.title}</Text>
        </View>
      ))}
      <Button
        title="Add New"
        onPress={() => newPostMutation.mutate({ title: "New Post" })}
        disabled={newPostMutation.isLoading}
      />
    </View>
  );
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
