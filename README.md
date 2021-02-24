# Foo Bar

## Clone project
    git clone git@github.com:BorisTumbev/foo-bar.git

## create virtual environment and activate it
    virtualenv -p python3.8 venv
    source venv/bin/activate

## Install requirements
    pip install -r requirements.txt

## Create .env where .env-example is
    cp .env-example .env

## Generate secret key and put it in .env file
    python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())' 

## Make migrations
    python manage.py makemigrations foo_bar_api
    python manage.py migrate

## Create user
    python manage.py createsuperuser

## Add dummy data
    python manage.py loaddata foo_bar_api/fixtures/bars.json

## Run the server
    python manage.py runserver


# REST API

## Login

### Request

`POST /api/login/`
    
    body: {"username" : "admin", "password": "adminadmin"}

### Response

    HTTP/1.1 200 OK

    {
        "token": "173565b8aaf0831284d4c51da0554b8434287034"
    }

`use this token for every other call in Authorization header`
`Authorization: Token 173565b8aaf0831284d4c51da0554b8434287034`

## Get list of Bars

### Request

`GET /api/bars/`

### Response

    HTTP/1.1 200 OK

    [
        {
            "id": 1,
            "name": "bar1",
            "rating": 1
        },
        {
            "id": 2,
            "name": "bar2",
            "rating": 2
        },
        {
            "id": 3,
            "name": "bar3\n",
            "rating": 3
        },
        {
            "id": 4,
            "name": "bar4",
            "rating": 4
        },
        {
            "id": 5,
            "name": "bar5",
            "rating": 5
        }
    ]

## Create a new Bar

### Request

`POST /api/bars/`

    body: {"name" : "bar", "rating": 5}

### Response

    HTTP/1.1 201 Created

    {
        "id": 6,
        "name": "bar",
        "rating": 5
    }

## Get a specific Bar

### Request

`GET /api/bars/<id>`


### Response

    HTTP/1.1 200 OK

    {
        "id": 6,
        "name": "bar",
        "rating": 5
    }


## Delete a Bar

### Request

`DELETE /api/bars/<id>`

### Response

    HTTP/1.1 204 No Content
