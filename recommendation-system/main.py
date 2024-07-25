from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
from services.recommendation_service import RecommendationService, find_user_by_email_and_name
import openai
import os

app = FastAPI()

class UserRequest(BaseModel):
    email: str
    name: str

class ChatRequest(BaseModel):
    question: str

openai.api_key = os.getenv("OPENAI_API_KEY")

conversation_history = []

@app.post("/recommend")
async def recommend_books(user_request: UserRequest):
    user = find_user_by_email_and_name(user_request.email, user_request.name)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    user_id = str(user["_id"])
    recommendations = RecommendationService.get_user_recommendations(user_id)
    return {"recommendations": recommendations}

@app.post("/chat")
async def chat_with_bot(chat_request: ChatRequest):
    global conversation_history
    try:
        conversation_history.append({"role": "user", "content": chat_request.question})
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                *conversation_history
            ]
        )
        answer = response.choices[0].message["content"].strip()
        conversation_history.append({"role": "assistant", "content": answer})
        return {"response": answer}
    except openai.error.InvalidRequestError as e:
        raise HTTPException(status_code=500, detail=str(e))
