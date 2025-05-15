export interface ModuleContent {
  title: string;
  description: string;
  details?: string[];
}

export interface Session {
  id: number;
  title: string;
  description: string;
  active?: boolean;
  completed?: boolean;
  modules: ModuleContent[];
}