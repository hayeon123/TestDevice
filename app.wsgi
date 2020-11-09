import os, sys
os.environ['PYTHON_EGG_CACHE'] = '/tmp'
sys.path.insert(0, '/home/ha/test_device/app')
from home import app as application
