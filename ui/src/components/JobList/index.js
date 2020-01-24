import React from 'react';
import { css } from 'styled-components';

import { useSelect } from '../../utils/db';

const JobList = ({ className }) => {
  const { error, response } = useSelect(
    `SELECT 
      j.id AS job_id,
      j.title AS job_title,
      c.name AS company_name
     FROM job j
     JOIN company c
      ON c.id = j.company_id;`
  );

  return (
    <div className={className}>
      {/* TODO: Replace this!  */}
      <pre
        css={css`
          background-color: white;

          margin: 32px auto 0;
          padding: 16px;

          max-width: 680px;
          width: 100%;

          border: 1px solid lightgray;
        `}
      >
        {JSON.stringify({ error, response }, null, 2)}
      </pre>
    </div>
  );
};

export default JobList;
