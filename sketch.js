let beginning,move,sit,light,ignore,enter,look,leave,stay,leave1,stay1,conti,friend,exit,back,boat;

let current;

function setup(){
  createCanvas(550,350);
  createStory();
  
  current=beginning;
  console.log(current);
}

function draw(){
  background ('gray');
  text(current.text,0,269);
  text(current.option1,0,309);
  text(current.option2,0,329);
}

function keyPressed(){
  if(key=='a'){
    if(current.target1 !=null){
      current=current.target1;
    }
  }
  if(key=='b'){
    if(current.target1 != null){
      current=current.target2;
    }
  }
}

class StorySection {
  constructor(_text,_option1,_target1,_option2,_target2){
    this.text=_text;
    this.option1=_option1;
    this.target1=_target1;
    this.option2=_option2;
    this.target2=_target2;
  }
}

function createStory(){ 
  //back=new StorySection()
  /*boat=new StroySection(
    "Congratulations!, you escape.",
    "(a) Start again",
    beginning
    )
  exit=new StorySection(
  "In the water you see a boat. What do you do",
    "(a) Get on the boat.",
    boat

  )*/
  /*stay1=new StorySection(
  
  )
  leave1=new StorySection(
  
  )
  //develop -> Same line as back
  friend=new StorySection(
  
  )
  //develop
  conti=new StorySection(
  
  )*/
  //Develop more
  stay=new StorySection(
  "You try to convince your friend to leave with you but unfortunately "
  )
  leave=new StorySection(
  "You crawl through the tunnel and the tunnel leads you to a beach. What do you do?",
    "(a) Continue to the exit.",
    exit,
    "(b) Go back and tell your friend.",
    back
  )
  ignore=new StorySection(
    "You crawl through the tunnel and the tunnel leads you to a beach. What do you do?",
    "(a) Continue to the exit.",
    exit,
    "(b) Go back and tell your friend.",
    back
  )
  //in development
  light=new StorySection(
  "The note says,-Don't leave me here.- Do you leave your friend or stay",
    "(a) Leave",
    leave1,
    "(b) Stay",
    stay1
    )
  //in development
  look=new StorySection(
  "You a light at the end of the tunnel",
    "(a) Continue alone.",
    conti,
    "(b) Tell your friend",
    friend
  )
  //Done
  enter=new StorySection(
  "You start to escape but your friend is too weak to go with you.What do you do",
    "(a) Leave",
    leave,
    "(b) Stay",
    stay
  )
  //Done
  move=new StorySection(
  "The barrel rolls aside and you find a secret tunnel.What do you do?",
    "(a) Enter the tunnel",
    enter,
    "(b) Look",
    look
  )
  //Done
  sit=new StorySection(
  "Your friend hands you a note.What do you do?",
    "(a) Light a match",
    light,
    "(b) Ignore the note",
    ignore
  )
  //Done
  beginning=new StorySection(
  "You are trapped in a dungeon with your friend.You see a barrel. What do you do?",
    "(a) Move the barrel",
    move,
    "(b) Sit down next to my friend",
    sit
  )
}