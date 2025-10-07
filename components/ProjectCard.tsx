import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

type ProjectCardProps = {
  id: string;
  title: string;
  coordinator: string;
  status: 'Em Andamento' | 'Concluído';
};

export function ProjectCard({ id, title, coordinator, status }: ProjectCardProps) {
  return (
    <Link href={`/project/${id}`} asChild>
      <Pressable>
        <View style={styles.card}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.coordinator}>Coord: {coordinator}</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={Colors.textSecondary} />
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    borderWidth: 1,
    borderColor: Colors.border,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: Colors.text,
  },
  coordinator: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
});