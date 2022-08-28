#!/usr/bin/env bash
set -e

CID=$(cat maculaCid)
url="http://localhost:3000/website/api/add/$CID"
FINAL_URL="https://$CID.on.localhost/"


curl --location --request GET $url



echo "all done click here $FINAL_URL"