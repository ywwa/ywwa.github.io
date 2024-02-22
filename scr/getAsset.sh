#!/bin/bash


githubUrl="https://github.com/ywwa.png"
outputFile="./src/assets/images/ywwa.png"

if [ -d "./src/assets/images" ]; then
  curl -L -o "$outputFile" "$githubUrl"
else
  mkdir "./src/assets/images";
  curl -L -o "$outputFile" "$githubUrl"
fi;

if [ $? -eq 0 ]; then
  echo "Download completed"
else
  echo "Download failed"
fi
