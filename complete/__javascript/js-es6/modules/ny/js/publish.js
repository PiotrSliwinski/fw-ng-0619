
// publish.js

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

export { story,footer }
