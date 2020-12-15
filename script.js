let quote = ["Your limitation—it’s only your imagination.", "Push yourself, because no one else is going to do it for you.", "Sometimes later becomes never. Do it now", "Great things never come from comfort zones.", "Dream it. Wish it. Do it.", "Success doesn’t just find you. You have to go out and get it.", "Don’t stop when you’re tired. Stop when you’re done.", "Wake up with determination. Go to bed with satisfaction.", "Do something today that your future self will thank you for."];



$(".Generate").click(function(){
    var random = Math.floor(Math.random() * quote.length);
    $('.quote-container').text (quote[random]);
   
});