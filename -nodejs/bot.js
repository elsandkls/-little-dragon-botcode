const tmi = require('tmi.js');
const http = require('http');
const request = require('request'); 

// Define configuration options
const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: [
    process.env.CHANNEL_NAME
  ]
};

// Create a client with our options
const client = new tmi.client(opts);
console.log(`Initiating client connection.`);
// Register our event handlers (defined below)
client.on('message', onMessageHandler); 
client.on('connected', onConnectedHandler); 
// Connect to Twitch:
client.connect();
console.log(`Client is connected.`);

// call to start the safety break functions
// Interval calculations  

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) 
{
    if (self) { return; } // Ignore messages from the bot

    // Remove whitespace from chat message
    const commandName = msg.trim(); 
    // If the command is known, let's execute it    
    const channel = target;  
    //console.log(`* recieved channel ${channel} `);
    const user = context;  
    //console.log(`* recieved user ${user['display-name']}`);
    const message = msg.trim();
    //console.log(`* recieved ${message} command`);
    const username = `${user['display-name']}`; 
    
    switch(message) {  
      case '!list': 
        client.say(target, `Just a basic twitchy bot. Our commands are !list (to see this list), !dice, !github, !discord, !howlong, !twitter, !pinterest, !facebook, !github, !instagram, !ebay, !linkedin, !amazon `);
        console.log(`* Executed ${message} command`);
        break; 
      case '!twitter': 
        client.say(target, `${user['display-name']} our twitter account is bylittledragons`);
        console.log(`* Executed ${message} command`);
        break;
      case '!pinterest': 
        client.say(target,  `${user['display-name']} our pinterest account is elsandkls`);
        console.log(`* Executed ${message} command`);
        break;
      case '!facebook': 
        client.say(target,  `${user['display-name']} our facebook page is craftedbylittledragons`);
        console.log(`* Executed ${message} command`);
        break;
      case '!github': 
        client.say(target,  `${user['display-name']} our github account is ericaandkeith`);
        console.log(`* Executed ${message} command`);
        break;
      case '!instagram': 
        client.say(target,  `${user['display-name']} our instagram account is craftedbydragons`);
        console.log(`* Executed ${message} command`);
        break;
      case '!ebay': 
        client.say(target,  `${user['display-name']} our ebay seller account is erica2boo`);
        console.log(`* Executed ${message} command`);
        break; 
      case '!linkedin': 
        client.say(target, `${user['display-name']} our linkedin profiles are ericasouthworth and keith-southworth-2028bb132`);
        console.log(`* Executed ${message} command`);
        break;
      case '!amazon': 
        client.say(target,  `:-) ${user['display-name']} you can find our amazon listing by searching for item B01MUNHS6G`);
        console.log(`* Executed ${message} command`);
        break;
      case '!discord': 
        client.say(target,  `:-) ${user['display-name']} you can find our amazon listing by searching for item B01MUNHS6G`);
        console.log(`* Executed ${message} command`);
        break;
      case '!howlong': 
        client.say(target,  `:-)  We started working with glass as a hobby in 2014, and decided to go full time Nov 2015.`);
        console.log(`* Executed ${message} command`);
        break;
      case '!whoRU': 
        client.say(target,  `:-)  We are computer programmers who left the corporate rat race to start a farm. We ended up involved in the craft and arts community at Penland School of Craft, in North Carolina. That involvement evolved into a our own interst in Glass and Pottery, and starting our own craft business. We have been making handmade silver and copper jewelry, custom cut gemstones, glass beads, ceramic and glass housewares for 10 years. Join us and have some fun! `);
        console.log(`* Executed ${message} command`);
        break;
        ///// Fellow streamers
      case '!so bubblesglass': 
        client.say(target,  `Check out our fellow glass artist @BubblesGlass over at twitch.tv/bubblesglass`);
        console.log(`* Executed ${message} command`);
        break;
      case '!so beastworksglass': 
        client.say(target,  `Check out our fellow glass artist @BeastWorksGlass over at twitch.tv/beastworksglass and at www.instagram.com/beastworksglass `);
        console.log(`* Executed ${message} command`);
        break;  
      case '!so dawghouseglass': 
        client.say(target,  `Check out our fellow glass artist @DaqgHouseGlass over at twitch.tv/dawghouseglass and at www.instagram.com/dawghouseglass`);
        console.log(`* Executed ${message} command`);
        break;      
      case '!so madurinkinroth': 
        client.say(target,  `Check out our fellow glass artist @MadurinKinroth over at twitch.tv/madurinkinroth`);
        console.log(`* Executed ${message} command`);
        break;   
      case '!so smplyglass': 
        client.say(target,  `Check out our fellow glass artist @smplyglass over at twitch.tv/smplyglass`);
        console.log(`* Executed ${message} command`);
        break;   
      case '!so deedlewicket': 
        client.say(target,  `Check out our fellow glass artist @deedlewicket over at twitch.tv/deedlewicket`);
        console.log(`* Executed ${message} command`);
        break;   
      case '!so canibuz': 
        client.say(target,  `Check out our fellow glass artist @canibuz over at twitch.tv/canibuz`);
        console.log(`* Executed ${message} command`);
        break;   
      case '!so bodiedecordova': 
        client.say(target,  `Check out our fellow glass artist @bodiedecordova over at twitch.tv/bodiedecordova`);
        console.log(`* Executed ${message} command`);
        break;      
      default:        
        console.log(`* Unknown command ${message}`);
        break;
     }    
} 

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) 
{
  console.log(`* Connected to ${addr}:${port}`);  
} 