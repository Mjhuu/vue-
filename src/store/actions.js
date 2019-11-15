import {} from './../api/index'
import {ADD_USER_INFO} from './mutation-types'
export default {
  addUserInfo({commit}, {userInfo}){
    commit(ADD_USER_INFO, {userInfo});
  }
}
