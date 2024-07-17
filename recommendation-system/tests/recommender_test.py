import unittest
from services.recommendation_service import RecommendationService

class TestRecommender(unittest.TestCase):
    def setUp(self):
        self.service = RecommendationService()

    def test_get_recommendations(self):
        user_id = 1
        recommendations = self.service.get_recommendations(user_id)
        self.assertEqual(len(recommendations), 5)
        self.assertEqual(recommendations, [f"Book {i}" for i in range(1, 6)])

if __name__ == "__main__":
    unittest.main()
