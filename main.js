const toggleAccordion = (e) => {    
    const targetedAccordion = e.srcElement.attributes[2].nodeValue;
    const accordionBody = document.getElementById(targetedAccordion);
    if (getStyle(accordionBody) === 'none' ) {
        accordionBody.style.display = 'block';
        e.srcElement.style.setProperty('--url', "url('assets/images/icon-minus.svg')");
    } else {
        accordionBody.style.display = 'none';
        e.srcElement.style.setProperty('--url', "url('assets/images/icon-plus.svg')");
    }
}

const getStyle = element => {
    return element.currentStyle ? element.currentStyle.display :
        getComputedStyle(element, null).display;
}

const accordionHeadingOne = document.getElementById('headingOne').addEventListener("click", toggleAccordion);

const accordionHeadingTwo = document.getElementById('headingTwo').addEventListener("click", toggleAccordion);

const accordionHeadingThree = document.getElementById('headingThree').addEventListener("click", toggleAccordion);

const accordionHeadingFour = document.getElementById('headingFour').addEventListener("click", toggleAccordion);


