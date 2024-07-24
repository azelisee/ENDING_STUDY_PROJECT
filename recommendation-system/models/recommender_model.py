import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# Exemple de matrice de similarité de cosine (cela doit être basé sur vos données)
cosine_sim = np.array([[1, 0.8, 0.6], [0.8, 1, 0.4], [0.6, 0.4, 1]])

def get_recommendations(title, cosine_sim=cosine_sim):
    # Obtenir l'indice du livre correspondant
    idx = indices[title]

    # Obtenir les scores de similarité de cosinus
    sim_scores = list(enumerate(cosine_sim[idx]))

    # Trier les scores de similarité
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Obtenir les indices des 5 livres les plus similaires
    sim_scores = sim_scores[1:6]
    book_indices = [i[0] for i in sim_scores]

    # Retourner les titres des livres les plus similaires
    return books['title'].iloc[book_indices]





