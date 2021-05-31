export const sanitize = (html, allowLineBreak=false) => {
    let result = html;
    if(allowLineBreak) result = result.replace(/&nbsp;/g, '\n').replace(/\<br\s*[\/]?>/gi, '\n');
    else result = result.replace(/\r?\n|\r/g, ' ');
    result = result.replace(/(<([^>]+)>)/gi, "");
    if(!result.trim()) result="";
    return result;
}