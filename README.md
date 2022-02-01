# About
HeatPumpBudy is a website made for DeisHacks 2021 to help the [HeatSmartAlliance](https://heatsmartalliance.org/). HeatPumpBuddy promotes the usage of heat pumps to help fight in the battle against carbon emissions and greenhouse gases.

The website uses a Python API with a nearest-neighbor machine learning algorithm to recommend heat pump coaches to users based on home size, age, location, and the type of home.

## Links
* [DevPost Submission](https://devpost.com/software/heatpumpbuddy)
* [Pitch Video](https://www.youtube.com/watch?v=UdXs2Ub1hL0)

## What it does and how it helps the HeatSmartAlliance
Our application fulfills two needs: it gives the HSA an up-to-date and visually appealing web presence, while also being a resource hub for someone new to heat pumps to learn about why they are important and how they can be beneficial to them.

The HSA can connect a CSV file of their heat pump coaches and their information to our machine learning algorithm, so that way homeowners can be connected with coaches that best suit their personal needs.

## How we built it
HeatPumpBuddy was built using the NextJS and React framework, along with a Flask machine learning API. We designed the application in Figma before bringing it to life through our development process. It is fully responsive on both mobile, tablet, and web so anyone can use this website at any time - whether they are researching options at home or on the bus to work.

The machine-learning algorithm allows users to enter information about their home and matches them with 3 heat coaches using a nearest-neighbor algorithm, so they can choose the coach who best suits their needs and preferences. The website is SEO optimized with Next, so someone looking up heat pumps would find our website and be able to learn more.

The website is hosted on Netlify for easy deployment, while the API is hosted on Heroku.

