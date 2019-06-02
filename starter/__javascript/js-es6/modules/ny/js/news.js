
// news.js
// ====================================================================

let stories = [
    { desc:"Ronaldo transfers to Real Madrid" , type:"sport" },
    { desc:"Signs of water found on Mars" , type:"science" },
    { desc:"Tom Hanks directs documentary about food" , type:"arts" },
    { desc:"Record high temperatures in Spain" , type:"climate" },
    { desc:"Decline in Cash ISA investments" , type:"money" }
]

let copyright = "© 2018 The New York Times Company" ;
// ====================================================================
let config = {
   file_type : ".html" ,
   server : "http://nytimes.com/"
}
// ====================================================================
let slug = story => story.trim().split(" ").join("-").toLowerCase()

let storyLink = story => config.server + slug(story) + config.file_type ;

let storyId = story => story.match(/\b(\w)/g).join("").toLowerCase() + "-" + Math.floor(Math.random()*1000000)

let story = ob => {

    let storyMarkup = `
        <a href='${ ob.link}' >
            <section class="story">
                <h4>${ ob.type }</h4>
                <p>${ ob.desc }</p>
            </section>
        </a>
    ` ;

    document.querySelector(".front-page").innerHTML += storyMarkup

}

let footer = s => document.querySelector(".footer").innerHTML = s;
// ====================================================================

// Transform { headline, type } into { headline, type, slug, id }

let pages = stories.map( story => {
    let {desc} = story;
    return { ...story, link : storyLink( desc ), id:storyId( desc ) }
})

console.table(pages);

pages.forEach( story );

footer( copyright );
