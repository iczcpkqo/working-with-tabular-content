/**
 * common function
 */

/**
 * constant variable
 */
const __STUDENT_NAME__ = 'Xiang Mao';
const __STUDENT_ID__ = '20251952';

/**
 * global variable
 */
var g_data_cookie;
var g_table_thead;
var g_table_tbody;
var g_table_row;
var g_table_col;
var g_undo_row;
var g_undo_col;

/**
 * page load
 */
function pageLoad (){
    initGlobalVariable();
}

function initGlobalVariable(){
    g_data_cookie = [
        {
            'name': 'Xiang Mao',
            'id': 20251952,
            'score': {
                'assignment 1': 88,
                'assignment 2': 43,
                'assignment 3': 99,
                'assignment 4': 85,
                'assignment 5': 73
            }
        }, {
            'name': 'Xiang Mao',
            'id': 20251952,
            'score': {
                'assignment 1': 88,
                'assignment 2': 43,
                'assignment 3': 99,
                'assignment 4': 85,
                'assignment 5': 73
            }
        }, {
            'name': 'Xiang Mao',
            'id': 20251952,
            'score': {
                'assignment 1': 88,
                'assignment 2': 43,
                'assignment 3': 99,
                'assignment 4': 85,
                'assignment 5': 73
            }
        }, {
            'name': 'Xiang Mao',
            'id': 20251952,
            'score': {
                'assignment 1': 88,
                'assignment 2': 43,
                'assignment 3': 99,
                'assignment 4': 85,
                'assignment 5': 73
            }
        }
    ];

    let box = document.getElementById('table-box');
    let table = new Table();
    let row = new RowLine();
    let thd = new ThEdit();
    let trd = new Cell('td');

    box.appendChild(table.obj);
    table.addTh(thd);
    table.addRow(row);
    row.addCell(trd);
    thd.text = 'biao ti';
    trd.text = 'ceshi';

        // g_table_thead;
        // g_table_tbody;
        // g_table_row;
        // g_table_col;
        // g_undo_row;
        // g_undo_col;

    // test
    // let bb = document.getElementById('tett');
    //
    // let tt = new ThEdit('th');
    // let ta = new ThEdit('th');
    // let cc = new Cell('td');
    // let cca = new Cell('td');
    // let ccb = new Cell('td');
    //
    // tt.text = 'ttttttt';
    // ta.text = 'tatatat';
    // cc.text = 'ccccc';
    // cca.text  = 'cca'
    // ccb.text  = 'ccb'
    //
    // bb.appendChild(tt.obj);
    // bb.appendChild(ta.obj);
    // bb.appendChild(cc.obj);
    // bb.appendChild(cca.obj);
    // bb.appendChild(ccb.obj);
    // // bb.replaceChild(ccb.obj, bb.children[2]);
    // // alert(bb.children[3].innerHTML);
    // // bb.children[6] = ccb.obj;
    // // bb.replaceChild(ccb.obj, bb.children[3]);
    //
    // setTimeout(function(bb, ccb){
    //     bb.replaceChild(ccb.obj, bb.children[3]);
    // }, 1000, bb, ccb);
    //
    // // tt.cellSelected();
    // // tt.cellSelectedNot();
    // // tt.cellSelectedToggle();
    // // tt.cellEdited();
    //
    // // setTimeout(function(tt){
    // //     let aa = document.getElementById('aaa');
    // //     aa.appendChild(tt.obj);
    // // }, 1000, tt);
    // // tt.cellClick();
    //
    //
    // // tt.cellRemoveClass('hahhA');
    // // tt.col = 33
}

function initTable(){

}

/**
 * base object
 */
class base{
    constructor(){
        this.obj = '';
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
    AddClass(cls) {
        this._class = this._class || '';
        if (this._class.indexOf(cls) !== -1)
            return false;
        this._class += ' ' + cls;
        // this._class = this._class.replace(/(^\s*)|(\s*$)/g,'');
        this._class = this._class.trim();
        this.obj.setAttribute('class', this._class);
    }

    RemoveClass(cls) {
        this._class = this._class || '';
        if (this._class.indexOf(cls) === -1)
            return false;

        this._class = this._class.replace(cls + ' ', '');
        this._class = this._class.replace(' ' + cls, '');
        this.obj.setAttribute('class', this._class);
    }
}

/**
 * table object
 */
class Table extends base {
    constructor(){
        super();

        this.nodeBook = {
            'thead':[],
            'tbody':[]
        }

        this.obj = document.createElement('table');
        this.theadNode = document.createElement('thead');
        this.theadNodeRow = document.createElement('tr');
        this.tbodyNode = document.createElement('tbody');

        this.obj.appendChild(this.theadNode);
        this.obj.appendChild(this.tbodyNode);
        this.theadNode.appendChild(this.theadNodeRow);

        // this.obj.className = 'avg';
        this.obj.setAttribute('cellspacing', '0');
        // cellspacing="0"

    }

    /**
     * object function
     */
    addTh(thNode){
        this.nodeBook['thead'].push(thNode);
        this.theadNodeRow.appendChild(thNode.obj);
    }

    addRow(rowNode){
        this.nodeBook['tbody'].push(rowNode);
        this.tbodyNode.appendChild(rowNode.obj);
    }
    addCol(){
    }

    avgScore(){
    }
    letScore(){

    }
    scaScore(){

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
class RowLine{
    constructor() {
        this.nodeBook = [];
        this.obj = document.createElement('tr');
    }

    addCell(cell){
        cell.parentNode = this;
        this.nodeBook.push(cell);
        this.obj.appendChild(cell.obj);
    }
}

// class colLine{
//
// }

/**
 * cell Object
 */
class Cell extends base {
    constructor(type) {
        super();
        /**
         * create element
         */
        this.obj = document.createElement(type);
        this.aNode = document.createElement('a');
        this.inputNode = document.createElement('input');

        /**
         *  deal data
         */
        this.parentNode = '';

        /**
         * init attribute
         */
        this.AddClass('cell');
        this.obj.setAttribute('row-num', '-');
        this.obj.setAttribute('col-num', '-');
        this.inputNode.setAttribute('type', 'text');

        /**
         * build cell
         */
        this.obj.appendChild(this.aNode);
        this.obj.appendChild(this.inputNode);

        /**
         * bind addEventListener
         */
        this.bindCellBlur();
    }

    get text(){
        return this._text;
    }
    set text(text){
        this._text = text;
        this.aNode.innerHTML = this._text;
        this.inputNode.setAttribute('value', this._text);
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

    get parentNode(){
        return this._parentNode;
    }
    set parentNode(par){
        this._parentNode = par;
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
        this.inputNode.addEventListener('input', function(event){cellObject.cellInput(event, cellObject);});
    }

    bindCellBlur(){
        let cellObject = this;
        this.inputNode.addEventListener('blur', function(event){cellObject.cellBlur(event, cellObject);});
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
        // alert('input in');
        // console.log('cell input this' + this);
        // console.log(this);
    }

    cellBlur(event, cellObject){
        cellObject.cellEditedNot();
        cellObject.aNode.innerHTML = cellObject.inputNode.value;
    }

    /**
     * obj function
     */
    cellDataUpdate() {

    }

    // cellAddClass(cls) {
    //     this._class = this._class || '';
    //     if (this._class.indexOf(cls) !== -1)
    //         return false;
    //     this._class += ' ' + cls;
    //     // this._class = this._class.replace(/(^\s*)|(\s*$)/g,'');
    //     this._class = this._class.trim();
    //     this.obj.setAttribute('class', this._class);
    // }
    //
    // cellRemoveClass(cls) {
    //     this._class = this._class || '';
    //     if (this._class.indexOf(cls) === -1)
    //         return false;
    //
    //     this._class = this._class.replace(cls + ' ', '');
    //     this._class = this._class.replace(' ' + cls, '');
    //     this.obj.setAttribute('class', this._class);
    // }

    cellEdited() {
        this.AddClass('edit');
        this.inputNode.focus();
    }

    cellEditedNot() {
        this.RemoveClass('edit');
    }

    cellEditToggle() {
        this._class = this._class || '';
        if (this._class.indexOf('edit') === -1)
            this.cellEdited();
        else
            this.cellEditedNot();
    }
}

class ThEdit extends Cell {
    constructor(){
        super('th');

        /**
         * bind addEventListener
         */
        this.bindCellClick();
    }
}

class ThScore extends Cell {
    constructor(){
        super('th')
    }
}

class TdEdit extends Cell {

}

class TdScore extends Cell {

}

class TdStudent extends Cell {

}

//page load
pageLoad();
