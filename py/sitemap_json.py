# this is for the local creation of the /templates/sitemap.json file and is not needed for the website

import os
import json

def gen(directory):
	json_sitemap = {} # init, for each resursive
	for item in os.listdir(directory): # loop through each subfolder
		if item == ".git":
			continue # skip through git folder
		path = os.path.join(directory, item) # construct path (root + subdirectory/file)
		if os.path.isdir(path): # if current path is a directory
			json_sitemap[item] = gen(path) # generate for each subfolder recursively
		else: # otherwise a file
			json_sitemap[item] = None # this is the value, it is not needed, as the url is in the main field
	return json_sitemap # return sitemap once build, to be pushed into the fiel

root = "./" # set root dir to gen sitemap from

json_sitemap = gen(root) # initial generation

# save to output
output = open(root + "templates/sitemap.json", "w")
json.dump(json_sitemap, output, indent=4)
output.close()