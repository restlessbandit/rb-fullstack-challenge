#!/bin/bash
#
# Starts the app locally

docker-compose down;

docker-compose build;

docker-compose up;