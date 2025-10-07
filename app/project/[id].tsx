import React from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Alert, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Project, PROJECTS } from '@/data/mock';


export default function ProjectDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  if (!id) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.errorText}>ID do projeto não fornecido.</Text>
      </SafeAreaView>
    );
  }

  const project = PROJECTS.find((p) => p.id === id);

  const showProjectOptions = () => {
    Alert.alert(
      "Opções do Projeto",
      "O que você gostaria de fazer?",
      [
        {
          text: "Compartilhar",
          onPress: () => Alert.alert(`Compartilhando o projeto: ${project?.title}`),
        },
        {
          text: "Ver Equipe",
          onPress: () => Alert.alert("Equipe", "membros da equipe."),
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  if (!project) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.errorText}>Projeto não encontrado.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.coordinator}>Coordenação: {project.coordinator}</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{project.status}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre o Projeto</Text>
          <Text style={styles.description}>{project.description}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Ver Opções do Projeto"
            onPress={showProjectOptions}
            color={Colors.primary}
          />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
  },
  coordinator: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.secondary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 24,
  },
  statusText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.textSecondary,
  },
  errorText: {
    fontSize: 18,
    color: Colors.textSecondary,
  },
  buttonContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingTop: 20,
  },
});