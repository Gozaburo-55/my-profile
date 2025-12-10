from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware 

app = FastAPI()

# corsの設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*","null"],     # どのオリジンからでもOK
    allow_credentials=False,
    allow_methods=["*"],    #GET,POSTなど全部OK
    allow_headers=["*"],    # 全ヘッダーOK
)

class NameRequest(BaseModel):
    name: str

@app.get("/hello")
def hello():
    return {"message": "こんにちは！FastAPI だよ！"}

@app.post("/hello-name")
def hello_name(data: NameRequest):
    return {"message": f"こんにちは、{data.name}さん！"}