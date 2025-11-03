import React, { useState, useEffect } from 'react';
import type { SavedSession } from '../types';
import { sessionService } from '../lib/sessionService';
import Button from './common/Button';
import Card from './common/Card';
import { Trash2 } from 'lucide-react';

interface SavedSessionsListProps {
  isOpen: boolean;
  onClose: () => void;
  onLoadSession: (session: SavedSession) => void;
}

const SavedSessionsList: React.FC<SavedSessionsListProps> = ({
  isOpen,
  onClose,
  onLoadSession,
}) => {
  const [sessions, setSessions] = useState<SavedSession[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      loadSessions();
    }
  }, [isOpen]);

  const loadSessions = async () => {
    setIsLoading(true);
    setError('');
    const { data, error: err } = await sessionService.getAllSessions();
    
    if (err) {
      setError('Error al cargar las sesiones. Verifica tu conexión a Supabase.');
      console.error(err);
    } else {
      setSessions(data || []);
    }
    setIsLoading(false);
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    const sessionToDelete = sessions.find(s => s.id === id);
    const sessionTitle = sessionToDelete?.title || 'esta sesión';
    
    if (!confirm(`¿Estás seguro de que quieres eliminar "${sessionTitle}"?\n\nEsta acción no se puede deshacer.`)) {
      return;
    }

    setDeletingId(id);
    const { error: err } = await sessionService.deleteSession(id);
    
    if (err) {
      alert('Error al eliminar la sesión. Por favor intenta de nuevo.');
      console.error('Error al eliminar:', err);
    } else {
      console.log('Sesión eliminada exitosamente:', id);
      await loadSessions();
    }
    setDeletingId(null);
  };

  const handleLoadSession = (session: SavedSession) => {
    onLoadSession(session);
    onClose();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-2xl w-full max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-slate-800">Sesiones Guardadas</h2>
          <Button onClick={onClose} variant="secondary" className="px-3 py-1.5 text-sm">
            Cerrar
          </Button>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-8">
            <p className="text-slate-600">Cargando sesiones...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-red-800">{error}</p>
            <Button onClick={loadSessions} variant="secondary" className="mt-2">
              Reintentar
            </Button>
          </div>
        ) : sessions.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-slate-600">No hay sesiones guardadas aún.</p>
            <p className="text-slate-500 text-sm mt-2">
              Guarda una sesión para poder retomarla más tarde.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-3">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-4 hover:bg-slate-100 transition-colors cursor-pointer"
                  onClick={() => handleLoadSession(session)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-1">
                        {session.title}
                      </h3>
                      <div className="flex gap-4 text-sm text-slate-600">
                        <span>
                          {session.mode === 'therapist' ? 'Terapeuta' : 'Paciente'}
                        </span>
                        <span>•</span>
                        <span>Paso {session.current_step} / 6</span>
                        <span>•</span>
                        <span>{formatDate(session.updated_at)}</span>
                      </div>
                      {session.session_data.problem && (
                        <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                          {session.session_data.problem}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={(e) => handleDelete(session.id, e)}
                      disabled={deletingId === session.id}
                      className="ml-4 p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Eliminar sesión"
                    >
                      {deletingId === session.id ? (
                        <span className="text-sm text-red-600">Eliminando...</span>
                      ) : (
                        <Trash2 className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default SavedSessionsList;

