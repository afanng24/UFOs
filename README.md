
# UFO analysis 

## Overview of Project
For this project a webpage and dynamic table were created to filter results of alien and UFO contacts based on date. The challenge is to refactor the code in app.js and index.html to allow for additional filtering. The final product is a web page that could filter table filters for the city, state, country, and shape. 
### Refactored Code
To refactor index.html the button was removed from the original code so that the search would be activated by pressing enter. Four additional elements were added under "date" in the filtered search so that they could be retrieved from data.js.

![index](https://user-images.githubusercontent.com/82983000/124779222-9909ec80-df0f-11eb-9a68-a8b045d16652.png)

"app.js" was also refactored to allow the different filters to cycle through one another or by themselves. This way if the website was used to find only city then only the city element would be called upon. If the date and city elements were activated then the website would shuffle through data.js to find a combination of the city and date element that matches. 

![app1](https://user-images.githubusercontent.com/82983000/124779680-f9009300-df0f-11eb-8b1f-35984b2eba2b.png)

![app2](https://user-images.githubusercontent.com/82983000/124779699-fbfb8380-df0f-11eb-87e2-ec95f2a28612.png)


## Resources
**Source of Data** : data.js

**Software** : Python 3.7.6 , Visual Studio Code.

## UFO Results

The web page would return results from data.js based on the filtered results, for example if you enter just the date as 1/1/2010 then the date of all sightings would show up. 

![example1](https://user-images.githubusercontent.com/82983000/124780897-f6526d80-df10-11eb-95f1-62a4d9b88f95.png)

If two elements were considered like date and city then the result would be the particular date and city. 

![example 2](https://user-images.githubusercontent.com/82983000/124781404-606b1280-df11-11eb-919f-c23e796977b0.png)

If you want to enter in just the shape of the sighted craft then all the examples of that shape would display under "shape."

![example 3](https://user-images.githubusercontent.com/82983000/124781831-b8a21480-df11-11eb-9960-a39a6b0db074.png)


  
## UFO Summary




