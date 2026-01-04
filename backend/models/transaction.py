from database import db

class Transaction(db.Model):
    __tablename__ = "transactions"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)

    amount = db.Column(db.Float, nullable=False)
    type = db.Column(db.String(10), nullable=False)  # income | expense
    category = db.Column(db.String(50), nullable=False)
    date = db.Column(db.String(10), nullable=False)
