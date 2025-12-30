from flask import Flask
from flask_cors import CORS
from config import Config
from database import db

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)
    db.init_app(app)

    @app.route("/")
    def health():
        return {"status": "Monarch MVP is running"}

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
