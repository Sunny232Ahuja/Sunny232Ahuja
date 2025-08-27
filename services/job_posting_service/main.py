from fastapi import FastAPI

app = FastAPI(title="Job Posting Service")


@app.get("/health")
def health():
    return {"status": "ok"}
