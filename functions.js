

// function randomImg(){
// var randomNumber = Math.floor(Math.random() * 10) + 1;
// var imgName = "img_" + randomNumber + ".jpg";
// document.getElementById("imageid").src= YOUR_IMG_PATH + "/" + imgName ;
// }

filePath = [];

$.ajax({
      type: "GET",
      url: "random_image.csv",
      dataType: "text",
      async: false,
      success: function(artCollection) {

            filePath = artCollection.split('\n');
  //          console.log(filePath[0]);

      }
    });


var randomNumber = [Math.floor(Math.random() * filePath.length) + 1,
                    Math.floor(Math.random() * filePath.length) + 1,
                    Math.floor(Math.random() * filePath.length) + 1,
                    Math.floor(Math.random() * filePath.length) + 1,
                    Math.floor(Math.random() * filePath.length) + 1,
                    Math.floor(Math.random() * filePath.length) + 1,
                    Math.floor(Math.random() * filePath.length) + 1,
                    Math.floor(Math.random() * filePath.length) + 1,
                    Math.floor(Math.random() * filePath.length) + 1,];
console.log(randomNumber);
console.log(filePath[randomNumber[0]], filePath[randomNumber[1]],filePath[randomNumber[2]],filePath[randomNumber[3]],
    filePath[randomNumber[4]],filePath[randomNumber[5]],filePath[randomNumber[6]],filePath[randomNumber[7]],filePath[randomNumber[8]]);

for (i=1;i < 10; i++)
{

    document.getElementById('painting1').innerHTML = i;
    console.log("hi");
    //"<img src="+filePath[randomNumber[i-1]]+">";
}


// function randomImg(){
//     var randomNumber = Math.floor(Math.random() * 12) + 1;
//     var imgName = "img_" + randomNumber + ".jpg";
//     document.getElementById("greenbox").src= "YOUR_IMG_PATH" + "/" + imgName ;
//  }

