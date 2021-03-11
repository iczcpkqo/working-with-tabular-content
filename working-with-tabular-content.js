//log, ready implement class tdEditString
/**
 * common function
 */
function getRandomName(firstNameBox, lastNameBox){
    return firstNameBox[~~(Math.random()*100)] + ' ' + lastNameBox[~~(Math.random()*100)];
}
function getRandomScore(){
    let r = ~~(Math.random()*150);
    return r>100? 100 - ~~(Math.random()*10):r;
}
function getRandomId(){
    return ~~(Math.random()*100000000);
}
function getRandomCookies(first, last, count){
    let cookies = [];
    for (let i=0; i<count; i++){
        let jo = {
            'name': getRandomName(first, last),
            'id': getRandomId(),
            'assignment 1': getRandomScore(),
            'assignment 2': getRandomScore(),
            'assignment 3': getRandomScore(),
            'assignment 4': getRandomScore(),
            'assignment 6': getRandomScore(),
            'assignment 7': getRandomScore(),
            'assignment 8': getRandomScore(),
            'assignment 9': getRandomScore(),
            'assignment 5': getRandomScore()
    };
        cookies.push(jo);
    }
    return cookies;
}
// [
//     {'per':93-100, 'let':'A',  'sca':4.0},
//     {'per':90-92,  'let':'A-', 'sca':3.7},
//     {'per':87-89,  'let':'B+', 'sca':3.3},
//     {'per':83-86,  'let':'B',  'sca':3.0},
//     {'per':80-82,  'let':'B-', 'sca':2.7},
//     {'per':77-79,  'let':'C+', 'sca':2.3},
//     {'per':73-76,  'let':'C',  'sca':2.0},
//     {'per':70-72,  'let':'C-', 'sca':1.7},
//     {'per':67-69,  'let':'D+', 'sca':1.3},
//     {'per':63-66,  'let':'D',  'sca':1.0},
//     {'per':60-62,  'let':'D-', 'sca':0.7},
//     {'per':`<60`,  'let':'F',  'sca':0.0}
// ]

/**
 * constant variable
 */
const __STUDENT_NAME__ = 'Xiang Mao';
const __STUDENT_ID__ = '20251952';

/**
 * global variable
 */
var g_data_conversion;
var g_data_cookie;
var g_firstname_box;
var g_lastname_box;
var g_table_thead;
var g_table_tbody;
var g_table_row;
var g_table_col;
var g_undo_row;
var g_undo_col;
var g_table;

/**
 * page load
 */
function pageLoad (){
    initGlobalVariable();
    initTable();
    initBind();
}

function initGlobalVariable(){
    g_data_conversion = [
        {'per':93, 'let':'A',  'sca':'4.0'},
        {'per':90,  'let':'A-', 'sca':'3.7'},
        {'per':87,  'let':'B+', 'sca':'3.3'},
        {'per':83,  'let':'B',  'sca':'3.0'},
        {'per':80,  'let':'B-', 'sca':'2.7'},
        {'per':77,  'let':'C+', 'sca':'2.3'},
        {'per':73,  'let':'C',  'sca':'2.0'},
        {'per':70,  'let':'C-', 'sca':'1.7'},
        {'per':67,  'let':'D+', 'sca':'1.3'},
        {'per':63,  'let':'D',  'sca':'1.0'},
        {'per':60,  'let':'D-', 'sca':'0.7'},
        {'per':0,  'let':'F',  'sca':'0.0'}
        ]

    g_firstname_box = [
        'MARK', 'VINCENT', 'LYNCH', 'DAVID', 'RALPH', 'HETHERINGTON', 'SULTAN', 'NUMYALAI', 'RICHARD', 'OGBONNAYA',
        'ANDREI', 'GHET', 'INGRID', 'PÉREZ', 'AGUILERA', 'TADHG', 'JAMES', 'WHITE', 'TAMARA', 'VERSHININA',
        'JORDAN', 'AYOMILEKAN', 'SHODIPO', 'GANG', 'AN', 'JOSE', 'LORENZO', 'DIAGO', 'BOLUWATIFE', 'NICK',
        'OGUNTUASE', 'JACK', 'DIGNAM', 'MARK', 'MC', 'GEE', 'SANDRA', 'ANGELIKA', 'PILSZAK', 'ASTLE',
        'MALCOLM', 'CUTINHA', 'JAKE', 'SIEWER', 'LAURENTIU', 'IOSIF', 'MOLDOVAN', 'ENDA', 'MARK', 'HOSTY',
        'LOLA', 'KATE', 'CROWLEY', 'JAMIE', 'DOWLING', 'JOSEPH', 'OLUMIDE', 'AKANDE', 'CIARAN', 'RAMSEY-MACLEOD',
        'NINIKACHUKWU', 'UDOCHUKWU', 'JOHN', 'EMEZI', 'RIÁN', 'BERNARD', 'DALY', 'CLARKE', 'STEPHEN', 'JOSEPH',
        'NOLAN', 'CLINTON', 'PAUL', 'JAMES', 'BATES', 'CONOR', 'GERARD', 'WALSH', 'CIARAN', 'MC',
        'GINLEY', 'RAJENDR', 'SINGH', 'SCOTT', 'MATTHEW', 'LEIGH', 'SYED', 'MUHAMMAD', 'KHURSHID', 'ABBAS',
        'JEMMA', 'MOLLOY', 'EMMANUEL', 'OLUWATOMISIN', 'AKINBOREWA', 'SEIK', 'YAN', 'CHOONG', 'ANNMARY', 'TREASA'
    ];
    g_lastname_box = [
        'NICK', 'OGUNTUASE', 'JACK', 'DIGNAM', 'MARK', 'MC', 'GEE', 'SANDRA', 'ANGELIKA', 'PILSZAK',
        'ASTLE', 'MALCOLM', 'CUTINHA', 'JAKE', 'SIEWER', 'LAURENTIU', 'IOSIF', 'MOLDOVAN', 'ENDA', 'MARK',
        'HOSTY', 'LOLA', 'KATE', 'CROWLEY', 'JAMIE', 'DOWLING', 'JOSEPH', 'OLUMIDE', 'AKANDE', 'CIARAN',
        'RAMSEY-MACLEOD', 'NINIKACHUKWU', 'UDOCHUKWU', 'JOHN', 'EMEZI', 'RIÁN', 'BERNARD', 'DALY', 'CLARKE', 'STEPHEN',
        'JOSEPH', 'NOLAN', 'CLINTON', 'PAUL', 'JAMES', 'BATES', 'CONOR', 'GERARD', 'WALSH', 'CIARAN',
        'MC', 'GINLEY', 'RAJENDR', 'SINGH', 'SCOTT', 'MATTHEW', 'LEIGH', 'SYED', 'MUHAMMAD', 'KHURSHID',
        'ABBAS', 'JEMMA', 'MOLLOY', 'EMMANUEL', 'OLUWATOMISIN', 'AKINBOREWA', 'SEIK', 'YAN', 'CHOONG', 'ANNMARY',
        'TREASA', 'JOSEPH', 'ROSS', 'WARD', 'HASSANATOU', 'DIALLO', 'KONRAD', 'SOKUN', 'EMMETT', 'PATRICK',
        'MULROY', 'COLM', 'ALEXANDER', 'DONOHUE', 'ALEXANDRU', 'BOGDAN', 'DUMITRU', 'JONATHAN', 'STEPHEN', 'MC',
        'NAMEE', 'JASON', 'DRAGOMIR', 'OISIN', 'THOMAS', 'HAMILL', 'CRISTINA', 'GONZALEZ', 'MARRERO', 'JOSIAH'
    ];

}

function initTable(){
    g_table = new Table();

    g_table.showInId('table-box');
    g_table.injectTheadFixed(['Student Name', 'Student ID', 'Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4', 'Assignment 5', 'Assignment 2', 'Assignment 3', 'Assignment 4', 'Assignment 5']);

    g_table.injectMultiRows(getRandomCookies(g_firstname_box, g_lastname_box, 10));

}
function initBind(){
    let finalGrade = document.getElementById('final-grade');
    let addRow = document.getElementById('add-row');
    let addCol = document.getElementById('add-col');

    finalGrade.addEventListener('click', addGradeClick);
    addRow.addEventListener('click', addRowClick);
}


/**
 * base object
 */
class Base{
    constructor(){
        this.obj = '';
        this.nodeBook = [];
    }
    get class(){
        return this._class;
    }
    set class(cls){
        this._class = cls;
        this.obj.setAttribute('class', this._class);
    }

    /**
     * obj function
     */
    addClass(cls) {
        this._class = this._class || '';
        if (this._class.indexOf(cls) !== -1)
            return false;
        this._class += ' ' + cls;
        // this._class = this._class.replace(/(^\s*)|(\s*$)/g,'');
        this._class = this._class.trim();
        this.obj.setAttribute('class', this._class);
    }

    removeClass(cls) {
        // console.log(cls + '||' + this._class);
        // console.log(cls + '||' + this._class);

        this._class = this._class || '';
        if (this._class.indexOf(cls) === -1){
            // alert(1);
            // console.log('fffff');
            return false;
        }

        this._class = this._class.replace(cls + ' ', '');
        this._class = this._class.replace(' ' + cls, '');
        this._class = this._class.replace(cls, '');
        this.obj.setAttribute('class', this._class);
    }

    cellSelected(){
        this.addClass('sel');
    }
    cellSelectedNot(){
        this.removeClass('sel');
    }
    cellSelectedToggle(){
        this._class = this._class || '';
        if (this._class.indexOf('sel') === -1)
            this.cellSelected();
        else
            this.cellSelectedNot();
    }
}

/**
 * table object
 */
class Table extends Base {
    constructor(){
        super();
        this.nodeBook = {
            'thead':[],
            'tbody':[]
        }
        this.unSub = 0;

        this.obj = document.createElement('table');
        this.theadNode = document.createElement('thead');
        this.theadNodeRow = document.createElement('tr');
        this.tbodyNode = document.createElement('tbody');

        let thScore = new ThScore();
        thScore.parentNode = this;
        this.nodeBook['thead'].push(thScore);
        this.theadNodeRow.appendChild(thScore.obj);

        this.obj.appendChild(this.theadNode);
        this.obj.appendChild(this.tbodyNode);
        this.theadNode.appendChild(this.theadNodeRow);

        // this.obj.className = 'per';
        this.obj.setAttribute('cellspacing', '0');
        this.perScore();
    }

    /**
     * object function
     */
    showInId(box){
        document.getElementById(box).appendChild(this.obj);
    }

    /**
     * Add Fixed titles of the column by strings
     * @param ths, array = [col-name 1, col-name 2, ... , col-name n];
     */
    injectTheadFixed (ths){
        for (let i in ths){
            let node = new ThFixed();
            // let node = document.createElement('th');
            node.text = ths[i];
            this.addTh(node);
        }
    }

    /**
     * Add Editable titles of the column by strings
     * @param ths, array = [col-name 1, col-name 2, ... , col-name n];
     */
    injectTheadEditable (ths){
        for (let i in ths){
            let node = new ThEdit();
            // let node = document.createElement('th');
            node.text = ths[i];
            this.addTh(node);
        }
    }

    injectRow(data){
        // let keys = Object.keys(this.nodeBook.thead);
        // let tdBox = document.createElement('tr');
        let row = new RowLine();
        let node = '';
        let score = {
            sum: 0,
            count: 0
        }

        for(let i in data){
            if(i === 'name') {
                node = new TdStudent();
                node.addClass('student');
            }
            else if (i === 'id') {
                node = new TdFixed();
                node.addClass('student-id');
            }
            else {
                node = new TdEdit();
                score.sum+=data[i];
                score.count++;
            }
            node.text = data[i];
            row.addObjCell(node);
        }

        row.objScore.injectScore(score);
        this.addRow(row);
    }

    injectMultiRows(data){
        for (let i=0; i<data.length; i++)
            this.injectRow(data[i]);
    }

    createNewRow() {
        // let keys = Object.keys(this.nodeBook.thead);
        // let tdBox = document.createElement('tr');
        let row = new RowLine();
        let node = '';
        let count = g_table.nodeBook.thead.length;

        for (let i=0; i<count; i++){
            if(i<2)
                node = new TdEditString();
            else
                node = new TdEdit();
            node.text = '-';
            row.addObjCell(node);
        }
        this.addRow(row);
    }

    /**
     * Add title of the column
     * @param thNode, TH Cell Object
     */
    addTh(thNode){
        // this.nodeBook.thead[this.nodeBook.thead.length] = this.nodeBook.thead.slice(-1);
        // this.nodeBook.thead[this.nodeBook.thead.length-2] = thNode;
        // this.theadNodeRow.insertBefore(thNode.obj, this.theadNodeRow.lastChild);

        this.nodeBook.thead[this.nodeBook.thead.length] = this.nodeBook.thead[this.nodeBook.thead.length-1];
        this.nodeBook.thead[this.nodeBook.thead.length-2] = thNode;
        this.theadNodeRow.insertBefore(thNode.obj, this.theadNodeRow.lastChild);
    }

    addRow(rowNode){
        rowNode.parentNode = this;
        // this.nodeBook.tbody[this.nodeBook.tbody.length] = {};
        // this.nodeBook.tbody[this.nodeBook.tbody.length-1] = rowNode;
        this.nodeBook.tbody.push(rowNode);
        this.tbodyNode.appendChild(rowNode.obj);
    }
    addCol(){
    }

    scoreToggle(){
        if(this.obj.classList.contains('per'))
            this.letScore();
        else if(this.obj.classList.contains('let'))
            this.scaScore();
        else
            this.perScore();
    }

    perScore(){
        this.removeClass('let');
        this.removeClass('sca');

        this.addClass('per');
    }
    letScore(){
        this.removeClass('per');
        this.removeClass('sca');

        this.addClass('let');
    }
    scaScore(){
        this.removeClass('let');
        this.removeClass('per');

        this.addClass('sca');
    }


    getTotalUnSub(){
        this.unSub = 0;
        for(let i in this.nodeBook.tbody){
            let row = this.nodeBook.tbody[i].nodeBook;
            for (let j=2; j<(row.length-1 || 0); j++)
                if(row[j].text === '-')
                    this.unSub +=1;
        }

        return this.unSub;
    }

}

/**
 * thead Object
 */
// class thead {
//     constructor() {
//         this.nodeBook = []
//     }
// }
//
// /**
//  * tbody Object
//  */
// class tbody{
//
// }

/**
 * row & col Object
 */
class RowLine extends Base{
    constructor() {
        super();
        this.obj = document.createElement('tr');
        this.objScore = new TdScore();
        this.objScore.parentNode = this;

        this.addClass('row');

        this.nodeBook[0] = this.objScore;
        this.obj.appendChild(this.objScore.obj);

        // console.log(this.nodeBook);
    }

    addObjCell(cell){
        cell.parentNode = this;
        this.nodeBook[this.nodeBook.length] = this.nodeBook.slice(-1);
        this.nodeBook[this.nodeBook.length-2] = cell
        this.obj.insertBefore(cell.obj, this.obj.lastChild);
    }

    statScore(){
        let score = {
            'sum': 0,
            'count': 0
        };
        for (let i=2; i<this.nodeBook.length-1; i++){
            if(!isNaN(this.nodeBook[i].text))
                score.sum += 1*this.nodeBook[i].text;
            score.count++;
        }

        // let childrenBox = this.obj.children;
        // for (let i=2; i<childrenBox.length-1; i++){
        //     let a = childrenBox[i].getElementsByTagName('a')[0].innerHTML;
        //     if (isNaN(a))
            // if (!isNaN(childrenBox[0h]));
                // score.sum += this.nodeBook[i].text;
            // score.count++;
        // }

        this.objScore.injectScore(score);
    }
}

// class colLine{
//
// }

/**
 * cell Object
 */
class Cell extends Base {
    constructor(type) {
        super();
        /**
         * create element
         */
        this.obj = document.createElement(type);
        this.aNode = document.createElement('a');
        // this.inputNode = document.createElement('input');

        /**
         *  deal data
         */
        // this.parentNode = '';

        /**
         * init attribute
         */
        this.addClass('cell');
        // this.obj.setAttribute('row-num', '-');
        // this.obj.setAttribute('col-num', '-');
        this.obj.setAttribute('noWrap','noWrap');
        // word-wrap:break-word!important;
        // this.inputNode.setAttribute('type', 'text');

        /**
         * build cell
         */
        this.obj.appendChild(this.aNode);
        // this.obj.appendChild(this.inputNode);

        /**
         * bind addEventListener
         */
        // this.bindCellBlur();
    }

    get text(){
        return this._text;
    }
    set text(text){
        this._text = text;
        this.aNode.innerHTML = this._text;
        // this.inputNode.setAttribute('value', this._text);
    }

    // get class(){
    //     return this._class;
    // }
    // set class(cls){
    //     this._class = cls;
    //     this.obj.setAttribute('class', this._class);
    // }

    get row(){
        return this._row;
    }
    set row(row){
        this._row = row;
        this.obj.setAttribute('row-num', this._row);
    }

    get col(){
        return this._col;
    }
    set col(col){
        this._col = col;
        this.obj.setAttribute('col-num', this._col);
    }

    /**
     * bind addEventListener for extends
     */
    bindCellClick(){
        let cellObject = this;
        this.obj.addEventListener('click',function(event){cellObject.cellClick(event, cellObject);});
    }

    bindCellContextmenu(){
        let cellObject = this;
        this.obj.addEventListener('contextmenu',function(event){cellObject.cellRightClick(event, cellObject);});
    }

    bindCellInput(){
        let cellObject = this;
        this.aNode.addEventListener('input', function(event){cellObject.cellInput(event, cellObject);});
    }
    bindCellKeypress(){
        let cellObject = this;
        this.aNode.addEventListener('keypress', function(event){cellObject.cellKeypress(event, cellObject);});
    }

    bindCellFocus(){
        let cellObject = this;
        this.aNode.addEventListener('focus',function(event){cellObject.cellFocus(event, cellObject);});
    }

    bindCellBlur(){
        let cellObject = this;
        // this.inputNode.addEventListener('blur', function(event){cellObject.cellBlur(event, cellObject);});
        this.aNode.addEventListener('blur', function(event){cellObject.cellBlur(event, cellObject);});
    }

    /**
     * Listener function
     */
    cellClick(event, cellObject) {
        cellObject.cellEdited();
    };

    cellRightClick(event, cellObject) {
        // this.innerHTML = '324234234234a';
        event.preventDefault();
    }

    cellInput(event, cellObject) {
        // if(!event.data)
        //     cellObject.cellBlur(event, cellObject);
        // console.log(event.keyCode);
        // alert(12);
        // cellObject.aNode.setAttribute('txt', cellObject.aNode.innerHTML);
        // alert('input in');
        // console.log('cell input this' + this);
        // console.log(this);
    }
    cellKeypress(event, cellObject) {
        if(event.keyCode === 13)
            cellObject.cellBlur(event, cellObject);
    }

    cellFocus(event, cellObject){
        cellObject.cellEdited();
    }
    cellBlur(event, cellObject){
        cellObject.aNode.blur();
        cellObject.text = cellObject.aNode.innerHTML;
        cellObject.cellEditedNot();
        cellObject.cellCheckNumber();
        cellObject.parentNode.statScore();
        // alert(cellObject.text);
    }

    /**
     * obj function
     */
    cellCheckNumber() {
        this.removeClass('fail');
        if(isNaN(this.text) || this.text==='' || this.text>100 || this.text<0){
            this.text = '-';
            this.addClass('fail');
        }
    }

    cellEdited() {
        if (this.aNode.innerHTML === '-')
            this.text = '';
        this.addClass('allow');
        this.aNode.setAttribute('contentEditable', 'true');
        this.aNode.focus();
    }

    cellEditedNot() {
        this.removeClass('allow');
        // alert(1);
    }

    cellEditToggle() {
        this._class = this._class || '';
        if (this._class.indexOf('allow') === -1)
            this.cellEdited();
        else
            this.cellEditedNot();
    }

    // cellStanded(){
    //     this.addClass('sta');
    // }
    // cellStandNot(){
    //     this.removeClass('sta');
    // }
    // cellStandToggle(){
    //     this._class = this._class || '';
    //     if (this._class.indexOf('sta') === -1)
    //         this.cellStanded();
    //     else
    //         this.cellStandNot();
    // }




}

class ThFixed extends Cell {
    constructor() {
        super('th');
        // this.inputNode.parentNode.removeChild(this.inputNode);

        this.addClass('fixed');
    }

}

class ThEdit extends Cell {
    constructor(){
        super('th');

        this.addClass('editable');

        /**
         * bind addEventListener
         */
        this.bindCellClick();
        // this.bindCellInput();
        this.bindCellKeypress();
        this.bindCellFocus();
        this.bindCellBlur();
    }
}

class ThScore extends Cell {
    constructor(){
        super('th')
        this.aNode.parentNode.removeChild(this.aNode);

        let perNode = document.createElement('a')
        let letNode = document.createElement('a')
        let scaNode = document.createElement('a')

        perNode.className = 'per'
        letNode.className = 'let'
        scaNode.className = 'sca'

        perNode.innerHTML = 'Average(%)';
        letNode.innerHTML = 'Average(Letter)';
        scaNode.innerHTML = 'Average(4.0)';

        this.obj.appendChild(perNode);
        this.obj.appendChild(letNode);
        this.obj.appendChild(scaNode);

        this.addClass('score');

        this.bindThScoreClick();
    }

    bindThScoreClick(){
        // alert(2);
        let cellObject = this;
        this.obj.addEventListener('click',function(event){cellObject.thScoreClick(event, cellObject);});
    }

    thScoreClick(event, thScore){
        // alert(1);
        thScore.parentNode.scoreToggle();
    }
}

class TdFixed extends Cell {
    constructor(){
       super('td');

       this.addClass('fixed');
    }

}

class TdStudent extends Cell {
    constructor(){
        super('td');

        this.addClass('student');

        this.bindTdStudentClick();
    }

    bindTdStudentClick(){
        let tdStudent = this;
        this.obj.addEventListener('click', function(event){
            tdStudent.tdStudentClick(event, tdStudent);
        });
    }

    tdStudentClick(event, tdStudent){
        alert('student clicked');
    }
}
class TdEdit extends Cell {
    constructor(){
        super('td');

        this.addClass('editable');

        this.bindCellClick();
        // this.bindCellInput();
        this.bindCellKeypress();
        this.bindCellFocus();
        this.bindCellBlur();
        this.bindTdEditBlur();
    }
    bindTdEditBlur(){
        let node = this;
        this.aNode.addEventListener('blur', function(event){node.tdEditBlur(event, node);});
    }
    tdEditBlur(event, node){
        document.getElementById('un-sub-number').innerHTML = node.parentNode.parentNode.getTotalUnSub();
    }
}
class TdEditString extends Cell{
    constructor(){
        super('td');

        this.addClass('editable');

        this.bindCellClick();
        this.bindCellInput();
        // this.bindCellKeypress();
        // this.bindCellFocus();
        this.bindCellBlur();
        // this.bindTdEditBlur();
    }
    bindTdEditBlur(){
        let node = this;
        this.aNode.addEventListener('blur', function(event){node.tdEditBlur(event, node);});
    }
    tdEditBlur(event, node){
        document.getElementById('un-sub-number').innerHTML = node.parentNode.parentNode.getTotalUnSub();
    }
}

class TdScore extends Cell {
    constructor(){
        super('td');

        this.aNode.parentNode.removeChild(this.aNode);
        // this.inputNode.parentNode.removeChild(this.inputNode);
        this.perNode = document.createElement('a');
        this.letNode = document.createElement('a');
        this.scaNode = document.createElement('a');

        this.perNode.className = 'per'
        this.letNode.className = 'let'
        this.scaNode.className = 'sca'

        this.perNode.innerHTML = '-';
        this.letNode.innerHTML = '-';
        this.scaNode.innerHTML = '-';

        this.obj.appendChild(this.perNode);
        this.obj.appendChild(this.letNode);
        this.obj.appendChild(this.scaNode);

        this.addClass('score');
    }

    /**
     * According the struct of data score to update score cell
     * @param score, json, score = {sum: 0, count:0}
     */
    injectScore(score){
        // console.log(score);
        // console.log(score.sum/score.count);
        // console.log((score.sum/score.count)>g_data_conversion[3].per);
        for (let i=0; i<g_data_conversion.length; i++)
            if((score.sum/score.count)>g_data_conversion[i].per){
                this.perNode.innerHTML = Number(score.sum/score.count).toFixed(0) + '%';
                this.letNode.innerHTML = g_data_conversion[i].let;
                this.scaNode.innerHTML = g_data_conversion[i].sca;
                break;
            }

        this.removeClass('red');
        if ((score.sum / score.count) < 60)
            this.addClass('red');

    }

}

/**
 * button function
 */
function addRowClick(){
    g_table.createNewRow();

}
function addColClick(){

}
function addGradeClick(){
    g_table.nodeBook.thead[g_table.nodeBook.thead.length-1].obj.click();
}
//page load
pageLoad();
