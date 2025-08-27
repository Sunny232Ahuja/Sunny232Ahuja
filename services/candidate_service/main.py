from fastapi import FastAPI

app = FastAPI(title="Candidate Service")


@app.get("/health")
def health():
    return {"status": "ok"}
