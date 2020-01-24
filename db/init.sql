CREATE DATABASE jobapp;

\c jobapp;

-- Schema
-- TODO: Add more tables/columns!

CREATE TABLE company (
  id BIGSERIAL PRIMARY KEY,

  name TEXT NOT NULL,

  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE job (
  id BIGSERIAL PRIMARY KEY,

  title TEXT NOT NULL,
  company_id BIGINT REFERENCES company(id),

  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Test data
-- TODO: Add more data!
INSERT INTO company
  (name)
VALUES
  ('Restless Bandit');

INSERT INTO job
  (title, company_id)
VALUES
  ('Software Engineer', (SELECT id FROM company WHERE name = 'Restless Bandit'));
