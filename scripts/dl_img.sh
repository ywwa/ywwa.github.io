#!/bin/bash

githubUrl="https://github.com/ywwa.png"
outputFile="./src/assets/img/ywwa.png"

# Use curl to follow redirects, fetch the content, and save it to a file
curl -L -o "$outputFile" "$githubUrl"

# Check if the download was successful
if [ $? -eq 0 ]; then
    echo "Download completed successfully. Image saved to: $outputFile"
else
    echo "Download failed."
fi
