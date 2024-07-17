from fastapi import FastAPI
from services.recommendation_service import RecommendationService

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Recommendation System"}

@app.get("/recommendations/{user_id}")
def get_recommendations(user_id: int):
    service = RecommendationService()
    recommendations = service.get_recommendations(user_id)
    return {"user_id": user_id, "recommendations": recommendations}
