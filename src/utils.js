import DOMPurify from "dompurify";


export const sanitize = (html, allowLineBreak=false) => {    
    let result = DOMPurify.sanitize(html, {ALLOWED_TAGS: ['br']});
    if(allowLineBreak) result = result.replace(/&nbsp;/g, '\n').replace(/\<br\s*[\/]?>/gi, '\n');
    else result = result.replace(/&nbsp;/g, '').replace(/\<br\s*[\/]?>/gi, '').replace(/(?:\r\n|\r|\n)/g, '');
    if(!result.trim()) result="";
    return result;
}

export const breakLineToBr = (html) => {
    return html.replace(/(?:\r\n|\r|\n)/g, '<br>');
}
