#!/bin/sh

echo "************ Starting get ready!!! ************"
echo "*************** create database ***************"
npm run db:all
echo "******************** sleep ********************"
sleep 10
echo "******************** start ********************"
npm run start:prod