import tensorflow as tf
from tensorflow.keras.models import Sequential, load_model, model_from_json
from tensorflow.keras.layers import Dense, Input
import numpy as np

# 1. Define and Compile Your Model
def create_model():
    model = Sequential()
    model.add(Input(shape=(32,)))  # Define input shape here
    model.add(Dense(64, activation='relu'))
    model.add(Dense(10, activation='softmax'))
    return model

# Create the model
model = create_model()
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# 2. Save the Model Architecture and Weights
# Saving the entire model (architecture + weights) in Keras format
model.save('my_model.keras')

# Save weights to a separate file with the correct naming convention
model.save_weights("my_model_weights.weights.h5")

# 3. Load the Model (Using Keras Format)
try:
    loaded_model = load_model('my_model.keras')
    print("Model loaded successfully from Keras file.")
except Exception as e:
    print(f"Error loading model from Keras file: {e}")

# 4. Load Model (Using JSON and Weights)
try:
    # Load model architecture from JSON (if needed)
    model_json = model.to_json()
    with open("my_model.json", "w") as json_file:
        json_file.write(model_json)
    
    # Create the model from the JSON
    loaded_model = model_from_json(model_json)
    
    # Load weights into the new model
    loaded_model.load_weights("my_model_weights.weights.h5")
    print("Model loaded successfully from JSON and weights.")
except Exception as e:
    print(f"Error loading model from JSON and weights: {e}")

# 5. Verify the Loaded Model (Optional)
loaded_model.summary()

# 6. Use the Loaded Model (For example, making predictions)
input_data = np.random.rand(1, 32)  # Random input data matching input shape
predictions = loaded_model.predict(input_data)
print("Predictions:", predictions)
