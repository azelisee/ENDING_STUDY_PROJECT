import pymongo
import os
from bson import ObjectId
from dotenv import load_dotenv

load_dotenv()

client = pymongo.MongoClient(os.getenv("MONGODB_URI"))
db = client[os.getenv("DB_NAME")]

class RecommendationService:
    @staticmethod
    def get_user_recommendations(user_id):
        user_books = db.books.find({"borrowedBy": ObjectId(user_id)})
        types = {book["type"] for book in user_books}

        # Logging to check retrieved types
        print(f"User ID: {user_id}, Types: {types}")

        recommendations = db.books.find({"type": {"$in": list(types)}})
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
