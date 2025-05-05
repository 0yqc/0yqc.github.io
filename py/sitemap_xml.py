# this is for the local creation of the /sitemap.xml file and is not needed for the website

import os

root = "./" # set root dir to gen sitemap from

output = open(root + "sitemap.xml", "w")
output.write('<?xml version="1.0" encoding="UTF-8"?>\n')
output.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')

def gen_xmlUrl(full_path):
    output.write(
f"""
<url>
<loc>{full_path}</loc>
</url>
"""
	)

def gen(directory):
	for item in sorted(os.listdir(directory)): # loop through each subfolder, sort it since it's not sorted
		path = root + os.path.join(directory, item)
		full_path = "https://0yqc.github.io/" + os.path.relpath(path, root).replace(os.sep, "/")
		if item == ".git":
			continue # skip through git folder as it contains much unneccessary files
        
		if os.path.isdir(path):  # If the current item is a directory:
			gen(path)  # Recursively process the directory
		elif item == "index.html":
			# For index.html, use the directory path without the file name
			dir_path = os.path.dirname(full_path)
			gen_xmlUrl(dir_path + "/")
		elif item.endswith(".html"):
			# For other .html files, include the full path
			gen_xmlUrl(full_path)
		

gen(root) # initial generation

output.write('</urlset>')
output.close()