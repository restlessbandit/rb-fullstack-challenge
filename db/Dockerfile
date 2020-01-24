# A Postgres image with the app schema and test data
FROM postgres:11.2-alpine
ENV POSTGRES_DB app

COPY init.sql /docker-entrypoint-initdb.d/
