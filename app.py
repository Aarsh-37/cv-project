from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import torch
import torch.nn as nn
from torchvision import models, transforms
from PIL import Image
import io
import os

app = FastAPI(title="Leprosy Detection API")

# Setup CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Model Settings
MODEL_PATH = "model.pt"
class_names = ['Irrelevant', 'Leprosy', 'Non-Leprosy']
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Transformation for incoming images
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

# Global model variable
model = None

def load_model():
    global model
    if not os.path.exists(MODEL_PATH):
        return False
    
    # Initialize ResNet18 structure
    model = models.resnet18(pretrained=False)
    model.fc = nn.Linear(model.fc.in_features, 3)
    
    # Load weights
    model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
    model.to(device)
    model.eval()
    return True

@app.on_event("startup")
async def startup_event():
    if load_model():
        print(f"Model loaded successfully from {MODEL_PATH}")
    else:
        print(f"Warning: {MODEL_PATH} not found. Prediction endpoint will fail until model is generated.")

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    if model is None:
        if not load_model():
            return {"error": "Model not found. Please train the model first."}
            
    try:
        # Read and prepare image
        contents = await file.read()
        image = Image.open(io.BytesIO(contents)).convert('RGB')
        input_tensor = transform(image).unsqueeze(0).to(device)
        
        # Inference
        with torch.no_grad():
            outputs = model(input_tensor)
            probs = torch.nn.functional.softmax(outputs, dim=1)
            confidence, preds = torch.max(probs, 1)
            
        class_idx = preds.item()
        conf_val = confidence.item()
        label = class_names[class_idx]
        
        # Validation Logic
        if label == 'Irrelevant' or conf_val < 0.5:
            return {
                "error": "Please upload a proper skin image.",
                "details": f"Detection: {label} (Conf: {conf_val:.2f})"
            }
        
        return {
            "prediction": label,
            "confidence": conf_val,
            "status": "success"
        }
        
    except Exception as e:
        return {"error": f"Error processing image: {str(e)}"}

@app.get("/health")
def health():
    return {"status": "ok", "model_loaded": model is not None}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
