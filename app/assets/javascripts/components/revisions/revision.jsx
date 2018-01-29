import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DiffViewer from './diff_viewer.jsx';


const Revision = ({ revision }) => {
  const ratingClass = `rating ${revision.rating}`;
  const ratingMobileClass = `${ratingClass} tablet-only`;

  return (
    <tr className="revision">
      <td className="tooltip-trigger desktop-only-tc">
        <p className="rating_num hidden">{revision.rating_num}</p>
        <div className={ratingClass}><p>{revision.pretty_rating || '-'}</p></div>
        <div className="tooltip dark">
          <p>{I18n.t(`articles.rating_docs.${revision.rating || '?'}`)}</p>
        </div>
      </td>
      <td>
        <div className={ratingMobileClass}><p>{revision.pretty_rating || '-'}</p></div>
        <a href={revision.article_url} target="_blank" className="inline"><p className="title">{revision.title}</p></a>
      </td>
      <td className="desktop-only-tc">{revision.revisor}</td>
      <td className="desktop-only-tc">{revision.characters}</td>
      <td className="desktop-only-tc date"><a href={revision.url}>{moment(revision.date).format('YYYY-MM-DD   h:mm A')}</a></td>
      <td>
        <DiffViewer revision={revision} editors={[revision.revisor]} />
      </td>
    </tr>
  );
};

Revision.propTypes = {
  revision: PropTypes.object
};

export default Revision;
