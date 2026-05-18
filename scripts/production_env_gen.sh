#!/bin/bash

export APP_ENV=production

envsubst < .env.example > .env
