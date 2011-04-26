hilite.define('javascript', [
  { match: /\/\*[\s\S]*?\*\//gm,
    name: 'comment block js' },

  { match: /(\/\/[^\n]*)/g,
    name: 'comment line js' },

  { match: /'(?:(?!')[^\\\n]|\\.)*'/g,
    name: 'string quoted single js' },

  { match: /"(?:(?!")[^\\\n]|\\.)*"/g,
    name: 'string quoted double js' },

  { match: /(\/.+\/[mgi]*)(?!\s*\w)/g,
    name: 'string regexp js' },

  { // match stuff like: Sound.prototype = { … } when extending an object
    match: /([a-zA-Z_?.$][\w?.$]*)\.(prototype)\s*(=)\s*/g,
    name: [
      'support class js',
      'support constant js',
      'keyword operator js' ]},

  { // match stuff like: Sound.prototype.play = function() { … }
    match: /([a-zA-Z_?.$][\w?.$]*)\.(prototype)\.([a-zA-Z_?.$][\w?.$]*)\s*(=)\s*(function)?\s*(\()(.*?)(\))/g,
    name: [
      'support class js',
      'support constant js',
      'entity name function js',
      'keyword operator js',
      'storage type function js',
      'punctuation definition parameters begin js',
      'variable parameter function js',
      'punctuation definition parameters end js' ]},

  { // match stuff like: Sound.prototype.play = myfunc
    match: /([a-zA-Z_?.$][\w?.$]*)\.(prototype)\.([a-zA-Z_?.$][\w?.$]*)\s*(=)\s*/g,
    name: [
      'support class js',
      'support constant js',
      'entity name function js',
      'keyword operator js' ]},

  { // match stuff like: Sound.play = function() { … }
    match: /([a-zA-Z_?.$][\w?.$]*)\.([a-zA-Z_?.$][\w?.$]*)\s*(=)\s*(function)\s*(\()(.*?)(\))/g,
    name: [
      'support class js',
      'entity name function js',
      'keyword operator js',
      'storage type function js',
      'punctuation definition parameters begin js',
      'variable parameter function js',
      'punctuation definition parameters end js' ]},

  { // match stuff like: play = function() { … }
    match: /([a-zA-Z_?$][\w?$]*)\s*(=)\s*(function)\s*(\()(.*?)(\))/g,
    name: [
      'entity name function js',
      'keyword operator js',
      'storage type function js',
      'punctuation definition parameters begin js',
      'variable parameter function js',
      'punctuation definition parameters end js' ]},

  { // match regular function like: function myFunc(arg) { … }
    match: /\b(function)\s+([a-zA-Z_$]\w*)?\s*(\()(.*?)(\))/g,
    name: [
      'storage type function js',
      'entity name function js',
      'punctuation definition parameters begin js',
      'variable parameter function js',
      'punctuation definition parameters end js' ]},

  { // match stuff like: foobar: function() { … }
    match: /\b([a-zA-Z_?.$][\w?.$]*)\s*:\s*\b(function)?\s*(\()(.*?)(\))/gm,
    name: [
      'entity name function js',
      'storage type function js',
      'punctuation definition parameters begin js',
      'variable parameter function js',
      'punctuation definition parameters end js' ]},

  { // Attempt to match "foo": function
    match: /(?:(('')(.*?)(''))|((")(.*?)(")))\s*:\s*\b(function)?\s*(\()(.*?)(\))/g,
    name: [
      'string quoted single js',
      'punctuation definition string begin js',
      'entity name function js',
      'punctuation definition string end js',
      'string quoted double js',
      'punctuation definition string begin js',
      'entity name function js',
      'punctuation definition string end js',
      'entity name function js',
      'punctuation definition parameters begin js',
      'variable parameter function js',
      'punctuation definition parameters end js' ]},

  { match: /(new)\s+(\w+(?:\.\w*)?)/g,
    name: [
      'keyword operator new js',
      'entity name type instance js' ]},

  { match: /\b(console)\b/g,
    name: 'entity name type object js console' },

  { name: 'support function js console',
    match: /\.(warn|info|log|error|time|timeEnd|assert)\b/g },

  { name: 'constant numeric js',
    match: /\b((0(x|X)[0-9a-fA-F]+)|([0-9]+(\.[0-9]+)?))\b/g },


  { match: /(\/\/).*$\n?/g,
    name: 'punctuation definition comment js' },

  { name: 'storage type js',
    match: /\b(boolean|byte|char|class|double|enum|float|function|int|interface|long|short|var|void)\b/g },

  { name: 'storage modifier js',
    match: /\b(const|export|extends|final|implements|native|private|protected|public|static|synchronized|throws|transient|volatile)\b/g },

  { name: 'keyword control js',
    match: /\b(break|case|catch|continue|default|do|else|finally|for|goto|if|import|package|return|switch|throw|try|while)\b/g },

  { name: 'keyword operator js',
    match: /\b(delete|in|instanceof|new|typeof|with)\b/g },

  { name: 'constant language boolean true js',
    match: /\btrue\b/g },

  { name: 'constant language boolean false js',
    match: /\bfalse\b/g },

  { name: 'constant language null js',
    match: /\bnull\b/g },

  { name: 'variable language js',
    match: /\b(super|this)\b/g },

  { name: 'keyword other js',
    match: /\b(debugger|exports)\b/g },

  { name: 'support class js',
    match: /\b(Anchor|Applet|Area|Array|Boolean|Button|Checkbox|Date|document|event|FileUpload|Form|Frame|Function|Hidden|History|Image|JavaArray|JavaClass|JavaObject|JavaPackage|java|Layer|Link|Location|Math|MimeType|Number|navigator|netscape|Object|Option|Packages|Password|Plugin|Radio|RegExp|Reset|Select|String|Style|Submit|screen|sun|Text|Textarea|window|XMLHttpRequest)\b/g },

  { name: 'support function js',
    match: /\b(s(h(ift|ow(Mod(elessDialog|alDialog)|Help))|croll(X|By(Pages|Lines)?|Y|To)?|t(op|rike)|i(n|zeToContent|debar|gnText)|ort|u(p|b(str(ing)?)?)|pli(ce|t)|e(nd|t(Re(sizable|questHeader)|M(i(nutes|lliseconds)|onth)|Seconds|Ho(tKeys|urs)|Year|Cursor|Time(out)?|Interval|ZOptions|Date|UTC(M(i(nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(ome|andleEvent)|navigate|c(har(CodeAt|At)|o(s|n(cat|textual|firm)|mpile)|eil|lear(Timeout|Interval)?|a(ptureEvents|ll)|reate(StyleSheet|Popup|EventObject))|t(o(GMTString|S(tring|ource)|U(TCString|pperCase)|Lo(caleString|werCase))|est|a(n|int(Enabled)?))|i(s(NaN|Finite)|ndexOf|talics)|d(isableExternalCapture|ump|etachEvent)|u(n(shift|taint|escape|watch)|pdateCommands)|j(oin|avaEnabled)|p(o(p|w)|ush|lugins.refresh|a(ddings|rse(Int|Float)?)|r(int|ompt|eference))|e(scape|nableExternalCapture|val|lementFromPoint|x(p|ec(Script|Command)?))|valueOf|UTC|queryCommand(State|Indeterm|Enabled|Value)|f(i(nd|le(ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(nt(size|color)|rward)|loor|romCharCode)|watch|l(ink|o(ad|g)|astIndexOf)|a(sin|nchor|cos|t(tachEvent|ob|an(2)?)|pply|lert|b(s|ort))|r(ou(nd|teEvents)|e(size(By|To)|calc|turnValue|place|verse|l(oad|ease(Capture|Events)))|andom)|g(o|et(ResponseHeader|M(i(nutes|lliseconds)|onth)|Se(conds|lection)|Hours|Year|Time(zoneOffset)?|Da(y|te)|UTC(M(i(nutes|lliseconds)|onth)|Seconds|Hours|Da(y|te)|FullYear)|FullYear|A(ttention|llResponseHeaders)))|m(in|ove(B(y|elow)|To(Absolute)?|Above)|ergeAttributes|a(tch|rgins|x))|b(toa|ig|o(ld|rderWidths)|link|ack))\b(?=\()/g },

  { name: 'support function dom js',
    match: /\b(s(ub(stringData|mit)|plitText|e(t(NamedItem|Attribute(Node)?)|lect))|has(ChildNodes|Feature)|namedItem|c(l(ick|o(se|neNode))|reate(C(omment|DATASection|aption)|T(Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(ntityReference|lement)|Attribute))|tabIndex|i(nsert(Row|Before|Cell|Data)|tem)|open|delete(Row|C(ell|aption)|T(Head|Foot)|Data)|focus|write(ln)?|a(dd|ppend(Child|Data))|re(set|place(Child|Data)|move(NamedItem|Child|Attribute(Node)?)?)|get(NamedItem|Element(sBy(Name|TagName)|ById)|Attribute(Node)?)|blur)\b(?=\()/g },

  { name: 'support constant js',
    match: /(s(ystemLanguage|cr(ipts|ollbars|een(X|Y|Top|Left))|t(yle(Sheets)?|atus(Text|bar)?)|ibling(Below|Above)|ource|uffixes|e(curity(Policy)?|l(ection|f)))|h(istory|ost(name)?|as(h|Focus))|y|X(MLDocument|SLDocument)|n(ext|ame(space(s|URI)|Prop))|M(IN_VALUE|AX_VALUE)|c(haracterSet|o(n(structor|trollers)|okieEnabled|lorDepth|mp(onents|lete))|urrent|puClass|l(i(p(boardData)?|entInformation)|osed|asses)|alle(e|r)|rypto)|t(o(olbar|p)|ext(Transform|Indent|Decoration|Align)|ags)|SQRT(1_2|2)|i(n(ner(Height|Width)|put)|ds|gnoreCase)|zIndex|o(scpu|n(readystatechange|Line)|uter(Height|Width)|p(sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(i(splay|alog(Height|Top|Width|Left|Arguments)|rectories)|e(scription|fault(Status|Ch(ecked|arset)|View)))|u(ser(Profile|Language|Agent)|n(iqueID|defined)|pdateInterval)|_content|p(ixelDepth|ort|ersonalbar|kcs11|l(ugins|atform)|a(thname|dding(Right|Bottom|Top|Left)|rent(Window|Layer)?|ge(X(Offset)?|Y(Offset)?))|r(o(to(col|type)|duct(Sub)?|mpter)|e(vious|fix)))|e(n(coding|abledPlugin)|x(ternal|pando)|mbeds)|v(isibility|endor(Sub)?|Linkcolor)|URLUnencoded|P(I|OSITIVE_INFINITY)|f(ilename|o(nt(Size|Family|Weight)|rmName)|rame(s|Element)|gColor)|E|whiteSpace|l(i(stStyleType|n(eHeight|kColor))|o(ca(tion(bar)?|lName)|wsrc)|e(ngth|ft(Context)?)|a(st(M(odified|atch)|Index|Paren)|yer(s|X)|nguage))|a(pp(MinorVersion|Name|Co(deName|re)|Version)|vail(Height|Top|Width|Left)|ll|r(ity|guments)|Linkcolor|bove)|r(ight(Context)?|e(sponse(XML|Text)|adyState))|global|x|m(imeTypes|ultiline|enubar|argin(Right|Bottom|Top|Left))|L(N(10|2)|OG(10E|2E))|b(o(ttom|rder(Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(Color|Image)))\b/g },

  { name: 'support constant dom js',
    match: /(s(hape|ystemId|c(heme|ope|rolling)|ta(ndby|rt)|ize|ummary|pecified|e(ctionRowIndex|lected(Index)?)|rc)|h(space|t(tpEquiv|mlFor)|e(ight|aders)|ref(lang)?)|n(o(Resize|tation(s|Name)|Shade|Href|de(Name|Type|Value)|Wrap)|extSibling|ame)|c(h(ildNodes|Off|ecked|arset)?|ite|o(ntent|o(kie|rds)|de(Base|Type)?|l(s|Span|or)|mpact)|ell(s|Spacing|Padding)|l(ear|assName)|aption)|t(ype|Bodies|itle|Head|ext|a(rget|gName)|Foot)|i(sMap|ndex|d|m(plementation|ages))|o(ptions|wnerDocument|bject)|d(i(sabled|r)|o(c(type|umentElement)|main)|e(clare|f(er|ault(Selected|Checked|Value)))|at(eTime|a))|useMap|p(ublicId|arentNode|r(o(file|mpt)|eviousSibling))|e(n(ctype|tities)|vent|lements)|v(space|ersion|alue(Type)?|Link|Align)|URL|f(irstChild|orm(s)?|ace|rame(Border)?)|width|l(ink(s)?|o(ngDesc|wSrc)|a(stChild|ng|bel))|a(nchors|c(ce(ssKey|pt(Charset)?)|tion)|ttributes|pplets|l(t|ign)|r(chive|eas)|xis|Link|bbr)|r(ow(s|Span|Index)|ules|e(v|ferrer|l|adOnly))|m(ultiple|e(thod|dia)|a(rgin(Height|Width)|xLength))|b(o(dy|rder)|ackground|gColor))\b/g },

  { name: 'support constant dom js',
    match: /\b(ELEMENT_NODE|ATTRIBUTE_NODE|TEXT_NODE|CDATA_SECTION_NODE|ENTITY_REFERENCE_NODE|ENTITY_NODE|PROCESSING_INSTRUCTION_NODE|COMMENT_NODE|DOCUMENT_NODE|DOCUMENT_TYPE_NODE|DOCUMENT_FRAGMENT_NODE|NOTATION_NODE|INDEX_SIZE_ERR|DOMSTRING_SIZE_ERR|HIERARCHY_REQUEST_ERR|WRONG_DOCUMENT_ERR|INVALID_CHARACTER_ERR|NO_DATA_ALLOWED_ERR|NO_MODIFICATION_ALLOWED_ERR|NOT_FOUND_ERR|NOT_SUPPORTED_ERR|INUSE_ATTRIBUTE_ERR)\b/g },

  { name: 'support function event-handler js',
    match: /\bon(R(ow(s(inserted|delete)|e(nter|xit))|e(s(ize(start|end)?|et)|adystatechange))|Mouse(o(ut|ver)|down|up|move)|B(efore(cut|deactivate|u(nload|pdate)|p(aste|rint)|editfocus|activate)|lur)|S(croll|top|ubmit|elect(start|ionchange)?)|H(over|elp)|C(hange|ont(extmenu|rolselect)|ut|ellchange|l(ick|ose))|D(eactivate|ata(setc(hanged|omplete)|available)|r(op|ag(start|over|drop|en(ter|d)|leave)?)|blclick)|Unload|P(aste|ropertychange)|Error(update)?|Key(down|up|press)|Focus|Load|A(ctivate|fter(update|print)|bort))\b/g },

  { name: 'keyword operator js',
    match: /!|\$|%|&|\*|\-\-|\-|\+\+|\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\|\||\?\:|\*=|%=|\+=|\-=|&=|\^=|\b(in|instanceof|new|delete|typeof|void)\b/g },

  { name: 'constant language js',
    match: /(Infinity|NaN|undefined)\b/g },

  { name: 'punctuation terminator statement js',
    match: /\;/g },

  { name: 'meta delimiter object comma js',
    match: /,[ |\t]*/g },

  { name: 'meta delimiter method period js',
    match: /\./g },

  { name: 'meta brace curly js',
    match: /\{|\}/g },

  { name: 'meta brace round js',
    match: /\(|\)/g },

  { name: 'meta brace square js',
    match: /\[|\]/g }
])
