from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
import pandas as pd

# Créer un vecteur TF-IDF des genres
tfidf = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf.fit_transform(books['gender'])

# Calculer la similarité de cosinus entre les livres
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

# Créer une série avec les indices de titres
indices = pd.Series(books.index, index=books['title']).drop_duplicates()
