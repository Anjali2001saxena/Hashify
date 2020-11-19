const api_url = "https://jsonp.afeld.me/?url=https://api.ritekit.com/v1/search/trending?green=1&latin=1";

async function getapi(url){

    const response = await fetch(url);
    var data = await response.json();
    console.log(data.tags[0].tag);
    show(data);

}

getapi(api_url);

function show(data){
    let tab = 
            `<tr>
               <th>HASHTAG</th>
               <th>TWEETS</th>
               <th>RETWEETS</th>
               <th>EXPOSURE</th>
               <th></th>
            </tr>`;


    var k=0;        
    for(let i of data.tags){
        tab += `<tr>
        <td><a href="https://twitter.com/search?q=%23${data.tags[k].tag}&src=typeahead_click">${data.tags[k].tag}</a></td>
        <td>${data.tags[k].tweets}</td>
        <td>${data.tags[k].retweets}</td>
        <td>${data.tags[k].exposure}</td>
        <td><a href="https://twitter.com/intent/tweet?text=Trendy%20tweet%20on%20%23${data.tags[k].tag}%20using%20%23Hashify%20!!" class="fa fa-twitter"> </a></td>
        </tr>`;
        k++;
    }
    
    document.getElementById("hashtags").innerHTML = tab;
}