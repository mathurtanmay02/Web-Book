let index = -1;
let fav = [];

if(!localStorage.getItem('fav'))
{
    fav = [];
    localStorage.setItem('fav',fav);
}
else
{
    fav = JSON.parse(localStorage.getItem('fav'));
    
    for (let i = 1; i <= 10; i++)
    {
        if(fav[i] === 1)
        {
            document.getElementById(`${i}`).childNodes[3].attributes[0].nodeValue = "bookmark_done.png";

            let create_a = document.createElement('a');
            create_a.setAttribute('href',`#page_${i}`);
            create_a.setAttribute('id',`page_${i}_a`);
            create_a.setAttribute('class','dropdown-item');
            create_a.setAttribute('onclick','fav_open(this)');

            create_a.innerHTML = `Page ${i}`;
            
            let create_li = document.createElement('li');
            create_li.appendChild(create_a);
            
            let fav_ul = document.querySelector('#fav_ul');
            fav_ul.appendChild(create_li);
        }
    }
}

function bookmark(element)
{

    if(element.getAttribute("src") === "bookmark.png")
    {
        element.setAttribute('src',"bookmark_done.png");

        let create_a = document.createElement('a');
        create_a.setAttribute('href',`#page_${index}`);
        create_a.setAttribute('id',`page_${index}_a`);
        create_a.setAttribute('class','dropdown-item');
        create_a.setAttribute('onclick','fav_open(this)');

        create_a.innerHTML = `Page ${index}`;
        
        let create_li = document.createElement('li');
        create_li.appendChild(create_a);
        
        let fav_ul = document.querySelector('#fav_ul');
        fav_ul.appendChild(create_li);

        fav[index] = 1;
        localStorage.setItem('fav',JSON.stringify(fav));
        
    }
    else
    {
        element.setAttribute('src',"bookmark.png");
        
        let fav_a = document.querySelector(`#page_${index}_a`);
        let fav_li = fav_a.parentElement;
        
        fav_a.remove();
        fav_li.remove();
        
        fav[index] = null;
        localStorage.setItem('fav',JSON.stringify(fav));
        
    }
      
}

function prev_Page(element)
{  
    let this_Page = document.querySelector(`#page_${index}`);
    this_Page.setAttribute('class','d-flex justify-content-center my-4 d-none');
  
    if(index === -1)
    {
        index = 10;
    }
    else
    {
        index = index -1;
    }
     
    let prev_Page = document.querySelector(`#page_${index}`);
    prev_Page.setAttribute('class','d-flex justify-content-center my-4');
    
}

function next_Page(element)

{
    let this_Page = document.querySelector(`#page_${index}`);
    this_Page.setAttribute('class','d-flex justify-content-center my-4 d-none');
    
    if(index === 10)
    {
        index = -1;
    }
    else
    {
        index = index +1;
    }
    
    let next_Page = document.querySelector(`#page_${index}`);
    next_Page.setAttribute('class','d-flex justify-content-center my-4');
}

function fav_open(element)
{
    let curr_Page = document.querySelector(`#page_${index}`);
    
    curr_Page.setAttribute('class','d-flex justify-content-center my-4 d-none');
    
    let page_id = element.getAttribute('href');
    
    let page = document.querySelector(`${page_id}`);
    
    page.setAttribute('class','d-flex justify-content-center my-4')
    
    let page_no = page_id.split('_');
    index = parseInt(page_no[1]);
}

document.querySelector('form').onsubmit = function()
{
    let curr_Page = document.querySelector(`#page_${index}`);
    curr_Page.setAttribute('class','d-flex justify-content-center my-4 d-none');
    
    let page = document.querySelector('#search').value;
    let page_elem = document.getElementById(`page_${page}`);
    page_elem.setAttribute('class','d-flex justify-content-center my-4')
    
    document.querySelector('#search').value = "";
    index = page;

}
