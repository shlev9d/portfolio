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
