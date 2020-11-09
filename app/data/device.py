# -*- coding: utf-8 -*-

from home import database

class Device(database.Model):
    __tablename__ = "device"
    device_id = database.Column(database.String(30), nullable=False, primary_key=True)
    phone_number = database.Column(database.String(30), nullable=False)
    carrier = database.Column(database.String(30), nullable=False)
    state = database.Column(database.String(3), nullable=False)
    description = database.Column(database.String(100), nullable=True)

    def __init__(self, device_id, phone_number, carrier, state, description):
        self.device_id = device_id
        self.phone_number = phone_number
        self.carrier = carrier
        self.state = state
        self.description =  description


