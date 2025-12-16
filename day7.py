from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class WorkoutData(BaseModel):
    name: str
    weight: float
    reps: int

@app.post("/calc")
def calc_point(data: WorkoutData):
    point = data.weight * data.reps * 0.1
    return {
        "message": f"{data.name}さんのポイントは {point:.1f} です！",
        "point": point
    }
