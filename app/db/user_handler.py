# -*- coding: utf-8 -*-

from home import database, bcrypt
from data.user import User
from data.todo import Todo
from data.groups import Groups
from logger import logger
from db.group_handler import find_group_num_by_code


def add_user(req):
    user = User(req["user_id"], bcrypt.generate_password_hash(req["user_pw"]), req["user_name"], req["phone_number"],
                req["department"], req["roles"], req["state"])
    logger.info(">>>> Provided User instance user: %s" % str(user))
    if not is_registed_user(user.user_id):
        database.session.add(user)
        database.session.commit()
        logger.info(">>>> Added user in DB (user_id::%s)" % user.user_id)
        return True

    else:
        logger.warning(">>>> Fail to add user in DB (user_id::%s)" % user.user_id)
        return False


def modify_user(user_id, req):
    logger.info(">>>> Modify info form from front-end: %s" % req)
    user = User.query.filter_by(id=id).first()

    if req["user_pw"] != '':
        user.user_pw = bcrypt.generate_password_hash(req["user_pw"])

    if req["user_name"] != '':
        user.user_name = req["user_name"]

    if req["phone_number"] !='':
        user.phone_number = req["phone_number"]

    if req["department"] != '':
        user.department = req["department"]

    if req["roles"] != '':
        user.roles = req["roles"]

    if req["state"] != '':
        user.state = req["state"]

    database.session.commit()


def delete_user(user_id):
    User.query.filter_by(user_id=user_id).delete()

    database.session.commit()


def is_registered_user(user_id):
    user = User.query.filter_by(user_id=user_id).first()
    logger.info(">>>> Searching Result user-info in DB::(user: %s)" % user)
    return user is not None if True else False


def get_login_user(user_id, user_pw):
    user = User.query.filter_by(user_id=user_id).first()
    logger.info(">>>> Searching Result user-info in DB::(user: %s)\n" % user)

    if user is not None:
        if bcrypt.check_password_hash(user.user_pw, user_pw):
            return user
        else:
            return None
    else:
        return None


def provide_user_instance(user_id):
    return User.query.filter_by(user_id=user_id).first()

