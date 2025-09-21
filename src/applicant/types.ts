export interface Resume {
  id: string;
  title: string;
  created_at: string;
}

export interface ResumeListResponse {
  items: Resume[];
  found: number;
  page: number;
  pages: number;
  per_page: number;
}
