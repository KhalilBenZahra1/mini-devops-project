from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from prometheus_client import Counter, generate_latest, CONTENT_TYPE_LATEST
from fastapi.responses import Response

app = FastAPI(title="Mini DevOps Backend")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

request_counter = Counter(
    "app_requests_total",
    "Total number of requests"
)

@app.get("/")
def root():
    request_counter.inc()
    return {"message": "Backend is running"}

@app.get("/health")
def health():
    request_counter.inc()
    return {"status": "ok"}

@app.get("/api/info")
def info():
    request_counter.inc()
    return {
        "app": "mini-devops-project",
        "version": "1.0.0",
        "backend": "FastAPI"
    }

@app.get("/metrics")
def metrics():
    return Response(
        generate_latest(),
        media_type=CONTENT_TYPE_LATEST
    )