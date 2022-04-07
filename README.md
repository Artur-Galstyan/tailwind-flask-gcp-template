# Tailwind + Flask + Google Cloud Platform Template

To use this template run the following commands:

1. ```pip install -r requirements.txt```
2. ```npm install```

Furthermore, you need to add a GitHub secret and give it the name ```GCP_CREDENTIALS```. In that secret you
put the credentials JSON that you get from Google. You also need to install the Google Cloud CLI and run ```gcloud init```
to prepare your project. 

On every push to the main branch, your app is updated. If you want to change that, go into the GitHub workflow
and change the ```main.yml``` file.

Run the command ```npm run watch-css``` to run the Tailwind Watcher. Configure the file ```tailwind.config.js```
according to your specific needs. 

The file structure is derived from this blog post:

https://codersdiaries.com/blog/flask-project-structure

