const showText = function(ctx, meta, vertical) {
	let x = meta.text.x;
  let y = meta.text.y; 
  if(vertical) {
  	x = meta.text.y;
    y = meta.text.x;
    ctx.translate(meta.text.x,meta.text.y);
    ctx.rotate(Math.PI / 2);
    ctx.translate(-meta.text.x,-meta.text.y);
  }
  ctx.fillText(meta.text.value,x,y);
};
const textInRectangle = function(ctx, meta) {

	ctx.font = meta.text.font;
	ctx.fillStyle = meta.text.fillStyle;
  ctx.strokeRect(meta.rectangle.x, meta.rectangle.y, meta.rectangle.width, meta.rectangle.height);
  ctx.save();
  //ctx.translate(meta.text.x,meta.text.y);
  //ctx.rotate(Math.PI / 2);
  //ctx.fillText(meta.text.value,meta.text.x,meta.text.y);
  //ctx.translate(-meta.text.x, -meta.text.y);
	showText(ctx, meta, false);
	ctx.restore();
};
const textColors =  ["red","blue","green","yellow","orange","purple", "fuchsia"];

const getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const pickRandomColor = function() {
	return textColors[getRandomInt(textColors.length)];
}

const buildTextMeta = function(text, meta) {
	let fontSize = meta.rectangle.width/5;
 	const fontFamily = 'Impact';
 return {
         	value: text,
          x: meta.rectangle.x + (meta.rectangle.width/2 - meta.rectangle.width/4),
          y: meta.rectangle.y+(meta.rectangle.height/2 + meta.rectangle.height/4),
          fillStyle: pickRandomColor(),
          font: fontSize + 'px ' + fontFamily
         };
};
const randomSort = (a,b) => 0.5 - Math.random();

const textToShuffledArray = (txt) => {
  const arr = (txt && txt.length) ? txt.split(' ') : []
  return (arr && arr.length) ? arr.sort(randomSort) : [];
};
const drawMetaData = function(ctx,clipW,clipH,text) {
  const suffledTextArray = textToShuffledArray(text);
	const drawMeta = [];
  for(let i=0;i<10;i++) {
  	const x = i*clipW;
    for(let j=0;j<10;j++) {
      const index = i+j;
      ctx.strokeStyle = (j%2==0) ? 'green': 'red';    
      const y = j*clipH;
       
			//
      //ctx.save();
      const meta = {
         rectangle : 
         	{
            width: clipW, 
            height: clipH, 
            x: x, 
            y: y 
         	},
          index: index
        };
        if(suffledTextArray && suffledTextArray.length) {
          meta.text = buildTextMeta(suffledTextArray.pop(), meta);
          drawMeta.push(meta);
        } else {
          return drawMeta;
        }
        
    }
  }
  return drawMeta;
};

const draw = function(ctx, meta) {
 	textInRectangle(ctx, meta)	
};