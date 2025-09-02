#!/bin/bash
# Script to push to GitHub

echo "Setting up Git configuration..."
git config --global user.email "you@example.com"
git config --global user.name "GoyBoi"

echo "Adding GitHub remote..."
git remote add origin https://github.com/GoyBoi/mmwafrika.git

echo "Renaming branch to main..."
git branch -M main

echo "Pushing to GitHub..."
git push -u origin main

echo "Done! Check GitHub to see if the push was successful."