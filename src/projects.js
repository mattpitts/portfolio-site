import knetic_logo from './images/knetic_logo.png';
import knetic_screenshot from "./images/knetic-screenshot.png"
import get_logo from './images/get-icon.png';
import get_screenshot from './images/get-screenshot.png';
import jello_logo from './images/jello-icon.png';
import jello_screenshot from './images/jello-screenshot.png';
import vectora_logo from './images/vectora.png';
import vectora_screenshot from './images/vectora-screenshot.png';


const projects = [
	{
		name: 'Vectora',
		description: 'Vectora is a simple graphic design app which utilizes SVGs. Users can create various shapes, drag them around an artboard and resize them. Shapes can be filled with color and given borders. Projects can be saved for later editing, and the SVG code can be exported for use in projects. Created with React, Redux, MongoDB, and Monk.',
		iconUrl: `${vectora_logo}`,
		screenshotUrl: `${vectora_screenshot}`,
		gitURL: 'https://github.com/mattpitts/capstone',
		deployedURL: 'http://vectoradesign.com'
	},
	{
		name: "KNETIC",
		description: "KNETIC is an audio synthesizer that allows users to create their own synth patches and play them with a graphical keyboard, their computer keyboard, or an external MIDI keyboard. Patches can be saved to a database for other users to play with. KNETIC utilizes the Web Audio API, Web MIDI APi, Tuna.js, React, Mongo, and Monk.",
		iconUrl: `${knetic_logo}`,
		screenshotUrl: `${knetic_screenshot}`,
		gitURL: 'https://github.com/KNETIC-KRPF',
		deployedURL: 'https://knetic-768b4.firebaseapp.com/'
	},
	{
		name: "Global Earthquake Tracker",
		description: "The Global Earthquake Tracker is an interactive 3D visualization of USGS Earthquake data. Users can specify a date range and minimum magnitude and then watch as the globe is populated by 3D markers sized by the magnitude of the earthquake they represent. Markers can be clicked to bring up more information about a specific earthquake. Created with three.js.",
		iconUrl: `${get_logo}`,
		screenshotUrl: `${get_screenshot}`,
		gitURL: 'https://github.com/mattpitts/global-earthquake-tracker-2',
		deployedURL: 'https://get-three.firebaseapp.com/'
	},
	{
		name: "Jello",
		description: "Jello is a team or personal organization app inspired by Trello. Users can create tasks/stories and group them into columns based on priority or subject matter. Stories can be extended with lists, links and comments. Created with jQuery, node, express and postgres.",
		iconUrl: `${jello_logo}`,
		screenshotUrl: `${jello_screenshot}`,
		gitURL: 'https://github.com/JAMMS-g51',
		deployedURL: 'https://jello-jamms.firebaseapp.com/'
	}
]


export default projects;
