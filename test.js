const Redfin = require('./index.js').Redfin;

Redfin.search("3901 5th Place Kenosha, WI").then((x) => {
	 console.log(x);
})

console.log(Redfin.user_agent_header);
