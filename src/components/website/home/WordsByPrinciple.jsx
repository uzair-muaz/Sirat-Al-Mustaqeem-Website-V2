import React from 'react';

const WordsByPrinciple = () => {
	return (
		<div className="sm:container sm:mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
			<div data-aos="fade-right" className="flex justify-center items-start ">
				<img
					src="/website-assets/principal.svg"
					alt="vision-image"
					className="rounded-full lg:max-w-[500px] object-contain"
				/>
			</div>

			<div data-aos="fade-left" className="flex flex-col justify-center mt-10">
				<h3 className="text-custom3 text-lg sm:text-xl font-medium">
					Principal
				</h3>
				<h1 className="text-custom2 text-4xl sm:text-5xl font-bold mt-3">
					Words by the Director
				</h1>
				<div className="border border-custom6 w-full max-w-[280px] mt-3" />
				<div className="space-y-5">
					<p className="text-custom7 mt-7 text-justify">
						Dear Esteemed Community,
					</p>
					<p>
						Welcome to SIRAT-AL-MUSTAQEEM, An Academy of Excellence, the
						pinnacle of educational distinction! We are thrilled to introduce a
						new era of learning, where academic rigor, innovation, and
						creativity converge to shape the minds of tomorrow's visionaries is
						a going to be a standard.
					</p>
					<p>
						Our state-of-the-art campus and cutting-edge curriculum are designed
						to foster critical thinking, creativity, and problem-solving skills,
						with sustainability in mind. This sets the stage for a
						transformative educational journey. As a world-class institution, we
						are committed to providing a holistic learning environment that
						fosters exploration, inquiry, and discovery.
					</p>
					<p>
						Our dedicated faculty, brimming with expertise and passion, ensures
						that every student receives a personalized and enriching education.
						We strive to cultivate critical thinking, collaboration, and
						creativity through innovative pedagogy and hands-on learning
						experiences.
					</p>
				</div>
			</div>
			<div data-aos="fade-left" className="col-span-2 space-y-6 -mt-5">
				<p>
					Our mission is to impart the timeless Islamic principles and teachings
					in a captivating and age-appropriate manner, encompassing the study of
					Quranic Arabic (Fusah), thereby empowering students to master the
					language from its very foundations, and speak Arabic with confidence
					and eloquence, from the simplest phrases to the most complex
					expressions ,as well as the life narratives of the Prophet Muhammad
					(peace be upon him), and other revered prophets. We aim to nurture
					essential Islamic values such as benevolence, integrity, compassion,
					and reverence, fostering the development of positive character traits
					and moral excellence. This foundation will empower students to
					navigate future social and emotional challenges with confidence and
					resilience, and ultimately become inspirational Muslim leaders who
					will make a positive impact in society and drive national success.
				</p>
				<p>
					Physical development, a vital component of school children's overall
					growth, is essential for building robust physical health, enhancing
					cognitive function, developing emotional intelligence, and boosting
					academic performance. By prioritizing physical development, we lay the
					groundwork for a healthy, successful, and fulfilling life.
				</p>
				<p>
					In closing, I extend my heartfelt gratitude to each of you for your
					unwavering support and partnership. We regard parents as an integral
					part in shaping their child into a successful individual. Together,
					let us continue to shape a learning environment that ignites
					curiosity, sparks creativity, and inspires our students to reach their
					full potential. As we navigate the challenges and opportunities ahead,
					I am confident that our collective efforts will yield a harvest of
					excellence, empathy, and wisdom.May our school remain a beacon of
					hope, a sanctuary of knowledge, and a vibrant community of learners,
					where every student feels seen, heard, and valued. Thank you for your
					dedication, passion, and commitment to our school's mission.
				</p>
			</div>
		</div>
	);
};

export default WordsByPrinciple;
