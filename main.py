from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware 
import random

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

class CalorieRequest(BaseModel): #追加
    weight: float #体重(kg)
    minutes: int  #時間(分)


@app.get("/hello")
def hello():
    return {"message": "こんにちは！FastAPI だよ！"}

@app.post("/hello-name")
def hello_name(data: NameRequest):
    return {"message": f"こんにちは、{data.name}さん！"}

@app.post("/calculate-calorie")
def calculate_calorie(data: CalorieRequest):
    met = 4.0  # 軽い運動の仮メタ値
    calories = met * data.weight * data.minutes / 60.0
    return {"calories": round(calories, 1)}

