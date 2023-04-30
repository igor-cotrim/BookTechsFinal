import React, { useEffect, useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";

import api from "../../services/api";

import { styles } from "./styles";

const BookDetails = ({ route }) => {
  const [reviews, setReviews] = useState([]);
  const { id, image, title, author, type, synopsis, price, rating } =
    route.params.book;

  const fetchReviews = async () => {
    const response = await api.get("/reviews");
    const filteredReviews = response.data.filter(
      (review) => review.book_id === id
    );

    setReviews([...filteredReviews]);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.genre}>{type}</Text>
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
          <View style={styles.synopsisInfoRow}>
            <Text style={styles.info}>Sinopse:</Text>
            <Text style={styles.synopsisInfo}>{synopsis}</Text>
          </View>
        </View>
      </View>
      {reviews.length > 0 && (
        <View style={styles.infoCard}>
          <View style={styles.info}>
            <Text style={styles.info}>Reviews:</Text>
            <View>
              {reviews.map((review, index) => (
                <View style={styles.ReviewInfo}>
                  <Text key={review.id} style={{ fontWeight: "bold" }}>
                    {review.name}:{" "}
                  </Text>
                  <Text>{review.comment}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default BookDetails;
