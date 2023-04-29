import React from "react";
import { Text, View, Image, ScrollView } from "react-native";

import { styles } from "./styles";

const BookDetails = ({ route }) => {
  const { image, title, author, genre, synopsis, price, rating, reviews } =
    route.params.book;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.genre}>{genre}</Text>
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.info}>Autor:</Text>
            <Text style={styles.info}>{author}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.info}>Preço:</Text>
            <Text style={styles.info}>{price} reais</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.info}>Rating:</Text>
            <Text style={styles.info}>{rating}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.info}>Reviews:</Text>
            <View style={styles.info}>
              {reviews.map((review, index) => (
                <Text key={index}>{`- ${review}`}</Text>
              ))}
            </View>
          </View>
          <View style={styles.synopsisInfoRow}>
            <Text style={styles.info}>Sinopse:</Text>
            <Text style={styles.synopsisInfo}>{synopsis}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default BookDetails;
