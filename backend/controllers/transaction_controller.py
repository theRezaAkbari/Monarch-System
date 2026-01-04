from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.transaction import Transaction
from database import db


from flask_jwt_extended.exceptions import NoAuthorizationError


transaction_bp = Blueprint(
    "transaction_bp",
    __name__,
    url_prefix="/api"
)

@transaction_bp.route("/transactions", methods=["POST"])
@jwt_required()
def create_transaction():
    user_id = int(get_jwt_identity())
    data = request.get_json()

    transaction = Transaction(
        user_id=user_id,
        amount=float(data["amount"]),
        type=data["type"],
        category=data["category"],
        date=data["date"]
    )

    db.session.add(transaction)
    db.session.commit()

    return jsonify({"message": "Transaction created"}), 201



@transaction_bp.route("/transactions", methods=["GET"])
@jwt_required()
def get_transactions():
    user_id = int(get_jwt_identity())

    transactions = (
        Transaction.query
        .filter_by(user_id=user_id)
        .order_by(Transaction.date.desc())
        .all()
    )

    return jsonify([
        {
            "id": t.id,
            "amount": t.amount,
            "type": t.type,
            "category": t.category,
            "date": t.date
        }
        for t in transactions
    ])



