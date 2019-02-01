import PropTypes from 'prop-types';
import React     from 'react';

const IconClock = ({ className, onClick }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        className={className}
        onClick={onClick}
    >
        <path fill='#7F8397' fillRule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm2.854-5.854a.5.5 0 0 1-.708.708l-2.5-2.5A.5.5 0 0 1 7.5 8V3.5a.5.5 0 0 1 1 0v4.293l2.354 2.353z' />
    </svg>
);

IconClock.propTypes = {
    className: PropTypes.string,
    onClick  : PropTypes.func,
};

export { IconClock };
