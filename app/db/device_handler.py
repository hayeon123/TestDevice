# -*- coding: utf-8 -*-
from home import database
from logger import logger
from data.device import Device

def add_device(req):
    device_id = req[u'device_id']
    phone_number = req[u"phone_number"]
    carrier = req[u"carrier"]
    state = req[u"state"]
    description = req[u'description']

    device = Device(device_id, phone_number, carrier, state, description)


    logger.info(">>>> Provided Todo instance todo: %s" % str(device))

    database.session.add(device)
    database.session.commit()
    logger.info(">>>> Added todo in DB (device_id::%s)" % (device_id))