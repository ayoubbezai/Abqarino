import PropTypes from 'prop-types';

const Button = ({ children, onClick, className = "" }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-yellow-400 text-white px-6 py-2 rounded-lg font-medium 
                      hover:bg-yellow-500 transition-colors duration-300 
                      shadow-md hover:shadow-lg ${className}`}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
};

Button.defaultProps = {
    onClick: () => { },
    className: ""
};

export default Button; 