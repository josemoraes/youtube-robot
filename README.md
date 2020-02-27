# Youtube Robot
App that creates videos for youtube from some keyword

## Scope and Tasks
* [ ]  **Manager**
  
  * [x]  Ask for search term
  * [x]  Ask for prefix
  * [ ]  Starts text robot
  * [ ]  Starts image robot
  * [ ]  Starts video robot
  * [ ]  Starts Youtube robot

---

* [ ]  **Text robot**
  
  * [x]  Define data structure
  * [ ]  Get Wikipedia content
  * [ ]  Sanitize the content
  * [ ]  Break in semanthic sentences
  * [ ]  Get [Watson](https://www.ibm.com/watson/br-pt/?cm_mmc=Search_Google-_-Corporate+Advertising_Pillars-_-BR_BR-_-%2Bwatson_b&cm_mmca1=000027HR&cm_mmca2=10008442&cm_mmca7=1001637&cm_mmca8=kwd-20079536418&cm_mmca9=CjwKCAiA7t3yBRADEiwA4GFlIzfkIAIkCSMhLJT3GLzkuJ08w8gsxO02ZN2hAs4mI7wcRrEnB2Fc2BoC998QAvD_BwE&cm_mmca10=359418615521&cm_mmca11=b&gclid=CjwKCAiA7t3yBRADEiwA4GFlIzfkIAIkCSMhLJT3GLzkuJ08w8gsxO02ZN2hAs4mI7wcRrEnB2Fc2BoC998QAvD_BwE&gclsrc=aw.ds) interpretation
  * [ ]  Add tags
  * [ ]  Save data structure

---

* [ ]  **Image robot**

  * [ ]  Load data structure
  * [ ]  Search images on Google Images
  * [ ]  Download images
  * [ ]  Save data structure

---

* [ ]  **Video robot**
  
  * [ ]  Edit images
  * [ ]  Append sentences on images
  * [ ]  Create the video thumbnail
  * [ ]  Render the video using After Effects

---

* [ ]  **Youtube robot**
  
  * [ ]  OAuth authentication
  * [ ]  Video upload
  * [ ]  Thumbnail upload


## Data structure

```js
content: {
  searchTerm: "...",
  prefix: "...",
  sourceContentOriginal: "...",
  sourceContentSanitized: "...",
  sentences: [
    {
      text: "...",
      keywords: ["..."],
      images: ["..."],
    }
  ]  
}
```