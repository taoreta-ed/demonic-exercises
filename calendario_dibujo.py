import random
topics = [
    "Aliens", "Taylor Swift", "Animales", "Ciudades futuristas", "Superhéroes",
    "Comida", "Viajes espaciales", "Personajes de cuentos de hadas", "Steampunk",
    "Mundos subacuáticos", "Personajes históricos", "Estilo retro", "El fin del mundo",
    "Zombies", "Ciudades antiguas", "Dragones", "Viajes en el tiempo", "Misterios del mar",
    "Robots", "Arte abstracto", "Paisajes surrealistas", "Mitología griega", "Cuentos de terror",
    "Naturaleza", "Universos paralelos", "Juegos de video", "Cultura pop", "Magia y hechicería",
    "Futurismo", "Ciencia ficción", "Mundos de fantasía", "Inventos locos", "Personajes de anime",
    "Música clásica", "Estilos arquitectónicos", "Películas de los 80", "Personajes de libros",
    "Viajes en el espacio", "Objetos mágicos", "Héroes de la antigüedad", "Tecnología avanzada",
    "Criaturas mitológicas", "Ciberpunk", "Culturas antiguas", "Monstruos marinos", "Cuentos de Navidad"
]

selected_topic = random.choice(topics)
print(f"El tema es: {selected_topic}")