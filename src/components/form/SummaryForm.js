import React from 'react';

class Summary extends React.Component {

	constructor(props) {
		super(props);
		this.handleChange=this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.updatePreview(event.target.id,event.target.value);
	}

	render(){
		return(
			<div className="summary section">
				<div className="info">
					<h2 className="section-title">Extracto</h2>
					<div className="section-buttons">
						<input type="button" className="form__button--edit" value="Editar" onclick="editar('content-summary')" />
					</div>
				</div>

				<div id="content-summary" className="form__sectionContent">
					<textarea name="summary" id="summary" onChange={this.handleChange} className="form__textarea--summary" rows="8" cols="80" placeholder="Introduce una pequeña descripción"></textarea>
					<input type="button" name="delete" value="Borrar" className="delete-summary form__button--saveDeleteClose" />
					<input type="button" value="cerrar" className="form__button--saveDeleteClose" onclick="cerrar('content-summary')" />
				</div>
			</div>
		);
	}
}

export default Summary;