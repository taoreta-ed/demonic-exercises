from sklearn.linear_model import Ridge
from sklearn.model_selection import train_test_split
from sklearn.datasets import make_regression
from sklearn.metrics import mean_squared_error, r2_score

# Generar un conjunto de datos
X, y = make_regression(n_samples=100, n_features=2, noise=0.1, random_state=42)

# Dividir los datos en entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

def regresion(X_train, y_train, X_test, y_test, alpha=1.0):
    # Crear un modelo de Ridge con el alpha especificado
    ridge = Ridge(alpha=alpha)

    # Ajustar el modelo
    ridge.fit(X_train, y_train)

    # Hacer predicciones
    y_pred = ridge.predict(X_test)

    # Evaluar el modelo
    mse = mean_squared_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)

    print(f"Alpha: {alpha}")
    print("MSE:", mse)
    print("R2 Score:", r2)
    print("-----------------------")

# Probar varios valores de alpha
regresion(X_train, y_train, X_test, y_test, 0.1)
regresion(X_train, y_train, X_test, y_test, 1.0)
regresion(X_train, y_train, X_test, y_test, 10.0)
