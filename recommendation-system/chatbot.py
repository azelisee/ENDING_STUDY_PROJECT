import streamlit as st
import requests

st.title("Library Recommendation Chatbot")

if "conversation" not in st.session_state:
    st.session_state.conversation = []

name = st.text_input("Enter your name")
email = st.text_input("Enter your email")

if st.button("Get Recommendations"):
    if name and email:
        response = requests.post(
            "http://localhost:8000/recommend",
            json={"name": name, "email": email}
        )
        if response.status_code == 200:
            recommendations = response.json().get("recommendations", [])
            if recommendations:
                st.write("Recommended Books:")
                for book in recommendations:
                    st.write(f"Title: {book['title']},  Author: {book['author']},  Type: {book['type']}")

            else:
                st.write("No recommendations found.")
        else:
            st.write("User not found or other error.")
    else:
        st.write("Please enter both name and email.")

st.title("Ask the Chatbot")

question = st.text_input("Ask a question about books, authors, etc.")

if st.button("Ask"):
    if question:
        st.session_state.conversation.append({"role": "user", "content": question})
        response = requests.post(
            "http://localhost:8000/chat",
            json={"question": question}
        )
        if response.status_code == 200:
            answer = response.json().get("response", "No answer found.")
            st.session_state.conversation.append({"role": "bot", "content": answer})
        else:
            st.write("Error in getting the answer.")
        # Réinitialiser la question après avoir envoyé
        st.session_state.question = ""
        st.experimental_rerun()

# Afficher l'historique de la conversation en haut
for message in st.session_state.conversation:
    if message["role"] == "user":
        st.write(f"User: {message['content']}")
    else:
        st.write(f"Bot: {message['content']}")

