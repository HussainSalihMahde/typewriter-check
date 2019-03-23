 const net = new brain.NeuralNetwork();
 var trainingData = [];


var test_btn,train_btn,reset_btn,name;
var inputs = [];

function setup() {
	createCanvas(600,600);
	background(255);
	strokeWeight(30);
	stroke(0);

    reset_btn = select("#btn");
    train_btn = select("#btn_1");
    test_btn = select("#btn_2");
    name = select("#name");
}

const three = (
        '#######' +
        '      #' +
        '      #' +
        ' ######' +
        '      #' +
        '      #' +
        '#######'
);

trainingData.push({input:three,output:{square:1}});

function draw() {
	reset_btn.mousePressed(()=>{
		background(255);
    });

    train_btn.mousePressed(()=>{
        var img = get();

        trainingData.push({input:img,output:{circle:1}});
        //console.log(trainingData);
        net.train(trainingData);
    });

    test_btn.mousePressed(()=>{
        var im = get();

        var res = brain.likely(im,net);
        console.log(res);
    });
}

function touchMoved() {
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
}