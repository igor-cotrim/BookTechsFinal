import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ListItem, Avatar } from "react-native-elements";

import data from "../../api/books.json";

import { styles } from "./styles";

const BookList = () => {
  const navigation = useNavigation();
  const [books, setBooks] = useState(data);
  const [booksToShow, setBooksToShow] = useState(5);
  const [refreshing, setRefreshing] = useState(false);

  const renderBook = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detalhes", { book: item })}
    >
      <ListItem containerStyle={styles.listItem}>
        <Avatar
          size="large"
          source={{ uri: item.image }}
          containerStyle={styles.avatarContainer}
        />
        <ListItem.Content style={styles.content}>
          <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
          <ListItem.Subtitle style={styles.subtitle}>
            {item.author}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );

  const fetchMoreBooks = () => {
    setBooksToShow(booksToShow + 5);
  };

  const onRefresh = () => {
    setRefreshing(true);
  };

  useEffect(() => {
    if (refreshing) {
      setRefreshing(false);
    }
  }, [refreshing]);

  return (
    <FlatList
      data={books.slice(0, booksToShow)}
      renderItem={renderBook}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={fetchMoreBooks}
      initialNumToRender={5}
      maxToRenderPerBatch={5}
      onEndReachedThreshold={0.1}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default BookList;
