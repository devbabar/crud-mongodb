# CRUD-MongoDB
Simple application to perform basic Create, read, update, and delete (CRUD) operations using Python's framework Flask and MongoDB as database. 

# Steps to run this project:

## Step 1:
Create a folder.

mkdir mongodb_pymongo

Create a virtual enviroment. 

$pip install virtualenv

$ cd mongodb_pythongo

$ virtualenv env

$ source env/bin/activate

## Step 2:
Install requirements.txt

$pip install -r requirements.txt

## Step 3:
NoSQL database is been used for this project. mLab: Database-as-a-Service for MongoDB. 
1. Create an account at mLab.
2. Create a database "mongo_portfolio_projects" or whatever you like.
3. Create a Collection: "users".

## Step 4:
Add your own credentials to the following.

app.config["MONGO_DBNAME"]

app.config["MONGO_URI"] 

## Step 5:
Run project.

$ python mongodb_pymongo.py

## Object in users collection at mLAb:

{
    "_id": {
        "$oid": "5b644abeb2ea1e07d856a829"
    },
    "name": "Simon",
    "language": "English"
}
