import streamlit as st
import requests

st.title("Library Recommendation Chatbot")

name = st.text_input("Enter your name")
email = st.text_input("Enter your email")

if st.button("Get Recommendations"):
    if name and email:
        response = requests.post(
            "http://localhost:8001/recommend",
            json={"name": name, "email": email}
        )
        if response.status_code == 200:
            recommendations = response.json().get("recommendations", [])
            if recommendations:
                st.write("Recommended Books:")
                for book in recommendations:
                    st.write(f"Title: {book['title']}, Author: {book['author']}, Gender: {book['gender']}")
            else:
                st.write("No recommendations found.")
        else:
            st.write("User not found or other error.")
    else:
        st.write("Please enter both name and email.")
