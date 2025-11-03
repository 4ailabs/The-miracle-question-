import { supabase } from './supabase';
import type { SessionData, SavedSession } from '../types';

export const sessionService = {
  // Guardar una sesión
  async saveSession(
    title: string,
    sessionData: SessionData,
    mode: 'therapist' | 'patient',
    currentStep: number,
    view: 'guide' | 'recommendations' | 'manual'
  ): Promise<{ data: SavedSession | null; error: Error | null }> {
    try {
      // Crear una copia limpia y serializable del sessionData
      const cleanSessionData: SessionData = {
        problem: sessionData.problem || '',
        personalDiscoveryNotes: sessionData.personalDiscoveryNotes || '',
        relationalDiscoveryNotes: sessionData.relationalDiscoveryNotes || '',
        exceptionNotes: sessionData.exceptionNotes || '',
        progressScale: sessionData.progressScale || 3,
        halfPointStepNotes: sessionData.halfPointStepNotes || '',
      };

      const { data, error } = await supabase
        .from('sessions')
        .insert({
          title,
          session_data: cleanSessionData,
          mode,
          current_step: currentStep,
          view,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) {
        console.error('Error de Supabase al guardar:', error);
        return { data: null, error: error as Error };
      }

      console.log('Sesión guardada en Supabase con ID:', data?.id);
      return { data: data as SavedSession, error: null };
    } catch (error) {
      return { data: null, error: error as Error };
    }
  },

  // Obtener todas las sesiones
  async getAllSessions(): Promise<{ data: SavedSession[] | null; error: Error | null }> {
    try {
      const { data, error } = await supabase
        .from('sessions')
        .select('*')
        .order('updated_at', { ascending: false });

      if (error) {
        return { data: null, error: error as Error };
      }

      return { data: data as SavedSession[], error: null };
    } catch (error) {
      return { data: null, error: error as Error };
    }
  },

  // Obtener una sesión por ID
  async getSessionById(id: string): Promise<{ data: SavedSession | null; error: Error | null }> {
    try {
      const { data, error } = await supabase
        .from('sessions')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        return { data: null, error: error as Error };
      }

      return { data: data as SavedSession, error: null };
    } catch (error) {
      return { data: null, error: error as Error };
    }
  },

  // Actualizar una sesión existente
  async updateSession(
    id: string,
    title: string,
    sessionData: SessionData,
    mode: 'therapist' | 'patient',
    currentStep: number,
    view: 'guide' | 'recommendations' | 'manual'
  ): Promise<{ data: SavedSession | null; error: Error | null }> {
    try {
      // Crear una copia limpia y serializable del sessionData
      const cleanSessionData: SessionData = {
        problem: sessionData.problem || '',
        personalDiscoveryNotes: sessionData.personalDiscoveryNotes || '',
        relationalDiscoveryNotes: sessionData.relationalDiscoveryNotes || '',
        exceptionNotes: sessionData.exceptionNotes || '',
        progressScale: sessionData.progressScale || 3,
        halfPointStepNotes: sessionData.halfPointStepNotes || '',
      };

      const { data, error } = await supabase
        .from('sessions')
        .update({
          title,
          session_data: cleanSessionData,
          mode,
          current_step: currentStep,
          view,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();

      if (error) {
        return { data: null, error: error as Error };
      }

      return { data: data as SavedSession, error: null };
    } catch (error) {
      return { data: null, error: error as Error };
    }
  },

  // Eliminar una sesión
  async deleteSession(id: string): Promise<{ error: Error | null }> {
    try {
      const { error } = await supabase
        .from('sessions')
        .delete()
        .eq('id', id);

      if (error) {
        return { error: error as Error };
      }

      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  },
};

