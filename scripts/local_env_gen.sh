#!/bin/bash

export APP_ENV=local

envsubst < .env.example > .env.local
