from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# ★ CORS の設定（練習用なのでゆるゆる設定でOK）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # どのオリジン（ページ）からでもOK
    allow_credentials=False,
    allow_methods=["*"],      # GET / POST など全部OK
    allow_headers=["*"],      # 全ヘッダーOK
)

class NameData(BaseModel):
    name:str

@app.post("/hello")
def say_hello(data: NameData):
    return{"message":f"こんにちは、{data.name}さん！"}
