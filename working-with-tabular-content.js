/*

    Student Name: Xiang Mao
    Strudent ID: 20251952

 */

/**
 * common function
 */

/**
 * Generate a random student name
 * @param {array} firstNameBox
 * @param {array} lastNameBox
 * @returns {string} A student name
 */
function getRandomName(firstNameBox, lastNameBox){
    return firstNameBox[~~(Math.random()*100)] + ' ' + lastNameBox[~~(Math.random()*100)];
}

/**
 * Generate a random student score
 * @returns {number} A student score
 */
function getRandomScore(){
    let r = ~~(Math.random()*150);
    return r>100? 100 - ~~(Math.random()*10):r;
}

/**
 * Generate a random student ID
 * @returns {number} A student ID
 */
function getRandomId(){
    return ~~(Math.random()*100000000);
}

/**
 * Generate data with 5 assignments
 * @param {array} first A array save some first name
 * @param {array} last A array save some last name
 * @param {int} count The count of date you want to get
 * @returns {[json]}
 */
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
            'assignment 5': getRandomScore(),
    };
        cookies.push(jo);
    }
    return cookies;
}

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

/**
 * To initialize global variable
 */
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

    g_table_thead = [
        'Student Name',
        'Student ID',
        'Assignment 1',
        'Assignment 2',
        'Assignment 3',
        'Assignment 4',
        'Assignment 5',
    ]
}

/**
 * Initialize Table and insert it into DOM
 */
function initTable(){
    g_table = new Table();

    g_table.showInId('table-box');
    g_table.injectTheadFixed(g_table_thead);

    g_table.injectMultiRows(getRandomCookies(g_firstname_box, g_lastname_box, 10));

}

/**
 * All Event is bound at here
 */
function initBind(){
    let finalGrade = document.getElementById('final-grade');
    let addRow = document.getElementById('add-row');
    let addCol = document.getElementById('add-col');
    let delSel = document.getElementById('delete-sel');

    finalGrade.addEventListener('click', addGradeClick);
    addRow.addEventListener('click', addRowClick);
    addCol.addEventListener('click', addColClick);
    delSel.addEventListener('click', deleteSelectedItems);
}


/**
 * Base object
 * For every Object to extend
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
     * Obj function
     * About Object not event
     */
    /**
     * Add a class in a node by class name
     * @param {String} cls
     * @returns {boolean} Get false if add fail
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

    /**
     * Remove class by a class name
     * @param {String} cls A class name
     * @returns {boolean} Get false if it fail
     */
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

    /**
     * Change status of A node to be selected by a node object
     */
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
 * Adding table headers, adding whole rows
 */
class Table extends Base {
    constructor(){
        super();
        /**
         * nodeBook
         * @type {json} deleteCol =  {{thead: {}, rows: [{td: {}, row: {}}]}[]}
         */
        this.nodeBook = {
            'thead':[],
            'tbody':[],
            'deleteRow':[{}],
            'deleteCol':[{}]
        }

        // deleteCol = [
        //     {
        //         'thead': {},
        //         'rows': [
        //             {
        //                 'row': {},
        //                 'td': {}
        //             }
        //         ]
        //     }
        // ]

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
     * Object function
     * @param {String} box, DOM Element ID
     */
    showInId(box){
        document.getElementById(box).appendChild(this.obj);
    }

    /**
     * Add Fixed titles of the column by strings array
     * @param {array} ths, array = [col-name 1, col-name 2, ... , col-name n];
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

    /**
     * Creating whole rows using json object
     * @param {json} data,
     */
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

    /**
     * Insert many rows by json array
     * @param {[json]} data
     */
    injectMultiRows(data){
        for (let i=0; i<data.length; i++)
            this.injectRow(data[i]);
    }

    /**
     * Create a new empty row
     */
    createNewRow() {
        let row = new RowLine();
        let node = '';
        let count = this.nodeBook.thead.length;

        for (let i=0; i<count-1; i++){
            if (i === 0)
                node = new TdStudent('new');
            else if (i === 1)
                node = new TdFixed('new');
            else
                node = new TdEdit();
            node.text = '-';
            node.cellClick('', node);
            row.addObjCell(node);
        }
        this.addRow(row);
    }

    /**
     * Create a new empty column
     */
    createNewCol(){
        for (let i=0; i<this.nodeBook.tbody.length+1; i++){
            if (!i) {
                let newTh = new ThEdit('Assignment ' + (this.nodeBook.thead.length-2).toString() + '&nbsp;&nbsp;&nbsp;&nbsp;');
                newTh.text = '-';
                newTh.cellClick('', newTh);
                this.addTh(newTh);
            } else {
                let newTd = new TdEdit();
                newTd.text = '-';
                newTd.cellClick('', newTd);
                this.nodeBook.tbody[i-1].addObjCell(newTd);
            }
        }

    }

    /**
     * Add title of the column
     * @param thNode, TH Cell Object
     */
    addTh(thNode){
        thNode.parentNode = this;

        this.nodeBook.thead[this.nodeBook.thead.length] = this.nodeBook.thead[this.nodeBook.thead.length-1];
        this.nodeBook.thead[this.nodeBook.thead.length-2] = thNode;
        this.theadNodeRow.insertBefore(thNode.obj, this.theadNodeRow.lastChild);
    }

    /**
     * Insert a row into DOM
     * @param {RowLine} rowNode, RowLine object
     */
    addRow(rowNode){
        rowNode.parentNode = this;
        this.nodeBook.tbody.push(rowNode);
        this.tbodyNode.appendChild(rowNode.obj);
    }
    addCol(){
    }

    /**
     * Switch the type of final grade
     */
    scoreToggle(){
        if(this.obj.classList.contains('per'))
            this.letScore();
        else if(this.obj.classList.contains('let'))
            this.scaScore();
        else
            this.perScore();
    }

    /**
     * Switch the type to percent
     */
    perScore(){
        this.removeClass('let');
        this.removeClass('sca');

        this.addClass('per');
    }

    /**
     * Switch the type to letter
     */
    letScore(){
        this.removeClass('per');
        this.removeClass('sca');

        this.addClass('let');
    }

    /**
     * Switch the type to scale
     */
    scaScore(){
        this.removeClass('let');
        this.removeClass('per');

        this.addClass('sca');
    }

    /**
     * Calculate the number of all Un-Submitted cell
     * @returns {number}, The number of Un-Submitted
     */
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

    /**
     * Delete A Row by Student Name Node
     * @param {RowLine} row, Row Object
     */
    deleteRow(row){
        let tb = this.nodeBook;
        for(let i in tb.tbody)
            if(Object.is(tb.tbody[i], row)){
                tb.deleteRow.push(row);
                tb.tbody.splice(i,1);
                this.tbodyNode.removeChild(row.obj);
                break;
            }
    }

    /**
     * Deleted A Column By A TH Node
     * @param {ThFixed || ThEdit}  thNode
     * @returns {boolean}
     */
    deleteCol(thNode) {
        let tb = this.nodeBook;

        if(Object.is(tb.thead[0], thNode) || Object.is(tb.thead[1], thNode) ){
            alert('You can not delete STUDENT NAME COLUMN and STUDENT ID COLUMN')
            return false;
        }

        for (let i in tb.thead){
            if(!Object.is(tb.thead[i], thNode))
                continue;

            let delCol = {
                'thead': {},
                'rows':[{}]
            }
            delCol.thead = tb.thead.splice(i,1)[0];
            this.theadNodeRow.removeChild(thNode.obj);

            for(let j in tb.tbody){
                let ro = tb.tbody[j];
                let de = tb.tbody[j].nodeBook.splice(i,1)[0]
                ro.obj.removeChild(de.obj);
                delCol.rows.push({ 'row': ro, 'td': de });
            }
            break;
        }
    }


}

/**
 * row & col Object
 */

/**
 * RowLine Object
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

    }

    /**
     * Add a cell by a cell object
     * @param {Cell || ThFixed || ThEdit || ThScore || TdStudent || TdFixed || TdEdit || TdScore} cell, Any Object that extends from Cell Object
     */
    addObjCell(cell){
        cell.parentNode = this;
        this.nodeBook[this.nodeBook.length] = this.nodeBook.slice(-1);
        this.nodeBook[this.nodeBook.length-2] = cell
        this.obj.insertBefore(cell.obj, this.obj.lastChild);
    }

    /**
     * Calculate the score of this RowLine Object and update it in DOM
     */
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
        this.objScore.injectScore(score);
    }
}

/**
 * cell Object
 */

/**
 *  Cell Object
 */
class Cell extends Base {
    constructor(type) {
        super();
        /**
         * create element
         */
        this.obj = document.createElement(type);
        this.aNode = document.createElement('a');

        /**
         *  deal data
         */

        /**
         * init attribute
         */
        this.addClass('cell');
        this.obj.setAttribute('noWrap','noWrap');

        /**
         * build cell
         */
        this.obj.appendChild(this.aNode);

    }

    get text(){
        return this._text;
    }
    set text(text){
        this._text = text;
        this.aNode.innerHTML = this._text;
    }

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
    /**
     * Bind the Click Event to Cell
     */
    bindCellClick(){
        let cellObject = this;
        this.obj.addEventListener('click',function(event){cellObject.cellClick(event, cellObject);});
    }

    /**
     * Bind the Contextmenu Event to Cell
     */
    bindCellContextmenu(){
        let cellObject = this;
        this.obj.addEventListener('contextmenu',function(event){cellObject.cellRightClick(event, cellObject);});
    }

    /**
     * Bind the Input Event to Cell
     */
    bindCellInput(){
        let cellObject = this;
        this.aNode.addEventListener('input', function(event){cellObject.cellInput(event, cellObject);});
    }

    /**
     * Bind the Keypress Event to Cell
     */
    bindCellKeypress(){
        let cellObject = this;
        this.aNode.addEventListener('keypress', function(event){cellObject.cellKeypress(event, cellObject);});
    }

    /**
     * Bind the focus Event to Cell
     */
    bindCellFocus(){
        let cellObject = this;
        this.aNode.addEventListener('focus',function(event){cellObject.cellFocus(event, cellObject);});
    }

    /**
     * Bind the blur Event to Cell
     */
    bindCellBlur(){
        let cellObject = this;
        // this.inputNode.addEventListener('blur', function(event){cellObject.cellBlur(event, cellObject);});
        this.aNode.addEventListener('blur', function(event){cellObject.cellBlur(event, cellObject);});
    }

    /**
     * Listener function
     */

    /**
     * To Implement the click event of Cell
     * @param event
     * @param {Cell} cellObject
     */
    cellClick(event, cellObject) {
        cellObject.cellEdited();
    };

    /**
     * To Implement the right click event of Cell
     * @param event
     * @param {Cell} cellObject
     */
    cellRightClick(event, cellObject) {
        // this.innerHTML = '324234234234a';
        event.preventDefault();
    }

    /**
     * To Implement the input event of Cell
     * @param event
     * @param {Cell} cellObject
     */
    cellInput(event, cellObject) {

    }

    /**
     * To Implement the keypress event of Cell, press Enter can be used
     * @param event
     * @param {Cell} cellObject
     */
    cellKeypress(event, cellObject) {
        if(event.keyCode === 13)
            cellObject.cellBlur(event, cellObject);
    }

    /**
     * To Implement the focus event of Cell
     * @param event
     * @param {Cell} cellObject
     */
    cellFocus(event, cellObject){
        cellObject.cellEdited();
    }

    /**
     * To Implement the blur event of Cell
     * @param event
     * @param {Cell} cellObject
     */
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
    /**
     * To Check the Number of current cell object node is right or not
     */
    cellCheckNumber() {
        this.removeClass('fail');
        if(isNaN(this.text) || this.text==='' || this.text>100 || this.text<0){
            this.text = '-';
            this.addClass('fail');
        }
    }

    /**
     * To change the status of this cell node to editable
     */
    cellEdited() {
        if (this.aNode.innerHTML === '-')
            this.text = '';
        this.addClass('allow');
        this.aNode.setAttribute('contentEditable', 'true');
        this.aNode.focus();
    }

    /**
     * To change the status of this cell node to un-editable
     */
    cellEditedNot() {
        this.removeClass('allow');
        // alert(1);
    }

    /**
     * To toggle the status of editable
     */
    cellEditToggle() {
        this._class = this._class || '';
        if (this._class.indexOf('allow') === -1)
            this.cellEdited();
        else
            this.cellEditedNot();
    }
}

/**
 * ThFixed Object
 */
class ThFixed extends Cell {
    constructor() {
        super('th');

        this.addClass('fixed');
        this.bindThFixedClick();

    }

    /**
     * Bind function
     */
    /**
     * To bind the click event to this node
     */
    bindThFixedClick(){
        let node = this;
        this.obj.addEventListener('click', function(event){node.thFixedClick(event, node);});
    }

    /**
     * Event function
     */
    /**
     * To implement the click event, change the status of Edit
     * @param event
     * @param {TdStudent} tdStudent, A TdStudent Object
     */
    thFixedClick(event, tdStudent){
        let tb = this.parentNode.nodeBook;
        this.cellSelectedToggle();
        for(let i in tb.tbody)
            tb.tbody[i].nodeBook[tb.thead.indexOf(this)].cellSelectedToggle();
    }

}

/**
 * ThEdit Object
 */
class ThEdit extends Cell {
    constructor(text=''){
        super('th');

        this.addClass('editable');
        setTimeout(function(node){
            node.text = text;
        }, 0, this, text);


        /**
         * bind addEventListener
         */
        this.bindCellClick();
        this.bindThEditClick();
        this.bindThEditBlur();
        this.bindCellFocus();
        this.bindThEditKeypress();

    }

    /**
     * Bind functions, the below functions just for bind the event to DOM Elements
     */
    bindThEditClick(){
        let node = this;
        this.obj.addEventListener('click', function(event){
            node.thEditClick(event, node);
        });
    }
    bindThEditBlur(){
        let node = this;
        this.aNode.addEventListener('blur', function(event){
            node.thEditBlur(event, node);
        });
    }
    bindThEditKeypress(){
        let node = this;
        this.obj.addEventListener('keypress', function(event){
            node.thEditKeypress(event, node);
        });
    }

    /**
     * Event functions
     */

    /**
     * Implement the click event, show a input node, change the status to editable
     * @param event
     * @param node
     */
    thEditClick(event, node){
        node.aNode.focus();
        let tb = this.parentNode.nodeBook;
        this.cellSelectedToggle();
        for(let i in tb.tbody)
            tb.tbody[i].nodeBook[tb.thead.indexOf(this)].cellSelectedToggle();
    }

    /**
     * Implement the click event, show a input node, change the status to editable
     * @param event
     * @param {ThEdit} node
     */
    thEditBlur(event, node){
        node.aNode.blur();
        node.text = node.aNode.innerHTML;
        node.cellEditedNot();

        this.removeClass('fail');
        if(node.text===''){
            this.text = '-';
            this.addClass('fail');
        }
        node.cellEditedNot();
    }
    /**
     * Implement the keypress event, hidden a input node, change the status to un-editable by pressing Enter key
     * @param event
     * @param {ThEdit} node
     */
    thEditKeypress(event, node){
        if(event.keyCode === 13)
            node.tdNewStudentBlur(event, node);
    }
}

/**
 * ThScore Object
 */
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

    /**
     * Bind event, the below functions only for binding events
     */
    bindThScoreClick(){
        // alert(2);
        let cellObject = this;
        this.obj.addEventListener('click',function(event){cellObject.thScoreClick(event, cellObject);});
    }

    /**
     * Implement ThScore Node click event, To change the status of The whole Score column
     * @param event
     * @param thScore
     */
    thScoreClick(event, thScore){
        // alert(1);
        thScore.parentNode.scoreToggle();
    }
}

/**
 * TdFixed Object
 */
class TdFixed extends Cell {
    constructor(isNewFixed=false){
       super('td');
       this.isNewFixed = isNewFixed ? true : isNewFixed;

       this.addClass('fixed');

        if (this.isNewFixed) {
            this.addClass('editable');
            this.bindCellClick();
            this.bindTdNewFixedClick();
            this.bindCellFocus();
            this.bindTdNewFixedBlur();
            this.bindTdNewFixedKeypress();
        }

    }

    /**
     * Bind function, these below functions just for bind event nearly no others.
     */
    bindTdNewFixedClick(){
        let node = this;
        this.obj.addEventListener('click', function(event){
            node.tdNewFixedClick(event, node);
        });
    }
    bindTdNewFixedBlur(){
        let node = this;
        this.aNode.addEventListener('blur', function(event){
            node.tdNewFixedBlur(event, node);
        });
    }
    bindTdNewFixedKeypress(){
        let node = this;
        this.obj.addEventListener('keypress', function(event){
            node.tdNewFixedKeypress(event, node);
        });
    }

    /**
     * Event function, for Implement Event as the function name
     */
    /**
     * To let this node take a focus
     * @param event
     * @param {TdFixed} node
     */
    tdNewFixedClick(event, node){
        node.aNode.focus();
    }

    /**
     * To update the text, and change the class to be 'fail' or not by checking the content
     * @param event
     * @param {TdFixed} node
     */
    tdNewFixedBlur(event, node){
        node.aNode.blur();
        node.text = node.aNode.innerHTML;
        node.cellEditedNot();

        this.removeClass('fail');
        if(isNaN(node.text) || node.text==='' || node.text<0){
            this.text = '-';
            this.addClass('fail');
        }
        node.cellEditedNot();
    }

    /**
     * To Execute the Blur event by Pressing Enter key of keyboard
     * @param event
     * @param {TdFixed} node
     */
    tdNewFixedKeypress(event, node){
        if(event.keyCode === 13)
            node.tdNewStudentBlur(event, node);
    }
}

/**
 * TdStudent Object
 */
class TdStudent extends Cell {
    constructor(isNewStudent=false){
        super('td');
        this.isNewStudent = isNewStudent ? true:isNewStudent;

        this.addClass('student');

        if (this.isNewStudent) {
            this.addClass('editable');
            this.bindCellClick();
            this.bindTdStudentClick();
            this.bindTdNewStudentClick();
            this.bindCellFocus();
            this.bindTdNewStudentBlur();
            this.bindTdNewStudentKeypress();
            // test
            // this.bindCellBlur()
        }
        else
            this.bindTdStudentClick();

    }

    /**
     * These below functions just for binding the event as the function name, no others
     */
    bindTdStudentClick(){
        let tdStudent = this;
        this.obj.addEventListener('click', function(event){
            tdStudent.tdStudentClick(event, tdStudent);
        });
    }
    bindTdNewStudentClick(){
        let tdStudent = this;
        this.obj.addEventListener('click', function(event){
            tdStudent.tdNewStudentClick(event, tdStudent);
        });
    }
    bindTdNewStudentBlur(){
        let node = this;
        this.aNode.addEventListener('blur', function(event){node.tdNewStudentBlur(event, node);});
    }
    bindTdNewStudentKeypress(){
        let node= this;
        this.aNode.addEventListener('keypress', function(event){node.tdNewStudentKeypress(event, node);});
    }

    /**
     * To Toggle the status of the Whole Row Which this Node belong to
     * @param event
     * @param {TdStudent} tdStudent
     */
    tdStudentClick(event, tdStudent){
        // alert('student clicked');
        tdStudent.parentNode.cellSelectedToggle();

    }

    /**
     * To let this node get the focus after it is clicked
     * @param event
     * @param {TdStudent} node
     */
    tdNewStudentClick(event, node){
        node.aNode.focus();
    }

    /**
     * To Update text and check content, it will be target 'fail' if the content is wrong
     * @param event
     * @param {TdStudent} node
     */
    tdNewStudentBlur(event, node){
        node.aNode.blur();
        node.text = node.aNode.innerHTML;
        node.cellEditedNot();

        this.removeClass('fail');
        if(!isNaN(node.text) || node.text===''){
            this.text = '-';
            this.addClass('fail');
        }
        node.cellEditedNot();
    }

    /**
     * To Execute the Blur event by Pressing Enter key of keyboard
     * @param event
     * @param {TdStudent} node
     */
    tdNewStudentKeypress(event, node){
        if(event.keyCode === 13)
            node.tdNewStudentBlur(event, node);
    }

}

/**
 * TdEdit Object
 */
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

    /**
     * Just for bind event
     */
    bindTdEditBlur(){
        let node = this;
        this.aNode.addEventListener('blur', function(event){node.tdEditBlur(event, node);});
    }

    /**
     * To update the number of Un-submitted
     * @param event
     * @param {TdEdit} node
     */
    tdEditBlur(event, node){
        document.getElementById('un-sub-number').innerHTML = node.parentNode.parentNode.getTotalUnSub();
    }
}

/**
 * TdScore Object
 */
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

/**
 * To insert a new Whole empty row below to the table
 */
function addRowClick(){
    let tbBox = document.getElementsByClassName('table-box')[0];

    g_table.createNewRow();
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
    tbBox.scrollLeft = 0;

}
/**
 * To insert a new Whole empty columns below to the table
 */
function addColClick(){
    let tbBox = document.getElementsByClassName('table-box')[0];

    g_table.createNewCol();
    document.documentElement.scrollTop = 0;
    setTimeout(function(tbBox){
        tbBox.scrollLeft = tbBox.scrollWidth;
    }, 0, tbBox);

}

/**
 * To toggle the view of final grade
 */
function addGradeClick(){
    g_table.nodeBook.thead[g_table.nodeBook.thead.length-1].obj.click();
}

/**
 * To delete all the Rows and Columns that is selected
 */
function deleteSelectedItems(){
    let tb = g_table.nodeBook;
    /**
     * Delete Selected Rows
     */
    for (let i=0; i<tb.tbody.length; i++)
        if(tb.tbody[i].obj.classList.contains('sel')){
            g_table.deleteRow(tb.tbody[i]);
            i--;
        }

    /**
     * Delete Selected Columns
     */
    for (let i=2; i<tb.thead.length; i++)
        if(tb.thead[i].obj.classList.contains('sel')){
            g_table.deleteCol(tb.thead[i])
                i--;
        }
}

/**
 * page load
 */
pageLoad();
