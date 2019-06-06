
// news.js

import { storyLink,storyId } from "./slug.js" ;

// Default and named imports. Give named import an alias.
import stories, { copyright as legal } from "./data.js" ;

// Namespace import
import * as publish from "./publish.js";

// Transform { headline, type } into { headline, type, slug, id }

let pages = stories.map( story => {
    let {desc} = story;
    return { ...story, link : storyLink( desc ), id:storyId( desc ) }
})

console.table(pages);

pages.forEach( publish.story );

publish.footer( legal );
