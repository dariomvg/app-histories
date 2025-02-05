export type History = {
  id: string;
  url: string;
};

export interface UseHistory {
  addNewHistory: (image: File) => void;
  removeHistory: (id: string) => void;
  register: (newName: string) => void;
  logout: () => void;
  user: User;
  loading: boolean;
  msgError: string;
}

export interface PropsCardHistory {
  history: History;
  removeHistory: (id: string) => void;
}

export interface User {
  username: string;
  profile_picture: string;
  histories: History[];
}

export interface UploadImage {
  publicId: string;
  url: string;
}
