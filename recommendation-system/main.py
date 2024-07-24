from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
from services.recommendation_service import RecommendationService, find_user_by_email_and_name

app = FastAPI()

class UserRequest(BaseModel):
    email: str
    name: str

@app.post("/recommend")
async def recommend_books(user_request: UserRequest):
    user = find_user_by_email_and_name(user_request.email, user_request.name)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    user_id = str(user["_id"])
    recommendations = RecommendationService.get_user_recommendations(user_id)
    return {"recommendations": recommendations}
