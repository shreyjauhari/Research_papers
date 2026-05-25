export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  abstract: string;
  publication_date: string | null;
  link: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export type PaperInsert = Omit<ResearchPaper, 'id' | 'created_at' | 'updated_at'>;
