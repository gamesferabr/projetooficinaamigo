from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

# Servir o html
@app.get("/")
def read_root():
    return FileResponse("static/oficina.html")

