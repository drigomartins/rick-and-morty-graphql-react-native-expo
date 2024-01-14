export type Character = {
  created: string;
  gender: string;
  id: string;
  image: string;
  name: string;
  status: string;
  type: string;
  species: string;
};

export type CharacterShort = {
  id: string;
  image: string;
  name: string;
};

export type CharacterList = CharacterShort[];
