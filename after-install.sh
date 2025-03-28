#!/bin/bash
if [ "$NODE_ENV" != "production" ]; then
  echo "Running bob build in local environment..."
  yarn bob build
else
  echo "Skipping bob build in production environment..."
fi 