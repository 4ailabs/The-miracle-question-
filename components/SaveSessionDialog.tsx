import React, { useState } from 'react';
import Button from './common/Button';
import Card from './common/Card';

interface SaveSessionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string) => Promise<void>;
  isLoading?: boolean;
}

const SaveSessionDialog: React.FC<SaveSessionDialogProps> = ({
  isOpen,
  onClose,
  onSave,
  isLoading = false,
}) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSave = async () => {
    if (!title.trim()) {
      setError('Por favor ingresa un título para la sesión');
      return;
    }

    setError('');
    try {
      await onSave(title.trim());
      setTitle('');
      onClose();
    } catch (err) {
      setError('Error al guardar la sesión. Por favor intenta de nuevo.');
    }
  };

  const handleClose = () => {
    setTitle('');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Guardar Sesión</h2>
        <p className="text-slate-600 mb-4">
          Asigna un título a esta sesión para poder retomarla más tarde.
        </p>
        
        <div className="mb-4">
          <label htmlFor="session-title" className="block text-sm font-medium text-slate-700 mb-2">
            Título de la sesión
          </label>
          <input
            id="session-title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError('');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !isLoading) {
                handleSave();
              }
            }}
            placeholder="Ej: Sesión con Juan - 15/01/2024"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
            autoFocus
          />
          {error && (
            <p className="text-red-600 text-sm mt-2">{error}</p>
          )}
        </div>

        <div className="flex gap-3 justify-end">
          <Button
            onClick={handleClose}
            variant="secondary"
            disabled={isLoading}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSave}
            disabled={isLoading || !title.trim()}
          >
            {isLoading ? 'Guardando...' : 'Guardar'}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SaveSessionDialog;

