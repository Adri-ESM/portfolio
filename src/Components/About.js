import React from 'react';
import AboutCss from '../Components/About.css';
import JS from '../Styles/JS.png';
import HTML from '../Styles/HTML.png';
import ReactJS from '../Styles/React.png';
import Native from '../Styles/Native.png';
import CSS from '../Styles/CSS.png';
import Bootstrap from '../Styles/Bootstrap.png';
import Firebase from '../Styles/Firebase.png';
import GitHub from '../Styles/Git.png';
import Agil from '../Styles/Agil.png';
import MenuIcon from '../Styles/ASM.png'


class About extends React.Component {
	render(){
		return (

			<div id="2" className='About1'>


			<div className='About2'>
				
						<div className='AboutMe'>
							<p> Elijo programar porque se ha convertido en mi pasión, poder volver algo simple en algo extraordinario con códigos, resultó ser fascinante.
								Soy Licenciada en Recursos Humanos, donde aprendí a gestionar equipos de trabajos y proyectos de forma dinámica.
								Me apasiona aprender más tecnologías que puedan aumentar mis conocimientos y permitirme mejorar cada día.
								Te invito a conocer algunos de mis Proyectos.</p>
								(TEST TEST TEST)
							</div>

							<div className='Habilities'>
							<img className='js' border="0" height="70" width="70" src={JS} />
							<img className='HTML' border="0" height="70" width="70" src={HTML} />
							<img className='React' border="0" height="70" width="70" src={ReactJS} />
							<img className='Native' border="0" height="70" width="70" src={Native} />
							<img className='CSS' border="0" height="70" width="70" src={CSS} />
							<img className='Boostrap' border="0" height="70" width="70" src={Bootstrap} />
							<img className='Firebase' border="0" height="70" width="70" src={Firebase} />
							<img className='Git' border="0" height="70" width="70" src={GitHub} />
							<img className='Agil' border="0" height="70" width="70" src={Agil} />
							
						</div>
				
				</div>
			</div>
		

			)


		}
	};


export default About;


	