function counts(article) {

    // Stratagy 1
    var array = article.trim().toLowerCase().match(/[A-z]+/gi);
    // var array = article.trim().toLowerCase().match(/\w+/gi);


    // // Stratagy 2
    // article = article.trim().toLowerCase().replace(/[^a-z0-9]/g, '@')
    // var array = article.split('@').filter(cur => cur !== '');
    console.log(array)
    
    

    
    article = " " + array.join("  ") + " "; // article = array.join(" ");
    console.log("counts -> article", article)
    

    var max = 0, word, num = 0, maxword = "";
    for (var i = 0; i < array.length; i++) {
        word = new RegExp(" " + array[i] + " ", 'gi');
        num = article.match(word).length;
        console.log(word, num)

        if (num > max) {
            max = num;
            maxword = array[i];
        }
    }
    console.log(maxword + " " + max);
}
// counts("Age Age Age age age age, has reached the end of the beginning of a word. May be guilty in his seems to passing a lot of different life became the appearance of the same day;");
counts("Age Age Age .age age agee, the the the THe The tHe The The the, day");


