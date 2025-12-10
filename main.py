from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

@app.get("/hello")
def hello():
    return {"message": "こんにちは！FastAPI だよ！"}

class NameRequest(BaseModel):
    name: str

@app.post("/hello-name")
def hello_name(data: NameRequest):
    return {"message": f"こんにちは、{data.name}さん！"}