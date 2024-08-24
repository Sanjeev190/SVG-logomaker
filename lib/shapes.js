const generatesvg=(data)=>
{
    const {Text,textcolor,shape,backgroundcolor}=data;
    if (shape==='square'){
        return`<svg width="200" height="200">
        <rect x="50" y="50" width="200" height="200" fill="${backgroundcolor}" />
        <text x="130" y="130" font-size="50" text-anchor="middle" fill="${textcolor}">${Text}</text>
        </svg>`
    }
    if(shape==='circle'){ 
        return` <svg width="200" height="200">
        <circle cx="100" cy="100" r="80" fill="${backgroundcolor}'/>
        <text x="100" y="100" font-size="50" text-anchor="middle" fill="${textcolor}">${Text}</text>
        </svg>`
    }
    if(shape==='triangle'){
        return`<svg width="200" height="200">
        <polygon points="150,10 250,190 50,190" fill="${backgroundcolor}"/>
        <text x="100" y="100" font-size="50" text-anchor="middle" fill="${textcolor}">${Text}</text>
        </svg>`
}
}
module.exports=generatesvg