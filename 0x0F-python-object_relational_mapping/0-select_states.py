#!/usr/bin/python3
import MySQLdb
import sys

#Take the mysql username, password and database name from the command line
mysql_username = sys.argv[1]
mysql_password = sys.argv[2]
database_name = sys.argv[3]

#Connect to MySQL server running on localhost at port 3306
db = MySQLdb.connect(host="localhost", port=3306, user=mysql_username, passwd=mysql_password, db=database_name)

#Prepare a cursor object
cursor = db.cursor()

#Execute the SQL query to select all the states from the table
query = "SELECT * FROM states ORDER BY id ASC"
cursor.execute(query)

#Fetch all the rows and print them out
for row in cursor.fetchall():
    print(row)

#Close the cursor and database connection
cursor.close()
db.close()
