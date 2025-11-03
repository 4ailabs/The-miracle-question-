export interface SessionData {
  problem: string;
  personalDiscoveryNotes: string;
  relationalDiscoveryNotes: string;
  exceptionNotes: string;
  progressScale: number;
  halfPointStepNotes: string;
}

export interface SavedSession {
  id: string;
  title: string;
  session_data: SessionData;
  mode: 'therapist' | 'patient';
  current_step: number;
  view: 'guide' | 'recommendations' | 'manual';
  created_at: string;
  updated_at: string;
}
