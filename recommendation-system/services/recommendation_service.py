from models.recommender_model import RecommenderModel

class RecommendationService:
    def __init__(self):
        self.model = RecommenderModel()

    def get_recommendations(self, user_id):
        # Implémentation fictive de l'algorithme de recommandation
        recommendations = self.model.recommend(user_id)
        return recommendations
