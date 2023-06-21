import shoesShop from './assets/shoes-shop.PNG'
import weather from './assets/weather.PNG'
import qrCoder from './assets/qr-coder.PNG'
import calculator from './assets/calculator.PNG'

export const API_TOKEN = '8c06dbab-71d6-4d1c-81e1-c6a50a6d1d1f'
export const API_EMAIL = 'shlev9d@gmail.com'
// const safeCode = 382240

export const getConfig = formData => {
	const [email, name, text] = Object.values(formData)
	const config = {
		SecureToken: API_TOKEN,
		To: API_EMAIL,
		From: API_EMAIL,
		Subject: name,
		Body: `${name}<br>${email}<br>${text}`,
	}
	return config
}

export const allSkills = [
	{
		category: 'Basic',
		skills: ['HTML', 'JavaScript', 'TypeScript'],
	},
	{
		category: 'Layout',
		skills: ['CSS/SCSS', 'Tailwind CSS', 'Material UI', 'Styled Components'],
	},
	{
		category: 'Libraries and Frameworks',
		skills: [
			'React',
			'NextJS',
			'Angular (basic)',
			'ReactQuery',
			'React Testing Library',
			'React Router Dom',
		],
	},
	{
		category: 'State managers',
		skills: ['Redux', 'ReduxToolKit', 'ReduxThunk', 'Zustand'],
	},
	{
		category: 'Other',
		skills: ['Git', 'GitHub', 'Webpack', 'Axios', 'RestAPI', 'SOLID'],
	},
]

export const allProgects = [
	{
		name: 'Shoes shop',
		image: shoesShop,
		linkDemo: 'https://final-project-shlev9d.vercel.app/',
		linkGitHub: 'https://github.com/shlev9d/final-project',
		description: 'NextJS, TypeScrtipt, ReactQuery, MaterialUI, Axios',
	},
	{
		name: 'weather widget',
		image: weather,
		linkDemo: 'https://shlev9d.github.io/weather-widget/',
		linkGitHub: 'https://github.com/shlev9d/weather-widget',
		description: 'React, TypeScrtipt, ReduxToolKit, SCSS, Axios',
	},
	{
		name: 'Calculator',
		image: calculator,
		linkDemo: 'https://react-calculate.vercel.app/',
		linkGitHub: 'https://github.com/shlev9d/react-calculate',
		description:
			'React, ReactTestingLibrary, TailwindCSS',
	},
	{
		name: 'QR coder',
		image: qrCoder,
		linkDemo: 'https://shlev9d.github.io/qr-coder/',
		linkGitHub: 'https://github.com/shlev9d/qr-coder',
		description: 'HTML, JavaScript, CSS',
	},
]