import JobModel from '../../Model/jobModel';

const initialState = {
    availableJobs: [],
    userOwnJobs: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CREATED_JOB_SUCCESS':
            const newJob = new JobModel(action.jobData.id, action.jobData.ownerId, action.jobData.bgColor, action.jobData.description, action.jobData.phone)
            // console.log('details', newJob)
            return {
                ...state,
                availableJobs: state.availableJobs.concat(newJob),
                userOwnJobs: state.userOwnJobs.concat(newJob),
                jobCreated: action.jobCreated
            }

        case 'CREATE_JOB_FAILED':
            // console.log('ye dekho',action)
            return {
                ...state,
                descriptionErrorMessage: action.descriptionErrorMessage,
                phoneErrorMessage: action.phoneErrorMessage
            }

        case 'CLEAR_ERROR_MESSAGE':
            return {
                ...state,
                descriptionErrorMessage: action.descriptionErrorMessage,
                phoneErrorMessage: action.phoneErrorMessage
            }



        default:
            return state
    }
}