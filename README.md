I started this project as a create-react-app and have been implementing features, such as redux for the favourites management and layout with the material-ui library.

All data is fetched from http://numbersapi.com/

*API being hosted on http makes it so that I can't directly host a live demo on github. I'm thinking about converting it to https with a proxy later and then adding it;

To run locally, clone or download the repo and run on node prompt:

    npm install
    npm start

You might eventually find weird things like:
- Random date info for numbers that are not on the ]1, 31[ range;
- Random infos for very huge numbers, because the api is obviously limited, and then it shows info about the closest-from-chosen number.

Things I still want to add:
- Inability to favourite duplicate info
- Discover section shows infos that are already saved with a red colored heart icon

Screenshots:

![Screenshot1](https://imgur.com/VegyZVl.jpg)

![Screenshot2](https://imgur.com/p7KCubf.jpg)

![Screenshot3](https://imgur.com/0zsn9vp.jpg)

If you have any suggestions or overall comments, I would love to hear them. So feel free to send me a message. Thanks!