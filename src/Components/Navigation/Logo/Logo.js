import React from 'react';
import logo from './logo.svg';

const Logo = () => {
	return(
		<div className='flex items-center justify-center'>
			<img src={logo} alt='https://github.com/jayli3n/facial-recognition-web-app'/>
			<h2 id='logoName' className='pl3 tl lh-solid'>Facial Recognition</h2>
		</div>
	)
}

export default Logo;