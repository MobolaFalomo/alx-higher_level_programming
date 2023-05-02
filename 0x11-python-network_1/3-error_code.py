#!/usr/bin/python3

"""
 A script that takes in a URL, sends a request to the
 URL and displays the body of the response (decoded in utf-8).
"""

import urllib.request
import sys


# from urllib.error import HTTPError
if __name__ == "__main__":
    data = sys.argv[1]
    req = urllib.request.Request(data)
    try:
        with urllib.request.urlopen(data) as response:
            print(response.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        print(f"Error code: {e.code}")
