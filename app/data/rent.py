# -*- coding: utf-8 -*-
from home import database

class Rent(database.Model):
    __tablename__="rent"
    rent_id = database.Column(database.String(30), nullable=False, primary_key=True)
    user_id = database.Column(database.String(30), database.ForeignKey("user.user_id"), nullable=False)
    device_id = database.Column(database.String(30), database.ForeignKey("device.device_id"), nullable=False)
    start_date = database.Column(database.String(30), nullable=False)
    deadline_date = database.Column(database.String(30), nullable=False)
    state = database.Column(database.Integer, nullable=False)
    return_date = database.Column(database.String(30), nullable=True)

    def __init__(self, rent_id, user_id, device_id, start_date, deadline_date, state, return_date):
        self.rent_id = rent_id
        self.user_id = user_id
        self.device_id = device_id
        self.start_date = start_date
        self.deadline_date = deadline_date
        self.state = state
        self.return_date = return_date