export type Member = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
};

export type Project = {
  id: string;
  title: string;
  coordinator: string;
  status: 'Em Andamento' | 'Concluído';
  progress: number;
  description: string;
  teamIds: string[];
};

export const MEMBERS: Member[] = [
  { id: 'm1', name: 'Dra. Ana Carolina', role: 'Pesquisadora Coordenadora', avatarUrl: 'https://i.pravatar.cc/150?u=m1' },
  { id: 'm2', name: 'Marcos Lima', role: 'Estudante de Doutorado', avatarUrl: 'https://i.pravatar.cc/150?u=m2' },
  { id: 'm3', name: 'Dr. Ricardo Borges', role: 'Pesquisador Colaborador', avatarUrl: 'https://i.pravatar.cc/150?u=m3' },
  { id: 'm4', name: 'Juliana Paes', role: 'Estudante de Mestrado', avatarUrl: 'https://i.pravatar.cc/150?u=m4' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Análise de Algoritmos de IA para Diagnóstico Médico',
    coordinator: 'Dra. Ana Carolina',
    status: 'Em Andamento',
    progress: 75,
    description: 'Este projeto foca na aplicação de técnicas de Machine Learning para a identificação de padrões em exames de imagem, visando um diagnóstico mais rápido e preciso.',
    teamIds: ['m1', 'm2', 'm4'],
  },
  {
    id: '2',
    title: 'Desenvolvimento de um Framework Web Leve com Foco em Performance',
    coordinator: 'Dr. Ricardo Borges',
    status: 'Concluído',
    progress: 100,
    description: 'O objetivo deste trabalho é criar um novo framework para desenvolvimento web que priorize a velocidade de carregamento e a eficiência no uso de recursos do servidor.',
    teamIds: ['m3'],
  },
];