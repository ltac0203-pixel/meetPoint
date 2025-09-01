export interface MatchRequest {
  id: number;
  team: string;
  datetime: string;
}

export type User = {
  id: string;
  name: string;
  university: string;
  sport: string;
};

export type Recruitment = {
  id: string;
  userId: string;
  title: string;
  sport: string;
  date: Date;
  location: string;
  description: string;
  applicants: Application[];
  status: 'open' | 'closed' | 'confirmed';
};

export type Application = {
  id: string;
  userId: string;
  recruitmentId: string;
  status: 'pending' | 'approved' | 'rejected';
};
