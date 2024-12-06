import styles from '../styles/About.module.css';
import Photo from '../images/photo-about.png';
import Canva from '../images/canva.png';
import { ReactComponent as UXDesignIcon } from '../images/skills/specialization/ux-design-ic.svg';
import { ReactComponent as DesignSystemsIcon } from '../images/skills/specialization/design-systems-ic.svg';
import { ReactComponent as UsabilityIcon } from '../images/skills/specialization/usability-ic.svg';
import { ReactComponent as DigitalDesignIcon } from '../images/skills/specialization/digital-design-ic.svg';
import { ReactComponent as VisualIdentityIcon } from '../images/skills/specialization/visual-identity-ic.svg';
import { ReactComponent as AccessibilityIcon } from '../images/skills/specialization/accessibility-ic.svg';
import { ReactComponent as DesignGuidelinesIcon } from '../images/skills/specialization/design-guidelines-ic.svg';
import { ReactComponent as FigmaIcon } from '../images/skills/technical/figma-ic.svg';
import { ReactComponent as WireframingIcon } from '../images/skills/technical/wireframing-ic.svg';
import { ReactComponent as PrototypingIcon } from '../images/skills/technical/prototyping-ic.svg';
import { ReactComponent as TypographyIcon } from '../images/skills/technical/typography-ic.svg';
import { ReactComponent as IconongraphyIcon } from '../images/skills/technical/iconongraphy-ic.svg';
import { ReactComponent as PhotographyIcon } from '../images/skills/technical/photography-ic.svg';
import { ReactComponent as PixelPerfectIcon } from '../images/skills/technical/pixel-perfect-ic.svg';
import { ReactComponent as ArtIcon } from '../images/skills/softskills/art-direction-ic.svg';
import { ReactComponent as ConceptualIcon } from '../images/skills/softskills/conceptual-ic.svg';
import { ReactComponent as JourneyIcon } from '../images/skills/softskills/journey-ic.svg';
import { ReactComponent as CommunicationIcon } from '../images/skills/softskills/communication-ic.svg';
import { ReactComponent as CollaborationIcon } from '../images/skills/softskills/collaboration-ic.svg';
import { ReactComponent as AdaptabilityIcon } from '../images/skills/softskills/adaptability-ic.svg';
import { ReactComponent as GrowthIcon } from '../images/skills/softskills/growth-ic.svg';
import { ReactComponent as ReadCVIcon } from '../images/read-cv-icon.svg';
import { ReactComponent as LinkedinIcon} from '../images/linkedin-ic-filled.svg';
import { ReactComponent as ReadCVIcon2} from '../images/read-cv-ic-filled.svg';
import { ReactComponent as DribbbleIcon } from '../images/dribbble-ic-filled.svg';

const About = () => {
	return (
		<div className={`sm-container`}>
			<h1 className={`display-1 p-title ${styles.name}`}>
				RÚBEN <br />
				RODRIGUES
			</h1>

			<div className={styles['about-image-box']}>
				<img src={Photo} alt='' className={styles['about-image']} />
			</div>

			<div className={styles['about-me']}>
				<p>
					Hey there! I’m Rúben Rodrigues, a Portuguese Digital Product
					Designer with a passion for crafting experiences that feel
					as seamless as they look.
				</p>

				<p>
					Born in 1997 in Leiria, I’ve been hooked on design since
					childhood, always drawing and creating. My fascination
					deepened when I discovered digital tools—posting my first
					designs on DeviantArt with a cracked version of Photoshop
					(don’t judge!). That curiosity led me to pursue a degree in
					Design at IADE - Universidade Europeia, where I graduated in
					2018.
				</p>
			</div>

			<div className={styles['experience']}>
				<div>
					<h3 className='headline-3'>Experience</h3>
				</div>
				<div className={styles['experience-cards-wrapper']}>
					<div>
						<h4 className='title-3'>Role</h4>
						<div className={styles['experience-card']}>
							<h5 className='body-1'>Product Designer</h5>
							<h5 className='body-1'>Graphic Designer</h5>
							<h5 className='body-1'>Graphic Designer</h5>
						</div>
					</div>
					<div>
						<h4 className='title-3'>Company</h4>
						<div className={styles['experience-card']}>
							<h5 className='body-1'>Void Software</h5>
							<h5 className='body-1'>Independent Designer</h5>
							<h5 className='body-1'>Grupo VM</h5>
						</div>
					</div>
					<div>
						<h4 className='title-3'>Year</h4>
						<div className={styles['experience-card']}>
							<h5 className='body-1'>2022 - Now</h5>
							<h5 className='body-1'>2020 - 2022</h5>
							<h5 className='body-1'>2019 - 2020</h5>
						</div>
					</div>
				</div>
			</div>

			<div className={styles['mission']}>
				<p>MISSION</p>
				<p>
					Applying Google’s innovation, research, and resources to
					promote progress and expand opportunity for everyone.
				</p>
			</div>

			<div className={styles['skills']}>
				<h1 className='display-2'>
					Tools of the Trade. <br /> My Skillset Essentials
				</h1>

				<div className={styles['skills-sections']}>
					<div className={styles['skills-section']}>
						<h3 className='headline-3'>Specialization</h3>
						<ul>
							<li className='title-3'>
								<UXDesignIcon />
								<span>UI/UX Design</span>
							</li>
							<li className='title-3'>
								<DesignSystemsIcon />
								<span>Design Systems</span>
							</li>
							<li className='title-3'>
								<UsabilityIcon />
								<span>Usability</span>
							</li>
							<li className='title-3'>
								<DigitalDesignIcon />
								<span>Digital Design</span>
							</li>
							<li className='title-3'>
								<VisualIdentityIcon />
								<span>Visual Identity</span>
							</li>
							<li className='title-3'>
								<AccessibilityIcon />
								<span>Accessibility</span>
							</li>
							<li className='title-3'>
								<DesignGuidelinesIcon />
								<span>Design Guidelines</span>
							</li>
						</ul>
					</div>
					<div className={styles['skills-section']}>
						<h3 className='headline-3'>Technical Skills</h3>
						<ul>
							<li className='title-3'>
                                <FigmaIcon />
								<span>Figma</span>
							</li>
							<li className='title-3'>
                                <WireframingIcon />
								<span>Wireframing</span>
							</li>
							<li className='title-3'>
                                <PrototypingIcon />
								<span>Prototyping</span>
							</li>
							<li className='title-3'>
                                <TypographyIcon />
								<span>Typography</span>
							</li>
							<li className='title-3'>
                                <IconongraphyIcon />
								<span>Iconongraphy</span>
							</li>
							<li className='title-3'>
                                <PhotographyIcon />
								<span>Photography</span>
							</li>
							<li className='title-3'>
                                <PixelPerfectIcon />
								<span>Pixel Perfect Design</span>
							</li>
						</ul>
					</div>
					<div className={styles['skills-section']}>
						<h3 className='headline-3'>Soft Skills</h3>
						<ul>
							<li className='title-3'>
                                <ArtIcon />
								<span>Art Direction</span>
							</li>
							<li className='title-3'>
                                <ConceptualIcon />
								<span>Conceptual Thinking</span>
							</li>
							<li className='title-3'>
                                <JourneyIcon />
								<span>Journey Mapping</span>
							</li>
							<li className='title-3'>
                                <CommunicationIcon />
								<span>Communication</span>
							</li>
							<li className='title-3'>
                                <CollaborationIcon />
								<span>Collaboration</span>
							</li>
							<li className='title-3'>
                                <AdaptabilityIcon />
								<span>Adaptability</span>
							</li>
							<li className='title-3'>
                                <GrowthIcon />
								<span>Growth Orientation</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

            <div className={styles['recognition']}>
                <h1 className='display-1'>
					Recognition
				</h1>

                <h3 className='title-3'>
                Design is a partnership. Dive into these testimonials to see how my creative approach has resonated with clients and colleagues.
                </h3>

                <div className={styles['recognition-wrapper']}>
                    <div>
                        <img src={Canva} alt='' height={48} />
                        <h4 className='body-1'>
                        <span>x</span> 1 Canva Blog
                        </h4>
                    </div>
                    <div>
                        <ReadCVIcon />
                        <h4 className='body-1'>
                        <span>x</span> 1 Read.cv
                        </h4>
                    </div>
                </div>
            </div>

            <div className={styles['contact']}>
                <h1 className='display-1'>
					Wanna jam? <br />
                    I’d love to chat.
				</h1>

                <h3 className='body-1'>
                    Design is a partnership. Dive into these testimonials to see how my creative approach has resonated with clients and colleagues.
                </h3>

                <div className={styles['contact-wrapper-btns']}>
                    <button className={`${styles['btn']} ${styles['btn-blue']}`}>
                        Let's talk
                    </button>
                    <button className={`${styles['btn']} ${styles['btn-gray']}`}>
                        Download Resume
                    </button>
                </div>

                <div className={styles['contact-wrapper']}>
                    <div className={styles['contact-wrapper-me']}>
                        <img src='https://avatars.githubusercontent.com/u/80220701?v=4' alt='' />
                        <div>
                            <h4 className='body-1'>Rúben Rodrigues</h4>
                            <h5 className='body-3'>Product Designer</h5>
                        </div>
                    </div>
                    <button className={`${styles['btn']} ${styles['btn-blue']}`}>
                        Send Email
                    </button>
                </div>

                <p className='body-3'>
                    or connect with me at
                </p>

                <div className={styles['contact-wrapper-socials']}>
                    <a href='https://www.linkedin.com/in/lucas-garcia-januario/' target="_blank" rel="noreferrer">
                        <LinkedinIcon />
                    </a>
                    <a href='' target="_blank">
                    <DribbbleIcon />
                    </a>
                    <a href='' target="_blank">
                    <ReadCVIcon2 />
                    </a>
                </div>
            </div>
		</div>
	);
};

export default About;
