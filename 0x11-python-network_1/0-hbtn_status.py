#!/usr/bin/python3
""" A Python script that fetchesa URL """
import urllib.request


if __name__ == "__main__":
    url = "https://alx-intranet.hbtn.io/status"
    with urllib.request.urlopen(url) as response:
        web_content = response.read()
        print("Body response:")
        print(f"\t- type: {type(web_content)}")
        print(f"\t- content: {web_content}")
        print(f"\t- utf8 content: {web_content.decode('utf-8')}")
