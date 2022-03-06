import { COMMENT_CREATE } from "./types"
import { errorOn } from "./action"

const badWords = ['bitch', 'ass']

export function spamFilter(store) {
    return function(next) {
        return function(action) {
             if (action.type === COMMENT_CREATE) {
                 const hasBadWords = badWords.some(res => action.data.text.includes(res))
                 if (hasBadWords) {
                    return store.dispatch(errorOn('Уважайте людей!!!'))
                 }
             }
             return next(action);
        }
    }
}