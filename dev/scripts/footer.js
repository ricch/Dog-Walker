import React from 'react';

const Footer = () => {
	return (
		<footer>
			<div className="wrapper flex">
				<div className="footerLeft">
					<p>Created with <i className="fa fa-heart" aria-hidden="true"></i> using React, SASS, Firebase</p>
				</div>
				<div className="footerRight">
					<p>Copyright &copy; 2017 <a href="http://www.richardchin.ca">Richard Chin</a> - <a href="http://www.hackeryou.com">HackerYou</a></p>
				</div>
			</div>
		</footer>
	)
}

export default Footer;