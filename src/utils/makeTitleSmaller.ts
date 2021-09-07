export const makeTitleSmaller = (title:string): string =>{
  if(title.length > 25){
    return `${title.slice(0,25)}...`
  }
  return title
} 