#!/usr/bin/python3
""" Python script that lists all states from the MySQL database called hbtn_0e_0_usa """
import MySQLdb
import sys

if __name__ == "__main__":
#Connect to MySQL server running on localhost at port 3306
    db = MySQLdb.connect(host="localhost", user=sys.argv[1], passwd=sys.argv[2],
		    db=sys.argv[3], port=3306)

#Create a cursor object
    cur = db.cursor()

#Execute the SQL query to select all the states from the table
    query = "SELECT * FROM states ORDER BY id ASC"
    cur.execute(query)

#Fetch all the rows returned by the SQL query and stores them in the 'rows' variable
    rows = cur.fetchall()
    for row in rows:
        print(row)

#Close the cursor and database connection
    cur.close()
    db.close()
