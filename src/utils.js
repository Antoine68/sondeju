export const sanitize = (html, allowLineBreak=false) => {
    let result = html;
    if(allowLineBreak) result = result.replace(/&nbsp;/g, '\n').replace(/\<br\s*[\/]?>/gi, '\n');
    result = result.replace(/(<([^>]+)>)/gi, "");
    if(!result.trim()) result="";
    return result;
}