import React from 'react';

class Additional extends React.Component {
	render(){
		return(
			<div className="preview__section preview__container--padding">
				<div className="preview__section__title preview__container--padding">
					<div className="titles preview__container--padding"><h3 className="preview__section--h">Más información</h3></div>
					<hr className="line__bottom" />
				</div>
				<div className="preview__container--padding">
					<span className="preview__section__subtitle">Estudios:</span> <br />
					<ul id="data-studies" className="preview__data__studies"></ul>
				</div>
				<div className="preview__container--padding">
					<span className="preview__section__subtitle">Idiomas:</span>
					<ul className="preview__data__languages"></ul>
				</div>

				<div className="skill_container preview__container--padding">
					<span className="preview__section__subtitle">Habilidades:</span>
					<div className="barSkillsSection preview__container--padding">
						<div className="preview__levelSkill preview__container--padding">
							<p id="skillName1" className="preview__data__skillName"></p>
						</div>
					</div>
					<div className="barSkillsSection preview__container--padding">
						<div className="preview__levelSkill preview__container--padding">
							<p id="skillName2" className="preview__data__skillName"></p>
						</div>
					</div>
					<div className="barSkillsSection preview__container--padding">
						<div className="preview__levelSkill preview__container--padding">
							<p id="skillName3" className="preview__data__skillName"></p>
						</div>
					</div>
				</div>

				<div className="preview__container--padding">
					<span className="preview__section__subtitle">Intereses:</span>
					<ul className="preview__data__interest"></ul>
				</div>
			</div>
		);
	}
}

export default Additional;