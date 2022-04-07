from flask import Blueprint, render_template


index_bp = Blueprint('index_bp', __name__, template_folder='templates')


@index_bp.route('/')
def home():
    return render_template("index/index.html")


@index_bp.route('/about')
def about():
    return render_template("index/about.html")
