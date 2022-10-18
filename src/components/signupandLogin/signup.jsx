import CloseIcon from "../CloseIcon/closeIcon";
import HeaderLogo from "../Logo/logocomponent";
import Navigation from "../Nav/NavComponent";
import "./signup.css";

const SignUpSignIn = ({ toggleModal, type }) => {
	return (
		<>
			{!type && (
				<header className='register-header'>
					<HeaderLogo />
					<Navigation />
				</header>
			)}
			<div
				className={`form-wrapper ${!type && "active"}`}
				onClick={(e) => e.stopPropagation()}
			>
				<div className='form-section form-section-top'>
					{type && <CloseIcon click={toggleModal} className='icon' />}
					<p className='form-title'>Log in or sign up</p>
				</div>
				<div className='form-section'>
					<p className='form-section-title'>Welcome to Airbnb</p>
					<form action='#' className='registeration-form'>
						<div className='registerion-form-element'>
							<input
								type='text'
								className='registerion-form-input'
								placeholder='Email'
							/>
						</div>
						<div className='registerion-form-element'>
							<input
								type='password'
								className='registerion-form-input'
								placeholder='Password'
							/>
						</div>
						<div className='registerion-form-element'>
							<input
								type='submit'
								className='registerion-form-input registerion-form-input--submit '
								value='Continue'
							/>
						</div>
					</form>
					<button className='submit-button registerion-form-input'>
						<span className='submit-button-logo'></span>
						<span className='submit-button-name'>Continue with Facebook</span>
					</button>
					<button className='submit-button registerion-form-input'>
						<span className='submit-button-logo'></span>
						<span className='submit-button-name'>Continue with Google</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default SignUpSignIn;
