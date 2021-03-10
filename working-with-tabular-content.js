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
        // g_table_thead;
        // g_table_tbody;
        // g_table_row;
        // g_table_col;
        // g_undo_row;
        // g_undo_col;

    // test
    let tt = new Cell('td');
    document.getElementById('tett').appendChild(tt.obj);
    tt.text = 'sdfsdf';
    tt.cellAddClass('hshshshshs');
    tt.row = 3434;
    tt.cellAddClass('hahhA');
    tt.cellAddClass('hahhA');
    tt.cellRemoveClass('hahhA');
    // tt.cellSelected();
    // tt.cellSelectedNot();
    // tt.cellSelectedToggle();
    tt.cellEdited();

    // setTimeout(function(tt){
    //     let aa = document.getElementById('aaa');
    //     aa.appendChild(tt.obj);
    // }, 1000, tt);


    // tt.cellRemoveClass('hahhA');
    // tt.col = 33
}

function initTable(){

}

/**
 * table object
 */

class Cell {
    constructor(type) {
        // create element
        this.obj = document.createElement(type);
        this.aNode = document.createElement('a');
        this.inputNode = document.createElement('input');

        // deal data
        this.parentNode = '';

        // init attribute
        this.cellAddClass('cell');
        this.obj.setAttribute('row-num', '-');
        this.obj.setAttribute('col-num', '-');
        this.inputNode.setAttribute('type', 'text');

        // build cell
        this.obj.appendChild(this.aNode);
        this.obj.appendChild(this.inputNode);

        // bind activity
        // this.obj.addEventListener('click', this.cellClick);
        this.obj.addEventListener('contextmenu', this.cellRightClick, true);
        this.inputNode.addEventListener('input', this.cellInput)
    }
    get text(){
        return this._text;
    }
    set text(text){
        this._text = text;
        this.aNode.innerHTML = this._text;
        this.inputNode.setAttribute('value', this._text);
    }

    get class(){
        return this._class;
    }
    set class(cls){
        this._class = cls;
        this.obj.setAttribute('class', this._class);
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

    get parentNode(){
        return this._parentNode;
    }
    set parentNode(par){
        this._parentNode = par;
    }
}

Cell.prototype.cellClick = function (){
    // this.innerHTML = 'fffff';
};

Cell.prototype.cellRightClick = function (event){
    // this.innerHTML = '324234234234a';
    event.preventDefault();
}

Cell.prototype.cellInput = function (){

}

Cell.prototype.cellDataUpdate = function (){

}

Cell.prototype.cellAddClass = function (cls){
    this._class = this._class || '';
    if (this._class.indexOf(cls) !== -1)
        return false;
    this._class += ' ' + cls;
    // this._class = this._class.replace(/(^\s*)|(\s*$)/g,'');
    this._class = this._class.trim();
    this.obj.setAttribute('class', this._class);
}

Cell.prototype.cellRemoveClass = function (cls){
    this._class = this._class || '';
    if (this._class.indexOf(cls) === -1)
        return false;

    this._class = this._class.replace(cls + ' ', '');
    this._class = this._class.replace(' ' + cls, '');
    this.obj.setAttribute('class', this._class);
}

Cell.prototype.cellEdited = function (){
    this.cellAddClass('edit');
}

Cell.prototype.cellEditdNot = function (){
    this.cellRemoveClass('edit');
}

Cell.prototype.cellEditToggle = function (){
    this._class = this._class || '';
    if (this._class.indexOf('edit') === -1)
        this.cellSelected();
    else
        this.cellSelectedNot();
}

/**
 * thead Object
 */

class TheadEdit extends Cell {
    constructor(){
        super('th')
    }
}

class TheadScore extends Cell {

}

/**
 * tbody Object
 */

/**
 * row Object
 */


/**
 * cell Object
 */

class TdEdit extends Cell {

}

class TdScore extends Cell {

}

class TdStudent extends Cell {

}

//page load
pageLoad();
