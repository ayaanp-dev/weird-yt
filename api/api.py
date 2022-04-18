from fastapi import FastAPI
import ytapi_stuff as life

app = FastAPI()


@app.get("/daily")
def daily():
    return {"video_id": life.get_stuff()[0]}

@app.get("/other_vids")
def other_stuff():
    return {"video_ids": life.get_stuff()[1]}