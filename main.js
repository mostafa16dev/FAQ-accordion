const toggleAccordion = (e) => {    
    const targetedAccordion = e.srcElement.attributes[2].nodeValue;
    const accordionBody = document.getElementById(targetedAccordion);
    if (accordionBody.style.display === 'none' || accordionBody.style.display === '') {
        accordionBody.style.display = 'block';
        e.srcElement.style.setProperty('--url', "url('assets/images/icon-minus.svg')");
    } else {
        accordionBody.style.display = 'none';
        e.srcElement.style.setProperty('--url', "url('assets/images/icon-plus.svg')");
    }
}

const accordionHeadingOne = document.getElementById('headingOne').addEventListener("click", toggleAccordion);

const accordionHeadingTwo = document.getElementById('headingTwo').addEventListener("click", toggleAccordion);

const accordionHeadingThree = document.getElementById('headingThree').addEventListener("click", toggleAccordion);

const accordionHeadingFour = document.getElementById('headingFour').addEventListener("click", toggleAccordion);


