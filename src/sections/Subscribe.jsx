import Button from '../components/Button';

const Subscribe = () => {
	return (
		<section
			className='max-container flex lg:justify-between items-center flex-col gap-10'
			id='contact us'
		>
			<h3 className='text-4xl leading-[68px] font-palanquin font-bold max-sm:text-center md:text-center'>
				Sign Up for
				<span className='text-coral-red'> Updates & </span>Newsletter
			</h3>
			<div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
				<input
					type='text'
					placeholder='subscribe@nike.com'
					className='input max-sm:flex max-sm:justify-center max-sm:items-center'
				/>
				<div className='flex max-sm:justify-end items-center max-sm:w-full'>
					<Button label='Sign Up' fullWidth />
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
