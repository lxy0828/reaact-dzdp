import * as actionTypes from '../constants/userinfo'

export function update(data) {
    console.log('data',data)
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}