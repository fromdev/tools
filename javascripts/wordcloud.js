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
const drawMetaData = function(ctx,clipW,clipH,text) {
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
        meta.text = buildTextMeta(text, meta);
        drawMeta.push(meta);
    }
  }
  return drawMeta;
};

const draw = function(ctx, meta) {
 	textInRectangle(ctx, meta)	
};