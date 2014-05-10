var VideoEntry = function(props){
	this.name = props.name;
	this.url = props.url;
	this.videoTitle = props.videoTitle;
	this.videoDesc = props.videoDesc;
};

module.exports = VideoEntry;
	// new VideoEntry({
	// 	name: 'Rick Grimes vs. Walter White',
	// 	url: 'https://www.youtube.com/watch?v=krQHQvtIr6w',
	// 	videoTitle: 'Rick Grimes vs. Walter White',
	// 	videoDesc: 'Zombies vs Methamphetamine'
	// })