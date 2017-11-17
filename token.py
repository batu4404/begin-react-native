from pyvi.pyvi import ViTokenizer, ViPosTagger
from os import listdir
from os.path import isfile, join

mypath = 'data'
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]