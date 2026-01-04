from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import Config
from database import db
from controllers.auth_controller import auth_bp
from controllers.transaction_controller import transaction_bp
from controllers.user_controller import user_bp
from flask_jwt_extended.exceptions import JWTExtendedException
from flask import jsonify



def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    print(app.config["SQLALCHEMY_DATABASE_URI"])


    CORS(app, supports_credentials=True)

    db.init_app(app)
    JWTManager(app)

    # ✅ Register Blueprints HERE
    app.register_blueprint(auth_bp)
    app.register_blueprint(transaction_bp)
    app.register_blueprint(user_bp)
    @app.route("/health")
    def health():
        return {"status": "ok"}
    
    return app

app = create_app()
if __name__ == "__main__":
    app.run(debug=True)
