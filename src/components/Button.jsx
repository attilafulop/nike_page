const Button = ({
	label,
	iconURL,
	backgroundColor,
	textColor,
	borderColor,
	fullWidth,
}) => {
	return (
		<button
			className={`flex justify-center items-center px-10 py-4 border font-montserrat text-lg leading-none whitespace-nowrap ${
				backgroundColor ? backgroundColor : 'bg-coral-red'
			} ${textColor ? textColor : 'text-white'} ${
				borderColor ? borderColor : 'border-coral-red'
			} rounded-full ${fullWidth && 'w-full'}`}
		>
			{label}
			{iconURL && (
				<img
					src={iconURL}
					alt='arrowRight icon'
					className='ml-2 rounded-full w-5 h-5'
				/>
			)}
		</button>
	);
};

export default Button;
