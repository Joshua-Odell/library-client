# My Library

This application uses data-bases to keep track of your own personal library. You can keep track of which books you have finished and which books you have lent out. Avid readers can build out a personal library and loose track of where their books are and which ones they have. This application solves that. The other benefit is for insurance purposes. With an off site list of your library saved if a disaster were to occur they would be able to get insurance reimbursement for their lost books and rebuild their library systematically.

My Library also allows for a book wish list for growing your personal library.

## Repos:

Client- https://github.com/Joshua-Odell/library-client

Server- https://github.com/Joshua-Odell/library-server

Live App- https://library-client.vercel.app/

## Instructions:

When you land on the homepage you get a list of books right away. The top list is your library and the bottom is your wish list. If you click on a book title it will take you to a page with specific information on that book.

[Landing Screen](/picture/Library.jpg)

If you click on the plus button you are directed to a page that allows you to enter in a new book. The My Library title also functions as a link to the home page.

[Detail Screen](/picture/Details.jpg)

## Technology:

This application uses the React Framework on the front-end. It is written primarily on Java Script and includes HTML and CSS. The backend uses node.js on the backend. It also utilizes knex to interact with a SQL database.

## Endpoints

#### '/library'

GET Request

#### Params

None

#### Success Response

status:200
json: list of books in library

#### Failure Response

status: 400

#### Notes

## This structure is repeated for the /wish endpoint

POST Request

#### Data

Required:

title(string),
author(string),
genere(string from list of generes)
lent(bool),
completed(bool)

#### Success Response

status: 200
json: newly created book

#### Failure Response

## status: 400

#### '/library/:id'

GET Request

#### Params

id(integer)

#### Success Response

status: 200
json: book that matches that id

#### Failure Response

status: 400

#### Notes

## This structure is repeated for the /wish endpoint

PATCH Request

#### Params

id(integer)

#### Data:

Required:

lent(bool),
completed(bool)

#### Success Response

status:200

#### Failure Response

## status: 400

DELETE Request

#### Params

id(integer)

#### Success Response

status: 200

#### Failure Response

## status: 400
