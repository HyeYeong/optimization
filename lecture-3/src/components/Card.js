import React, { useRef, useEffect } from 'react'


function Card(props) {
	const imgRef = useRef(null)
	const { webp, image } = props

	useEffect(() => {
		const options = {};
		const callback = (entries, observer) => {
			entries.forEach(entry => {
				if(entry.isIntersecting) {
					entry.target.src = entry.target.dataset.src
					observer.unobserve(entry.target)
				}
			});
		}

		const observer = new IntersectionObserver(callback, options);

		observer.observe(imgRef.current);
		return () => observer.disconnect();
	}, [])

	return (
		<div className="Card text-center">
			<picture>
				<source data-srcset={webp} type='image/not-support'/>
				<img data-src={image} ref={imgRef}/>
			</picture>
			<div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
				{props.children}
			</div>
		</div>
	)
}

export default Card
