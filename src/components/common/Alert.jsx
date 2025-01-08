import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type, message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const alertStyles = {
        success: {
            bg: 'bg-green-100',
            text: 'text-green-800',
            border: 'border-green-400',
            icon: (
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            )
        },
        error: {
            bg: 'bg-red-100',
            text: 'text-red-800',
            border: 'border-red-400',
            icon: (
                <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
            )
        }
    };

    const style = alertStyles[type] || alertStyles.error;

    return (
        <div className={`fixed top-4 right-4 z-50 ${style.bg} ${style.text} px-4 py-3 rounded-lg border ${style.border} shadow-lg`}>
            <div className="flex items-center gap-2">
                {style.icon}
                <div className="py-1">
                    <p className="text-sm font-medium">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="ml-4 text-gray-400 hover:text-gray-600"
                >
                    <span className="sr-only">Close</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

Alert.propTypes = {
    /** The type of alert to display ('success' or 'error') */
    type: PropTypes.oneOf(['success', 'error']).isRequired,
    /** The message to display in the alert */
    message: PropTypes.string.isRequired,
    /** Callback function to close the alert */
    onClose: PropTypes.func.isRequired
};

Alert.defaultProps = {
    type: 'error' // Fallback to error if type is not provided
};

export default Alert; 