# Projects (machine learning and research)

## VoiceChess, accessible chess for blind players

VoiceChess is an accessibility-first chess-learning app for blind and low-vision players. It can be fully controlled by voice, works with screen readers, and includes chess analysis tools and structured learning materials. It was tested with 15 blind chess athletes in Indonesia. I was the Product Manager and also worked on the deep learning models. It uses a multi-model computer-vision pipeline to read a physical chessboard: board detection with LRASPP segmentation, piece existence classification, rotation correction, and orientation regression, using ImageNet backbones fine-tuned for chess-specific tasks. VoiceChess won 1st Runner-Up in the Industrial Category (Inclusion and Community Services) at APICTA 2025, among 267 teams from 12 economies in Asia Pacific.

## NOGA, smart food analysis

NOGA is a health-focused mobile app, built with my UREEKA BINUS team since May 2025, that helps people make informed dietary choices by analysing ingredient lists and nutrition labels. It uses OCR, natural language processing and AI to read ingredients, then gives simplified, personalised insights: AI-generated summaries of each ingredient's health impact, plus allergen alerts and health-risk warnings. Users can scan labels or enter ingredients manually. The frontend is React Native and the backend is FastAPI using the Gemini API.

## Customer churn prediction

I worked on an end-to-end churn intelligence system for a telecom company that predicts not just whether customers churn, but when. We ran EDA on churn drivers across demographics, usage patterns and contract types, built survival-analysis models (Kaplan-Meier, Cox PH and XGBoost AFT) deployed on Hugging Face, and a CRM dashboard on Vercel that surfaces retention insights for business users. The app uses with a Flask and MongoDB backend and an HTML, CSS and JavaScript frontend. My tasks were EDA, building the ML model and ML DevOps.

## NER comparative study for resume parsing

I ran EDA on a resume dataset and implemented and evaluated 8 NLP models for named entity recognition, including HMM, CRF, BiLSTM and BERT variants. I was responsible for data preprocessing, feature engineering and model benchmarking. Tools: Python, spaCy, Scikit-learn.

## Lane drift detection

I built a classical computer-vision pipeline for lane detection using inverse perspective mapping, HLS colour filtering, Sobel edge detection and polynomial fitting to detect lane drift, running at up to 60 FPS. Tools: Python and OpenCV.
