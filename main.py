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

class AttackRequest(BaseModel):          # ★ 追加
    attack: int                          # 攻撃力
    defense: int                         # 敵の防御

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

@app.post("/attack")                     # ★ 新しい攻撃API
def attack(data: AttackRequest):
    # 基本ダメージ = 攻撃 - 防御（最低1）
    base = max(1, data.attack - data.defense)

    # -2〜+2 のランダム補正をかける
    variance = random.randint(-2, 2)
    damage = max(0, base + variance)

    return {
        "damage": damage,
        "message": f"敵に {damage} ダメージ！"}

