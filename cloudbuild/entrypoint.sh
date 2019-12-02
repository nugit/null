#!/bin/bash

#
# Run Innovation CI process
#

set -x && set -e

pip install -r requirements.txt
python ../index.py
