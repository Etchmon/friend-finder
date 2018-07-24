var friends = require("../data/friend");
var path = require("path");


module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        console.log(friends);
        res.json(friends);
    });
    
    app.post("/api/friends", function(req,res){
    
        var posted = req.body;
        var sort;
        var check;
        var trueLove = [];

        for(var i = 0; i<req.body.score.length; i++){
            posted.score[i] = parseInt(posted.score[i]);
            sort = posted.score[i];

        };

        for(var i = 0;i<friends.length; i++){
            for(var j = 0; j<10; j++){
                var check = friends[i].scores[j];
                var match = check - sort;
                if(match === 0){
                    friends[i].loved++;
                }
            };
            for(var k = 1; k<friends.length; k++){
                if(friends[i].loved>friends[k].loved){
                    trueLove.push(friends[i].name);
                }
            };
        };

        console.log(trueLove);

        res.json({
            name: posted.name,
            img: posted.imgLink,
            score: posted.score
        });


        friends.push(posted);

        res.json({
            match: trueLove
        })
    
    });
};

