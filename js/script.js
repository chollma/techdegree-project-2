/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/* Global Variables */
const listItems = document.getElementsByTagName('li');
const numOfItems = 10;


/* Sort Function */
function showPage(listItems, page) {
    const startIndex = (page * numOfItems) - numOfItems;
    const endIndex = page * numOfItems;
    for (let i = 0; i < listItems.length; i++) {
        if (i >= startIndex && i < endIndex) {
            listItems[i].style.display = 'block';
        } else {
            listItems[i].style.display = 'none';
        }
    }
}

/* Pagination Function */
function appendPageLinks(listItems) {
    let pageDiv = document.getElementsByClassName('page');
    let paginationDiv = document.createElement('div');
    paginationDiv.className = "pagination";
    pageDiv[0].appendChild(paginationDiv);

    let paginationUl = document.createElement('ul');
    paginationDiv.appendChild(paginationUl);

    for (let i = 1; i < (listItems.length) / numOfItems; i++) {
        let paginationLi = document.createElement('li');
        let paginationA = document.createElement('a');
        paginationA.setAttribute('href', '#');
        paginationA.innerHTML = i;
        paginationUl.appendChild(paginationLi);
        paginationLi.appendChild(paginationA);
        if (i == 1) {
            paginationA.className = "active";
        } else {
            paginationA.className = "inactive";
        }



    }
}