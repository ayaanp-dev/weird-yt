# daily dose of weirdness 💀

**description**: life is weird. it's very weird. but what if you could see the weirdest of the weird everyday? that's what we made, daily dose of weirdness.
we developed it by using the youtube api(which has the worst documentation btw), and using our own magic formula to deliver you the weirdest of the weird
videos everyday.

**how we do it**: all of the videos that are shown on the page are videos that have been released on that day, so everyday the videos change and there's
21 more new ones. to actually find weird youtube videos, using the youtube api, we query videos with the keyword "weird", and we look for the top 21
videos with the most comments that have the word "weird" in them. then, the video with the most weirdness index(measurement that takes in the title,
tags, and comments), will be the daily video on the website.

**what we used**: to make the backend, we used python, and for frontend, we used reactJS. specifically, we used fastapi to make the api that the frontend
uses, and we used the youtube api to do all of the youtube stuff. python + js = a masterpiece.

**how will this project be maintained**: it doesn't have to be as the youtube api does everything and we don't have to manually do anything.

**contributors**: me(ayaan panda), and jordy.

i hope you like our project ✌️
