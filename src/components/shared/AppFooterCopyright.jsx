function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<p
					className=""
				>
					React & Tailwind CSS Portfolio - Andrés Jiménez
				</p>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
