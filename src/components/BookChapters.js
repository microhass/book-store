import React from 'react';
import PropTypes from 'prop-types';

const BookChapters = ({ chapter }) => (
  <div className="chapters">
    <p className="current-chapter">current chapter</p>
    <h6 className="chapter">
      {`chapter ${chapter}`}
    </h6>

    <div className="chapter-actions actions">
      <button type="button">update progress</button>
    </div>
  </div>
);

BookChapters.propTypes = {
  chapter: PropTypes.number,
};

BookChapters.defaultProps = {
  chapter: 1,
};

export default BookChapters;
