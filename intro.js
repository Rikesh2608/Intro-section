const features=document.querySelector('.features-options');
const featuresContainer=document.querySelector('.features-container');

let feature=1;
featuresContainer.addEventListener('click',()=>{
    if(feature){
        features.style.display=`flex`;
        feature=0;
    }
    else{
        feature=1;
        features.style.display=`none`;
    }
});

const companys=document.querySelector('.company-options');
const companysContainer=document.querySelector('.company-container');

let company=1;
companysContainer.addEventListener('click',()=>{
    if(company){
        companys.style.display=`flex`;
        company=0;
    }
    else{
        company=1;
        companys.style.display=`none`;
    }
});