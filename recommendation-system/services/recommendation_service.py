import bson
import pymongo
import os
from dotenv import load_dotenv

load_dotenv()

client = pymongo.MongoClient(os.getenv("MONGO_URI"))
db = client[os.getenv("DB_NAME")]

class RecommendationService:
    @staticmethod
    def get_user_recommendations(user_id):
        user_books = db.books.find({"borrowedBy": bson.ObjectId(user_id)})
        gender = {book["gender"] for book in user_books}

        recommendations = db.books.find({"gender": {"$in": list(gender)}})
        return [
            {
                "_id": str(recommendation["_id"]),
                "title": recommendation["title"],
                "author": recommendation["author"],
                "publishedDate": recommendation["publishedDate"],
                "gender": recommendation["gender"]
            }
            for recommendation in recommendations
        ]

def find_user_by_email_and_name(email, name):
    return db.users.find_one({"email": email, "name": name})

def find_books_borrowed_by_user(user_id):
    borrowed_books = db.users.find({"borrowedBooks": bson.ObjectId(user_id)})
    return [
        {
            "_id": str(book["_id"]),
            "title": book["title"],
            "author": book["author"],
            "publishedDate": book["publishedDate"],
            "gender": book["gender"],
        }
        for book in borrowed_books
    ]
