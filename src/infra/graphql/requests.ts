import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTER, GET_CHARACTER } from './queries';

export function useQueryCharacters() {
  const query = useQuery(GET_ALL_CHARACTER);
  const { data, loading } = query;
  return { data, loading };
}

export function useQueryCharacter(id: string) {
  const query = useQuery(GET_CHARACTER, {
    variables: { characterId: id },
  });
  const { data, loading } = query;
  return { data, loading };
}
