#!/bin/bash
# A script that makes a request to 0.0.0.0:5000/catch_me that causes the server to respond with a message in the body of the response
curl -s -XPUT -d "user_id=123" "0.0.0.0:5000/catch_me" -H "Referer: 0.0.0.0:5000/catch_me" > /dev/null
