function countChar(str) {
  var letters = 0;
      var letter = "k";
      var ar = letter.split("");
      for (var i=0; i<str.length;i++) {
          if (ar.indexOf(str[i]) > -1) {
              letters = letters + 1;
          }
      }
      return letters;
};

console.log(countChar("kikker", "k"));


function countBs(str) {
  var letters = 0;
      var letter = "B";
      var ar = letter.split("");
      for (var i=0; i<str.length;i++) {
          if (ar.indexOf(str[i]) > -1) {
              letters = letters + 1;
          }
      }
      return letters;
};

console.log(countBs("BBD"));
