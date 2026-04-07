# 🏥 MEDIXAL: Advanced Leprosy Detection Portal

MEDIXAL is a professional-grade medical AI platform designed for the early screening and detection of Leprosy. It features a high-precision 3-class neural analysis system with built-in validation for non-skin imagery.

![MEDIXAL Desktop Interface](file:///C:/Users/VICTUS/.gemini/antigravity/brain/7de0d096-c47b-4d8e-9eeb-5c8615478f9e/medixal_full_premium_ui_1772218904322.png)

## 🚀 Key Features

- **Brain-Powered 3-Class AI**: Classifies imagery into `Leprosy`, `Non-Leprosy`, or `Irrelevant` (validation).
- **Intelligent Rejection Link**: Automatically identifies and rejects non-skin uploads (cars, animals, landscapes) to maintain diagnostic integrity.
- **Premium Aether Scanner**: A unified "one-frame" scanning interface with real-time neural processing animations.
- **MEDIXAL Brand Identity**: Modern medical aesthetic with a sticky navigation bar, high-impact hero sections, and professional grid layouts.
- **FastAPI Core**: High-performance, asynchronous backend serving the PyTorch model.

## 🏗️ Architecture

- **AI Model**: PyTorch ResNet-18 (3 Classes).
- **Backend**: FastAPI with async inference handlers.
- **Frontend**: React 19 + Vite 7 + Framer Motion (Animations) + Lucide React (Icons).
- **Design System**: Medical Blue Palette, Inter/Poppins Typography, CSS 12-column grid.

## 🛠️ Installation & Setup

### 1. Requirements
- Python 3.10+
- Node.js 18+
- PyTorch & Torchvision

### 2. Backend Setup
```bash
# In the root directory
pip install fastapi uvicorn torch torchvision pillow python-multipart
python app.py
```
The backend will start on `http://localhost:8000`.

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will start on `http://localhost:5173`.

## 🧠 Training Information

The model was trained on a custom dataset of skin lesions, augmented with synthesized "Irrelevant" class data (general objects) to ensure the system cannot be spoofed by non-medical imagery.

- **Preprocessing**: 224x224 RGB resizing & ImageNet normalization.
- **Accuracy**: ~81% Training Accuracy over initial rapid-fire epochs.

## ⚠️ Disclaimer
This tool is intended for early screening assistance and educational purposes. It is **not** a replacement for professional clinical diagnosis. Always consult a qualified medical professional for health concerns.

---
© 2026 MEDIXAL AI. Designed with precision for global health tracking.
