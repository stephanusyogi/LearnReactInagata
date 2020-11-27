import React from 'react'
import '../Footer/Footer.css'

const Footer = ()  => {
    return (
        <div className="footer-top">
            <div className="container">
		        	<div className="row">
		        		<div className="col-md-4 col-lg-4 footer-about">
		        			<img className="logo-footer" src="https://cokro.com/assets/icons/logo-2.svg?v=1" alt="" />
		        			<p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat.
		        			</p>
	                    </div>
		        		<div className="col-md-4 col-lg-4 offset-lg-1 footer-contact" >
		        			<h3>Contact</h3>
		                	<p><i className="fas fa-map-marker-alt"></i> Malang, Jawa Timur, Indonesia</p>
		                	<p><i className="fas fa-phone"></i> Phone: (0341) 333 12 68 347</p>
		                	<p><i className="fas fa-envelope"></i> Email: cokro@domain.com</p>
		                	<p><i className="fab fa-skype"></i> Skype: cokro</p>
	                    </div>
	                    <div className="col-md-4 col-lg-3 footer-social">
	                    	<h3>Follow us</h3>
	                    	<p>
                            <span><i className="fab fa-facebook"></i> </span>
                            <span><i className="fab fa-twitter"></i> </span>
								<span><i className="fab fa-google-plus-g"></i> </span>
								<span><i className="fab fa-instagram"></i> </span>
								<span><i className="fab fa-pinterest"></i> </span>
	                    	</p>
	                    </div>
		            </div>
		        </div>
        </div>
    )
}

export default Footer
