const baseURL = ' https://dog.ceo/api/breed/';

function getRepos(input){
    let request =  `${baseURL}${input}/images/random`;
    console.log(request);
    fetch(request).then((response)=>response.json()).then((json) => {
        let html = generateReposHTML(json);
        $('.repos').html(html);
    })
    .catch(err=>console.log(err));
};


function generateReposHTML(repos) {
    let reposHTML = [];

        console.log(repos);
        let imgURL = repos.message;
        reposHTML.push(
            `<div>
            <img src="${imgURL}" alt="${imgURL}"> </div>
            `
        )
    return reposHTML.join('');
}



function handleSubmit() {
    $('.entry-form').submit(event => {
        event.preventDefault();
        let breed = $('#input-breed').val();
        getRepos(breed.toLowerCase());
    })
}



function main() {
    handleSubmit();
}

$(main);