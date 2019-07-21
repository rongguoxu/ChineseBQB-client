(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"111":function(e,t,r){"use strict";r(22);var n=r(1),s=r(26),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}();var a=function(e){function RichText(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,RichText),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(RichText.__proto__||Object.getPrototypeOf(RichText)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(RichText,n["k"].Component),l(RichText,[{"key":"renderNodes","value":function renderNodes(e){if("text"===e.type)return n.k.createElement("span",{},e.text);var t=this.renderChildrens(e.children),r={"className":"","style":""};if(e.hasOwnProperty("attrs"))for(var s in e.attrs)"class"===s?r.className=e.attrs[s]||"":r[s]=e.attrs[s]||"";return n.k.createElement(e.name,r,t)}},{"key":"renderChildrens","value":function renderChildrens(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0!==t.length)return t.map(function(t,r){return"text"===t.type?t.text:e.renderNodes(t)})}},{"key":"render","value":function render(){var e=this,t=this.props,r=t.nodes,l=t.className,a=function _objectWithoutProperties(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["nodes","className"]);return Array.isArray(r)?n.k.createElement("div",i({"className":l},Object(s.a)(this.props,["nodes","className"]),a),r.map(function(t,r){return e.renderNodes(t)})):n.k.createElement("div",i({"className":l},Object(s.a)(this.props,["className"]),a,{"dangerouslySetInnerHTML":{"__html":r}}))}}]),RichText}();t.a=a},"98":function(e,t,r){(function(n){var s,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(n){"use strict";var l={"newline":/^\n+/,"code":/^( {4}[^\n]+\n*)+/,"fences":/^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,"hr":/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,"heading":/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,"blockquote":/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,"list":/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,"html":"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))","def":/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,"nptable":noop,"table":noop,"lheading":/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,"_paragraph":/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,"text":/^[^\n]+/};function Lexer(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||marked.defaults,this.rules=l.normal,this.options.pedantic?this.rules=l.pedantic:this.options.gfm&&(this.rules=l.gfm)}l._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,l._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,l.def=edit(l.def).replace("label",l._label).replace("title",l._title).getRegex(),l.bullet=/(?:[*+-]|\d{1,9}\.)/,l.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,l.item=edit(l.item,"gm").replace(/bull/g,l.bullet).getRegex(),l.list=edit(l.list).replace(/bull/g,l.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+l.def.source+")").getRegex(),l._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",l._comment=/<!--(?!-?>)[\s\S]*?-->/,l.html=edit(l.html,"i").replace("comment",l._comment).replace("tag",l._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),l.paragraph=edit(l._paragraph).replace("hr",l.hr).replace("heading"," {0,3}#{1,6} +").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",l._tag).getRegex(),l.blockquote=edit(l.blockquote).replace("paragraph",l.paragraph).getRegex(),l.normal=merge({},l),l.gfm=merge({},l.normal,{"nptable":/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,"table":/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),l.pedantic=merge({},l.normal,{"html":edit("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",l._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),"def":/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,"heading":/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,"fences":noop,"paragraph":edit(l.normal._paragraph).replace("hr",l.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",l.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()}),Lexer.rules=l,Lexer.lex=function(e,t){return new Lexer(t).lex(e)},Lexer.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},Lexer.prototype.token=function(e,t){var r,n,s,i,a,o,p,h,c,u,g,d,f,m,k,b;for(e=e.replace(/^ +$/gm,"");e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length),s[0].length>1&&this.tokens.push({"type":"space"})),s=this.rules.code.exec(e)){var x=this.tokens[this.tokens.length-1];e=e.substring(s[0].length),x&&"paragraph"===x.type?x.text+="\n"+s[0].trimRight():(s=s[0].replace(/^ {4}/gm,""),this.tokens.push({"type":"code","codeBlockStyle":"indented","text":this.options.pedantic?s:rtrim(s,"\n")}))}else if(s=this.rules.fences.exec(e))e=e.substring(s[0].length),this.tokens.push({"type":"code","lang":s[2]?s[2].trim():s[2],"text":s[3]||""});else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),this.tokens.push({"type":"heading","depth":s[1].length,"text":s[2]});else if((s=this.rules.nptable.exec(e))&&(o={"type":"table","header":splitCells(s[1].replace(/^ *| *\| *$/g,"")),"align":s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),"cells":s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===o.align.length){for(e=e.substring(s[0].length),g=0;g<o.align.length;g++)/^ *-+: *$/.test(o.align[g])?o.align[g]="right":/^ *:-+: *$/.test(o.align[g])?o.align[g]="center":/^ *:-+ *$/.test(o.align[g])?o.align[g]="left":o.align[g]=null;for(g=0;g<o.cells.length;g++)o.cells[g]=splitCells(o.cells[g],o.header.length);this.tokens.push(o)}else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),this.tokens.push({"type":"hr"});else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),this.tokens.push({"type":"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,t),this.tokens.push({"type":"blockquote_end"});else if(s=this.rules.list.exec(e)){for(e=e.substring(s[0].length),p={"type":"list_start","ordered":m=(i=s[2]).length>1,"start":m?+i:"","loose":!1},this.tokens.push(p),h=[],r=!1,f=(s=s[0].match(this.rules.item)).length,g=0;g<f;g++)u=(o=s[g]).length,~(o=o.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(u-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+u+"}","gm"),"")),g!==f-1&&(a=l.bullet.exec(s[g+1])[0],(i.length>1?1===a.length:a.length>1||this.options.smartLists&&a!==i)&&(e=s.slice(g+1).join("\n")+e,g=f-1)),n=r||/\n\n(?!\s*$)/.test(o),g!==f-1&&(r="\n"===o.charAt(o.length-1),n||(n=r)),n&&(p.loose=!0),b=void 0,(k=/^\[[ xX]\] /.test(o))&&(b=" "!==o[1],o=o.replace(/^\[[ xX]\] +/,"")),c={"type":"list_item_start","task":k,"checked":b,"loose":n},h.push(c),this.tokens.push(c),this.token(o,!1),this.tokens.push({"type":"list_item_end"});if(p.loose)for(f=h.length,g=0;g<f;g++)h[g].loose=!0;this.tokens.push({"type":"list_end"})}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),this.tokens.push({"type":this.options.sanitize?"paragraph":"html","pre":!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),"text":this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):escape(s[0]):s[0]});else if(t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),d=s[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[d]||(this.tokens.links[d]={"href":s[2],"title":s[3]});else if((s=this.rules.table.exec(e))&&(o={"type":"table","header":splitCells(s[1].replace(/^ *| *\| *$/g,"")),"align":s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),"cells":s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===o.align.length){for(e=e.substring(s[0].length),g=0;g<o.align.length;g++)/^ *-+: *$/.test(o.align[g])?o.align[g]="right":/^ *:-+: *$/.test(o.align[g])?o.align[g]="center":/^ *:-+ *$/.test(o.align[g])?o.align[g]="left":o.align[g]=null;for(g=0;g<o.cells.length;g++)o.cells[g]=splitCells(o.cells[g].replace(/^ *\| *| *\| *$/g,""),o.header.length);this.tokens.push(o)}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),this.tokens.push({"type":"heading","depth":"="===s[2].charAt(0)?1:2,"text":s[1]});else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),this.tokens.push({"type":"paragraph","text":"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),this.tokens.push({"type":"text","text":s[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var a={"escape":/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,"autolink":/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,"url":noop,"tag":"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>","link":/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,"reflink":/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,"nolink":/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,"strong":/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,"em":/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,"code":/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,"br":/^( {2,}|\\)\n(?!\s*$)/,"del":noop,"text":/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/};function InlineLexer(e,t){if(this.options=t||marked.defaults,this.links=e,this.rules=a.normal,this.renderer=this.options.renderer||new Renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=a.pedantic:this.options.gfm&&(this.options.breaks?this.rules=a.breaks:this.rules=a.gfm)}function Renderer(e){this.options=e||marked.defaults}function TextRenderer(){}function Parser(e){this.tokens=[],this.token=null,this.options=e||marked.defaults,this.options.renderer=this.options.renderer||new Renderer,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new Slugger}function Slugger(){this.seen={}}function escape(e,t){if(t){if(escape.escapeTest.test(e))return e.replace(escape.escapeReplace,function(e){return escape.replacements[e]})}else if(escape.escapeTestNoEncode.test(e))return e.replace(escape.escapeReplaceNoEncode,function(e){return escape.replacements[e]});return e}function unescape(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function edit(e,t){return e=e.source||e,t=t||"",{"replace":function replace(t,r){return r=(r=r.source||r).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,r),this},"getRegex":function getRegex(){return new RegExp(e,t)}}}function cleanUrl(e,t,r){if(e){try{var n=decodeURIComponent(unescape(r)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return null}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return null}t&&!p.test(r)&&(r=function resolveUrl(e,t){o[" "+e]||(/^[^:]+:\/*[^/]*$/.test(e)?o[" "+e]=e+"/":o[" "+e]=rtrim(e,"/",!0));return e=o[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+t:e+t}(t,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch(e){return null}return r}a._punctuation="!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~",a.em=edit(a.em).replace(/punctuation/g,a._punctuation).getRegex(),a._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,a._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,a._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,a.autolink=edit(a.autolink).replace("scheme",a._scheme).replace("email",a._email).getRegex(),a._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,a.tag=edit(a.tag).replace("comment",l._comment).replace("attribute",a._attribute).getRegex(),a._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,a._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,a._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,a.link=edit(a.link).replace("label",a._label).replace("href",a._href).replace("title",a._title).getRegex(),a.reflink=edit(a.reflink).replace("label",a._label).getRegex(),a.normal=merge({},a),a.pedantic=merge({},a.normal,{"strong":/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,"em":/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,"link":edit(/^!?\[(label)\]\((.*?)\)/).replace("label",a._label).getRegex(),"reflink":edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",a._label).getRegex()}),a.gfm=merge({},a.normal,{"escape":edit(a.escape).replace("])","~|])").getRegex(),"_extended_email":/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,"url":/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"_backpedal":/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,"del":/^~+(?=\S)([\s\S]*?\S)~+/,"text":/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),a.gfm.url=edit(a.gfm.url,"i").replace("email",a.gfm._extended_email).getRegex(),a.breaks=merge({},a.gfm,{"br":edit(a.br).replace("{2,}","*").getRegex(),"text":edit(a.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),InlineLexer.rules=a,InlineLexer.output=function(e,t,r){return new InlineLexer(t,r).output(e)},InlineLexer.prototype.output=function(e){for(var t,r,n,s,i,l,a="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),a+=escape(i[1]);else if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(this.inRawBlock=!1),e=e.substring(i[0].length),a+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):escape(i[0]):i[0];else if(i=this.rules.link.exec(e)){var o=findClosingBracket(i[2],"()");if(o>-1){var p=4+i[1].length+o;i[2]=i[2].substring(0,o),i[0]=i[0].substring(0,p).trim(),i[3]=""}e=e.substring(i[0].length),this.inLink=!0,n=i[2],this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n))?(n=t[1],s=t[3]):s="":s=i[3]?i[3].slice(1,-1):"",n=n.trim().replace(/^<([\s\S]*)>$/,"$1"),a+=this.outputLink(i,{"href":InlineLexer.escapes(n),"title":InlineLexer.escapes(s)}),this.inLink=!1}else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){a+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,a+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),a+=this.renderer.strong(this.output(i[4]||i[3]||i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),a+=this.renderer.em(this.output(i[6]||i[5]||i[4]||i[3]||i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),a+=this.renderer.codespan(escape(i[2].trim(),!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),a+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),a+=this.renderer.del(this.output(i[1]));else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),n="@"===i[2]?"mailto:"+(r=escape(this.mangle(i[1]))):r=escape(i[1]),a+=this.renderer.link(n,null,r);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.inRawBlock?a+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):escape(i[0]):i[0]):a+=this.renderer.text(escape(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{if("@"===i[2])n="mailto:"+(r=escape(i[0]));else{do{l=i[0],i[0]=this.rules._backpedal.exec(i[0])[0]}while(l!==i[0]);r=escape(i[0]),n="www."===i[1]?"http://"+r:r}e=e.substring(i[0].length),a+=this.renderer.link(n,null,r)}return a},InlineLexer.escapes=function(e){return e?e.replace(InlineLexer.rules._escapes,"$1"):e},InlineLexer.prototype.outputLink=function(e,t){var r=t.href,n=t.title?escape(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(r,n,this.output(e[1])):this.renderer.image(r,n,escape(e[1]))},InlineLexer.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},InlineLexer.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,r="",n=e.length,s=0;s<n;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),r+="&#"+t+";";return r},Renderer.prototype.code=function(e,t,r){var n=(t||"").match(/\S*/)[0];if(this.options.highlight){var s=this.options.highlight(e,n);null!=s&&s!==e&&(r=!0,e=s)}return n?'<pre><code class="'+this.options.langPrefix+escape(n,!0)+'">'+(r?e:escape(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:escape(e,!0))+"</code></pre>"},Renderer.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},Renderer.prototype.html=function(e){return e},Renderer.prototype.heading=function(e,t,r,n){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+n.slug(r)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},Renderer.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},Renderer.prototype.list=function(e,t,r){var n=t?"ol":"ul";return"<"+n+(t&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+n+">\n"},Renderer.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},Renderer.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},Renderer.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},Renderer.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},Renderer.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},Renderer.prototype.tablecell=function(e,t){var r=t.header?"th":"td";return(t.align?"<"+r+' align="'+t.align+'">':"<"+r+">")+e+"</"+r+">\n"},Renderer.prototype.strong=function(e){return"<strong>"+e+"</strong>"},Renderer.prototype.em=function(e){return"<em>"+e+"</em>"},Renderer.prototype.codespan=function(e){return"<code>"+e+"</code>"},Renderer.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},Renderer.prototype.del=function(e){return"<del>"+e+"</del>"},Renderer.prototype.link=function(e,t,r){if(null===(e=cleanUrl(this.options.sanitize,this.options.baseUrl,e)))return r;var n='<a href="'+escape(e)+'"';return t&&(n+=' title="'+t+'"'),n+=">"+r+"</a>"},Renderer.prototype.image=function(e,t,r){if(null===(e=cleanUrl(this.options.sanitize,this.options.baseUrl,e)))return r;var n='<img src="'+e+'" alt="'+r+'"';return t&&(n+=' title="'+t+'"'),n+=this.options.xhtml?"/>":">"},Renderer.prototype.text=function(e){return e},TextRenderer.prototype.strong=TextRenderer.prototype.em=TextRenderer.prototype.codespan=TextRenderer.prototype.del=TextRenderer.prototype.text=function(e){return e},TextRenderer.prototype.link=TextRenderer.prototype.image=function(e,t,r){return""+r},TextRenderer.prototype.br=function(){return""},Parser.parse=function(e,t){return new Parser(t).parse(e)},Parser.prototype.parse=function(e){this.inline=new InlineLexer(e.links,this.options),this.inlineText=new InlineLexer(e.links,merge({},this.options,{"renderer":new TextRenderer})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},Parser.prototype.next=function(){return this.token=this.tokens.pop(),this.token},Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},Parser.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},Parser.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,unescape(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,r,n,s="",i="";for(r="",e=0;e<this.token.header.length;e++)r+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{"header":!0,"align":this.token.align[e]});for(s+=this.renderer.tablerow(r),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],r="",n=0;n<t.length;n++)r+=this.renderer.tablecell(this.inline.output(t[n]),{"header":!1,"align":this.token.align[n]});i+=this.renderer.tablerow(r)}return this.renderer.table(s,i);case"blockquote_start":for(i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":i="";for(var l=this.token.ordered,a=this.token.start;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,l,a);case"list_item_start":i="";var o=this.token.loose,p=this.token.checked,h=this.token.task;for(this.token.task&&(i+=this.renderer.checkbox(p));"list_item_end"!==this.next().type;)i+=o||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(i,h,p);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:var c='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(c);console.log(c)}},Slugger.prototype.slug=function(e){var t=e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){var r=t;do{this.seen[r]++,t=r+"-"+this.seen[r]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t},escape.escapeTest=/[&<>"']/,escape.escapeReplace=/[&<>"']/g,escape.replacements={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},escape.escapeTestNoEncode=/[<>"']|&(?!#?\w+;)/,escape.escapeReplaceNoEncode=/[<>"']|&(?!#?\w+;)/g;var o={},p=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function noop(){}function merge(e){for(var t,r,n=1;n<arguments.length;n++)for(r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function splitCells(e,t){var r=e.replace(/\|/g,function(e,t,r){for(var n=!1,s=t;--s>=0&&"\\"===r[s];)n=!n;return n?"|":" |"}).split(/ \|/),n=0;if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(/\\\|/g,"|");return r}function rtrim(e,t,r){if(0===e.length)return"";for(var n=0;n<e.length;){var s=e.charAt(e.length-n-1);if(s!==t||r){if(s===t||!r)break;n++}else n++}return e.substr(0,e.length-n)}function findClosingBracket(e,t){if(-1===e.indexOf(t[1]))return-1;for(var r=0,n=0;n<e.length;n++)if("\\"===e[n])n++;else if(e[n]===t[0])r++;else if(e[n]===t[1]&&--r<0)return n;return-1}function checkSanitizeDeprecation(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function marked(e,t,r){if(void 0===e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(r||"function"==typeof t){r||(r=t,t=null),checkSanitizeDeprecation(t=merge({},marked.defaults,t||{}));var n,s,i=t.highlight,l=0;try{n=Lexer.lex(e,t)}catch(e){return r(e)}s=n.length;var a=function done(e){if(e)return t.highlight=i,r(e);var s;try{s=Parser.parse(n,t)}catch(t){e=t}return t.highlight=i,e?r(e):r(null,s)};if(!i||i.length<3)return a();if(delete t.highlight,!s)return a();for(;l<n.length;l++)!function(e){"code"!==e.type?--s||a():i(e.text,e.lang,function(t,r){return t?a(t):null==r||r===e.text?--s||a():(e.text=r,e.escaped=!0,void(--s||a()))})}(n[l])}else try{return t&&(t=merge({},marked.defaults,t)),checkSanitizeDeprecation(t),Parser.parse(Lexer.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||marked.defaults).silent)return"<p>An error occurred:</p><pre>"+escape(e.message+"",!0)+"</pre>";throw e}}noop.exec=noop,marked.options=marked.setOptions=function(e){return merge(marked.defaults,e),marked},marked.getDefaults=function(){return{"baseUrl":null,"breaks":!1,"gfm":!0,"headerIds":!0,"headerPrefix":"","highlight":null,"langPrefix":"language-","mangle":!0,"pedantic":!1,"renderer":new Renderer,"sanitize":!1,"sanitizer":null,"silent":!1,"smartLists":!1,"smartypants":!1,"xhtml":!1}},marked.defaults=marked.getDefaults(),marked.Parser=Parser,marked.parser=Parser.parse,marked.Renderer=Renderer,marked.TextRenderer=TextRenderer,marked.Lexer=Lexer,marked.lexer=Lexer.lex,marked.InlineLexer=InlineLexer,marked.inlineLexer=InlineLexer.output,marked.Slugger=Slugger,marked.parse=marked,"object"===i(t)?e.exports=marked:void 0===(s=function(){return marked}.call(t,r,t,e))||(e.exports=s)}(this||"undefined"!=typeof window&&window)}).call(this,r(5))}}]);