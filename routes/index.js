
/*
 * GET home page.
 */
exports.start = function(req, res){
    question = "What kind of cat hangs out in your house?"
    answer = "HOUSE CAT"
    res.render('layout', { title: 'What kind of cat are you?', Question: question, Answer:answer, showindex: "a", showabout:"", showcontact:""  });    
}

exports.index = function(req, res){
    var oldanswer;
    var answer; 
    var question;
    oldanswer = req.body.answer
    console.log(oldanswer)
    
    if (oldanswer == undefined){
        question = "What kind of cat hangs out in your house?"
        answer = "HOUSE CAT"
    } else if (oldanswer == "HOUSE CAT"){
        question = "What kind of cat hangs out in the alley?"
        answer = "ALLEY CAT"
    } else if (oldanswer == "ALLEY CAT"){
        question = "What kind of cat is a chocolate candy bar?"
        answer = "KIT KAT"    
    } else if (oldanswer == "KIT KAT"){
        question = "What kind of cat has the first name of Tom?"
        answer = "TOM CAT"    
    } else if (oldanswer == "TOM CAT"){
        question = "What kind of cat is really really scared?"
        answer = "SCAREDYCAT"    
    } else if (oldanswer == "SCAREDYCAT"){
        question = "What kind of cat hangs out at the copy shop?"
        answer = "COPYCAT"    
    } else if (oldanswer == "COPYCAT"){
        question = "What kind of cat is actually a fish?"
        answer = "CATFISH"    
    } else if (oldanswer == "CATFISH"){
        question = "What kind of cat breaks into places at night?"
        answer = "CAT BURGLAR"    
    } else if (oldanswer == "CAT BURGLAR"){
        question = "What kind of cat hangs out with Bat Man?"
        answer = "CAT WOMAN"    
    } else if (oldanswer == "CAT WOMAN"){
        question = "What kind of cat has a thousand legs?"
        answer = "CATERPILLAR"    
    } else if (oldanswer == "CATERPILLAR"){
        question = "What kind of cat is a big expensive car?"
        answer = "CADILLAC"    
    } else if (oldanswer == "CADILLAC"){
        question = "What kind of cat is a great big disaster?"
        answer = "CATASTROPHE"    
    } else if (oldanswer == "CATASTROPHE"){
        question = "What kind of cat is an even bigger disaster?"
        answer = "CATACLYSM"    
    } else if (oldanswer == "CATACLYSM"){
        question = "What kind of cat rhymes with that and is a long religious recitation?"
        answer = "CATECHISM"    
    } else if (oldanswer == "CATECHISM"){
        question = "What kind of cat is connected to the engine of your car?"
        answer = "CATALYTIC CONVERTER"                       
    } else if (oldanswer == "CATALYTIC CONVERTER"){
        question = "What kind of cat facilitates a chemical reaction? "
            answer = "CATALYST" 
    } else if (oldanswer == "CATALYST"){
            question = "What kind of cat comes in the mail from Sears?"
            answer = "CATALOGUE"    
    } else if (oldanswer == "CATALOGUE"){
            question = "What kind of cat is a group of things that are similar?"
            answer = "CATEGORY"    
    } else if (oldanswer == "CATEGORY"){
            question = "What kind of cat is a whole bunch of cows?"
            answer = "CATTLE"    
    } else if (oldanswer == "CATTLE"){
            question = "What kind of cat throws stuff over the wall of a castle?"
            answer = "CATAPULT"    
    } else if (oldanswer == "CATAPULT"){           question = "What kind of cat is tunnels under the castle?"
            answer = "CATACOMB"
    } else if (oldanswer == "CATACOMB"){
            question = "What kind of cat floats on two pontoons?"
            answer = "CATAMARAN"
    } else if (oldanswer == "CATAMARAN"){
            question = "What kind of cat takes a picture of the inside of your body?"
            answer = "CAT SCAN"
    } else if (oldanswer == "CAT SCAN"){
            question = "What kind of cat obscures your vision?"
            answer = "CATARACT"
    } else if (oldanswer == "CATARACT"){
            question = "What kind of cat is being followed by a moon shadow?"
            answer = "CAT STEVENS"
    } else if (oldanswer == "CAT STEVENS"){
            question = "What kind of cat is the capital of Nepal?"
            answer = "KATMANDU"
    } else if (oldanswer == "KATMANDU"){
            question = "What kind of cat carries your golf clubs?"
            answer = "CADDY"
    } else if (oldanswer == "CADDY"){
            question = "That's all the clues!"
            answer = "WHAT KIND OF CAT ARE YOU?"
    } else if (oldanswer = "WHAT KIND OF CAT ARE YOU?"){
            question = "You win!"
            answer = "I do?"
    } else if (oldanswer = "I do?"){
            question = "You win!"
            answer = "I do?"
    } 


    res.render('index', { title: 'What kind of cat are you?', Question: question, Answer:answer, showindex: "a" });
};

exports.about = function(req, res){
    
    res.render('layout', { title: 'What kind of cat are you?', showindex: "", showabout:"a", showcontact:""  });    
}


exports.contact = function(req, res){
   res.render('layout', { title: 'What kind of cat are you?', showindex: "", showabout:"", showcontact:"a"  });    
}