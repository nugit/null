#!/bin/bash

#
# Run Innovation CI process
#

set -x && set -e

pip install -r cloudbuild/requirements.txt
python index.py
