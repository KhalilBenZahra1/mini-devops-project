# Mini DevOps Project

Mini projet DevOps basé sur une application simple avec Frontend React et Backend FastAPI.

## Architecture

- frontend/ : interface React
- backend/ : API FastAPI
- k8s/ : manifests Kubernetes
- docker/ : fichiers liés à Docker
- .github/workflows/ : pipeline CI/CD GitHub Actions

## Technologies utilisées

- React
- FastAPI
- Docker
- Kubernetes / Minikube
- GitHub Actions
- Prometheus / Grafana
- Trivy
- ArgoCD

## Backend endpoints

- /health
- /api/info
- /metrics

## Exécution locale

### Backend

cd backend
pip install -r requirements.txt
uvicorn main:app --reload

### Frontend

cd frontend
npm install
npm run dev

## Docker

docker build -t mini-backend ./backend
docker build -t mini-frontend ./frontend

## Kubernetes

kubectl apply -f k8s/
