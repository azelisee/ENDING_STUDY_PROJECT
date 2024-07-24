import pandas as pd

# Définir un DataFrame exemple pour les besoins de démonstration
user_history = pd.DataFrame({
    'user_id': ['669f244b6ab2abccf943e368','669fb7f789690f6185002bc6','66a01cfd4c3307c63ec9002f','66a01cfd4c3307c63ec9002f', '669f227539d3a0cd3774decb'],
    'book_id': ['669fa4acf3b4ff5994fbba03','669fa4c8f3b4ff5994fbba05','669fa4e3f3b4ff5994fbba09','669fa4f4f3b4ff5994fbba0b','669fa502f3b4ff5994fbba0d']
})

def get_user_recommendations(user_id):
    user_books = user_history[user_history['user_id'] == user_id]['book_id']
    # Logique de recommandation basée sur user_books
    recommendations = user_books.tolist()
    return recommendations

# Exemple d'utilisation
user_id = '669f244b6ab2abccf943e368'
print(f"Recommendations for {user_id}: {get_user_recommendations(user_id)}")

class RecommendationService:
    @staticmethod
    def recommend_books(user_id):
        return get_user_recommendations(user_id)
