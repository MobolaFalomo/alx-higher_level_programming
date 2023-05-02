#!/usr/bin/python3
""" A script that takes 2 arguments in order to solve a challenge"""

import requests
import sys
if __name__ == "__main__":
    repo = sys.argv[1]
    owner = sys.argv[2]
    url = f"https://api.github.com/repos/{owner}/{repo}/commits?per_page=10"
    res = requests.get(url)
    if res.status_code == 200:
        commits = res.json()
        for commit in commits:
            sha = commit.get('sha')
            auth = commit.get('commit').get('author').get('name')
            print(f"{sha}: {auth}")
    else:
        print(f"{res.status_code}")
