from flask import Blueprint, request, jsonify
from services.auth_service import register_user, authenticate_user
from models.user import User

auth_bp = Blueprint("auth", __name__, url_prefix="/auth")


@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    response, status = register_user(data)
    return jsonify(response), status


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    token = authenticate_user(data)

    if not token:
        return {"message": "Invalid email or password"}, 401

    return {"access_token": token}
