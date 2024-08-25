const shapes=require('./shapes.js')
class imageTester
{ constructor(text,textcolor,backgroundcolor,shapes){
    this.text=text;
    this.textcolor=textcolor;
    this.backgroundcolor=backgroundcolor;
    this.shapes=shapes;
    
}}


describe('shapeimage',()=>{
    it('should return a square svg',()=>{
        const data=new imageTester('abc','red','green','square');
        const output=shapes(data);
                expect(output).toContain('<svg width="200" height="200">\n        <rect x="50" y="50" width="200" height="200" fill="green" />\n        <text x="130" y="130" font-size="50" text-anchor="middle" fill="red">abc</text>\n        </svg>');
            });
        // })

// describe('imagecircle',()=>{
    it ('should return a circle svg',()=>{
        const data=new imageTester('abc','red','green','circle');
        const output=shapes(data);
        expect(output).toContain('<svg width="200" height="200">\n        <circle cx="100" cy="100" r="80" fill="green\'/>\n        <text x="100" y="100" font-size="50" text-anchor="middle" fill="red">abc</text>\n        </svg>');
    });
// })
// describe('imageTriangle',()=>{
    it('should return a triangle svg',()=>{
        const data=new imageTester('abc','red','green','triangle');
        const output=shapes(data);
        expect(output).toContain
        ('<svg width="200" height="200">\n        <polygon points="100,10 190,190 10,190" fill="green"/>\n        <text x="100" y="120" font-size="25" text-anchor="middle" fill="red">abc</text>\n        </svg>');
    });
})
