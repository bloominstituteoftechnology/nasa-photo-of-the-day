##  NASA Photo of the day HTTPS request

GET https://api.nasa.gov/planetary/apod

Example query
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

blic domain.

Query Parameters
Parameter	Type	Default	Description
date	YYYY-MM-DD	today	The date of the APOD image to retrieve
start_date	YYYY-MM-DD	none	The start of a date range, when requesting date for a range of dates. Cannot be used with date.
end_date	YYYY-MM-DD	today	The end of the date range, when used with start_date.
count	int	none	If this is specified then count randomly chosen images will be returned. Cannot be used with date or start_date and end_date.
thumbs	bool	False	Return the URL of video thumbnail. If an APOD is not a video, this parameter is ignored.
api_key	string	DEMO_KEY	api.nasa.gov key for expanded usage

## NASA API Key

Generate API Key
Your API key for rhiannonstanford@gmail.com is:

VrIt8zbnbQuvEUyhutYBiSfGEkDcZ4cIU5iyHzSW
You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

https://api.nasa.gov/planetary/apod?api_key=VrIt8zbnbQuvEUyhutYBiSfGEkDcZ4cIU5iyHzSW
For additional support, please contact us. When contacting us, please tell us what API you're accessing and provide the following account details so we can quickly find you:

Account Email: rhiannonstanford@gmail.com
Account ID: f041e270-770c-4e2c-874f-7a3c8f0d6180

## DESIGN

title - APOD (part of APP)

photo container

  photo (uses url)
  
  author

  description

  date

----

search bar (by date)

change background (changes background state)

favorites (save photo by date in data list)
---> displays as blocks


