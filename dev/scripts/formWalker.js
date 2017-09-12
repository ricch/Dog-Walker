import React from 'react';

class FormWalker extends React.Component {
	render (){
		return (
			<form id="formWalker" onSubmit={this.props.handleSubmit}>
				<h2>Dog Walker Information</h2>
				<div>
					<label htmlFor="walkerName"><i className="fa fa-user-circle-o" aria-hidden="true"></i> Name <span className="required">*</span></label>
					<input type="text" name="walkerName" placeholder="eg - John Smith" onChange={this.props.handleChange} value={this.props.walkerName}/>
				</div>
				<div> 
					<label htmlFor="walkerEmail"><i className="fa fa-envelope" aria-hidden="true"></i> 
 Email <span className="required">*</span></label>
					<input type="email" name="walkerEmail" placeholder="eg - john@smith.com" onChange={this.props.handleChange} value={this.props.walkerEmail}/> 
				</div>
				<div>
					<label htmlFor="walkerPhone"><i className="fa fa-phone" aria-hidden="true"></i> Phone</label>
					<input type="number" name="walkerPhone" placeholder="eg - 416-967-1111" max="9999999999" onChange={this.props.handleChange} value={this.props.walkerPhone}/> 
				</div>
				<div>
					<label htmlFor="walkerPostal"><i className="fa fa-map-marker" aria-hidden="true"></i> Location (Postal Code) <span className="required">*</span></label>
					<input type="text" name="walkerPostal" placeholder="eg - M1M (first three characters only)" onChange={this.props.handleChange} value={this.props.walkerPostal}/> 
				</div>
				<div>
					<label htmlFor="walkerPrice">$ / 30 min walk <span className="required">*</span></label>
					<input type="text" name="walkerPrice" placeholder="eg - 25" onChange={this.props.handleChange} value={this.props.walkerPrice}/> 
				</div>
				<div>
					<label htmlFor="walkerImage"><i className="fa fa-camera-retro" aria-hidden="true"></i> Photo <span className="required">*</span></label>
					<input type="file" id="fileItem" name="walkerImage" accept="image/*" ref={(ref)=>{this.file = ref}} onChange={this.props.handleUpload}/>
				</div>
				<div className="fullWidth">
					<label htmlFor="walkerDesc"><i className="fa fa-book" aria-hidden="true"></i> A bit about yourself</label>
					<textarea name="walkerDesc" placeholder="eg - I like dogs" cols="30" rows="4" onChange={this.props.handleChange} value={this.props.walkerDesc}></textarea>
				</div>
				<p className="required textcenter">* - required</p>
				<button>Submit</button>
			</form>
		)
	}
}

export default FormWalker;

// * Dog Walker (Walker name, walker location - postal code, reviews, email, phone, price per 30 min walk, photo of walker) .. all items will be REQUIRED 