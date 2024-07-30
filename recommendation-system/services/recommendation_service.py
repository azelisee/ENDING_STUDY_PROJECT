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
        type = {book["type"] for book in user_books}

        recommendations = db.books.find({"type": {"$in": list(type)}})
        return [
            {
                "_id": str(recommendation["_id"]),
                "title": recommendation["title"],
                "author": recommendation["author"],
                "publishedDate": recommendation["publishedDate"],
                "type": recommendation["type"]
            }
            for recommendation in recommendations
        ]

def find_user_by_email_and_name(email, name):
    return db.users.find_one({"email": email, "name": name})
