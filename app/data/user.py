# -*- coding: utf-8 -*-

from home import database


class User(database.Model):
    __tablename__ = "user"
    user_id = database.Column(database.String(30), nullable=False, primary_key=True)
    user_pw = database.Column(database.String(100), nullable=False)
    user_name = database.Column(database.String(30), nullable=False)
    phone_number = database.Column(database.String(30), nullable=False)
    department = database.Column(database.String(30), nullable=True)
    roles = database.Column(database.String(30), nullable=True)
    state = database.Column(database.String(5), nullable=True)

    def __init__(self, user_id, user_pw, user_name, phone_number, department, roles, state):
        self.user_id = user_id
        self.user_pw = user_pw,
        self.user_name = user_name,
        self.phone_number = phone_number,
        self.department = department,
        self.roles = roles,
        self.state = state

    def is_authenticated(self):
        return self.is_authenticated

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_user_id(self):
        return self.user_id
