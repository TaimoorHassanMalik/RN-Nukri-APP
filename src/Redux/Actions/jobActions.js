import * as firebase from 'firebase'
import { validateAll } from 'indicative/validator';


export const postJob = (data) => {
    return async (dispatch, getState) => {

        const randomColors = ['#189CFC', '#3B3B98', '#6D214F', '#2C3A47']
        const colorNumber = Math.floor(Math.random() * 4) + 1
        const bgColor = randomColors[colorNumber]

        const val = getState()
        const userId = val.auth.userId

        // form validation rules
        const rules = {
            description: 'required|min:15',
            phone: 'required|min:10'
        }
        const messages = {
            required: (field) => `${field} is required`,
            'description.min': 'description is too short',
            'phone.min': 'phone number is too short'
        }

        try {

            await validateAll(data, rules, messages)

            const token = await firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
                return idToken
            })

            const response = await fetch(`https://myjobsapp-c2013.firebaseio.com/allJobs.json?auth=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    description: data.description,
                    ownerId: userId,
                    phone: data.phone,
                    bgColor: bgColor
                })
            })

            if (!response.ok) {
                throw new Error('something went wrong while posting jobs')
            }

            const resdata = response.json()

            dispatch({
                type: 'CREATED_JOB_SUCCESS',
                jobCreated: true,
                jobData: {
                    id: resdata.name,
                    description: data.description,
                    ownerId: userId,
                    phone: data.phone,
                    bgColor: bgColor
                }
            })
        } catch (errors) {

            const formattedErrors = {};
            
            errors.forEach(error => formattedErrors[error.field] = error.message)

            // console.log('eror mera', formattedErrors)
            dispatch({
                type: 'CREATE_JOB_FAILED',
                descriptionError: formattedErrors.description,
                phoneError: formattedErrors.phone
            })
        }
    }
}