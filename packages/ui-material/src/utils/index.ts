export const toggleReduce = (prev: boolean, action: any | boolean) => typeof action !== 'boolean' ? !prev: action;
