import { useState } from 'react'
export const usePersist = (_key: string, initValue: any,rangeValue:any) => {
    const key = _key
    const value = () => {
        try {
            const item = window.localStorage.getItem(key)
            if(item==null){
                return initValue;
            }
            for(let i=0;i<rangeValue.length;i++){
                if(item===rangeValue[i]){
                    return item;
                }
            }
            return initValue;
        } catch (error) {
            console.log(error)
            return initValue
        }
    }
    const setValue = (value: any) => {
        try {
            for(let i=0;i<rangeValue.length;i++){
                if(value===rangeValue[i]){
                    setSavedValue(value)
                    window.localStorage.setItem(key, value)
                    return;
                }
            }
            setSavedValue(value)
            window.localStorage.setItem(key, value)

        } catch (error) {
            console.log(error)
        }
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [savedValue, setSavedValue] = useState(value)
    return [savedValue, setValue]
}