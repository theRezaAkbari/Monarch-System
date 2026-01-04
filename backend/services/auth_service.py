from database import db
from models.user import User
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token

def register_user(data):
    existing_user = User.query.filter_by(email=data["email"]).first()
    if existing_user:
        return {"message": "Email already exists"}, 400

    user = User(
        first_name=data["first_name"],
        last_name=data["last_name"],
        email=data["email"],
        password_hash=generate_password_hash(data["password"])

    )
    
    db.session.add(user)
    db.session.commit()

    return {"message": "User registered successfully"}, 201


def authenticate_user(data):
    email = data["email"]
    password = data["password"]

    user = User.query.filter_by(email=email).first()

    if not user or not user.check_password(password):
        return None

    token = create_access_token(identity=str(user.id))  # ✅ STRING
    return token

