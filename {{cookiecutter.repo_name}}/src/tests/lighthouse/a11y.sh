#!/usr/bin/env bash

# Add new URLs to this list as they are added to the app
URLS=(/ /about)

# The threshold can be configured and changed as desired (or extended to support other checks)
for i in ${URLS[@]}; do
    echo "RUNNING TESTS ON '${i}'"
    lighthouse-ci http://localhost:5000${i} --accessibility=100
done

exit 0
