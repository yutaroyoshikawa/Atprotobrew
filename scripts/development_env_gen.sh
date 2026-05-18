#!/bin/bash

export APP_ENV=development

envsubst < .env.example > .env
