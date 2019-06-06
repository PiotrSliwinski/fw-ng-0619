
// slug.js

import config from "./config.js";

let slug = story => story.trim().split(" ").join("-").toLowerCase()

// ======================================================================

let storyLink = story => config.server + slug(story) + config.file_type ;

let storyId = story => story.match(/\b(\w)/g).join("").toLowerCase() + "-" + Math.floor(Math.random()*1000000)

export { storyLink,storyId } ;
