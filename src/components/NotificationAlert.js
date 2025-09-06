import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert.jsx';
import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react';

const NotificationAlert = ({ 
  type = 'info', 
  title, 
  description, 
  onClose,
  className = '' 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="h-4 w-4" />;
      case 'error':
        return <AlertCircle className="h-4 w-4" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getTypeClass = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 text-green-800 border-green-200';
      case 'error':
        return 'bg-red-50 text-red-800 border-red-200';
      case 'warning':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      default:
        return 'bg-gray-50 text-gray-800 border-gray-200';
    }
  };

  return (
    <Alert 
      className={`relative rounded-lg border p-4 ${getTypeClass()} ${className} font-body`}
      variant={type === 'success' ? 'default' : type}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-0.5">
          {getIcon()}
        </div>
        <div className="ml-3 flex-1">
          {title && (
            <AlertTitle className="text-sm font-medium font-heading">
              {title}
            </AlertTitle>
          )}
          {description && (
            <AlertDescription className="text-sm mt-1">
              {description}
            </AlertDescription>
          )}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-4 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <span className="sr-only">Close</span>
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </Alert>
  );
};

export default NotificationAlert;