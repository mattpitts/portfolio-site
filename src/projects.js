import knetic_logo from './images/knetic_logo.png';
import knetic_screenshot from "./images/knetic-screenshot.png"
import get_logo from './images/get-icon.png';
import get_screenshot from './images/get-screenshot.png';
import jello_logo from './images/jello-icon.png';
import jello_screenshot from './images/jello-screenshot.png';


const projects = [
	{
		name: "KNETIC",
		description: "KNETIC is an audio synthesizer that allows users to create their own synth patches and play them with a graphical keyboard, their computer keyboard, or an external MIDI keyboard. Patches can be saved to a database for other users to play with. KNETIC utilizes the Web Audio API, Web MIDI APi, Tuna.js, React, Mongo, and Monk.",
		iconUrl: `${knetic_logo}`,
		screenshotUrl: `${knetic_screenshot}`
	},
	{
		name: "Global Earthquake Tracker",
		description: "The Global Earthquake Tracker is an interactive 3D visualization of USGS Earthquake data. Users can specify a date range and minimum magnitude and then watch as the globe is populated by 3D markers sized by the magnitude of the earthquake they represent. Markers can be clicked to bring up more information about a specific earthquake. Created with three.js.",
		iconUrl: `${get_logo}`,
		screenshotUrl: `${get_screenshot}`
	},
	{
		name: "Jello",
		description: "Jello is a team or personal organization app inspired by Trello. Users can create tasks/stories and group them into columns based on priority or subject matter. Stories can be extended with lists, links and comments. Created with jQuery, node, express and postgres.",
		iconUrl: `${jello_logo}`,
		screenshotUrl: `${jello_screenshot}`
	}
]


export default projects;
