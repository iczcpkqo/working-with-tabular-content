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
pageLoad();
function pageLoad (){
    initGlobalVariable();
}

function initGlobalVariable(){
    // g_table_thead;
    // g_table_tbody;
    // g_table_row;
    // g_table_col;
    // g_undo_row;
    // g_undo_col;
}

function initTable(){

}

/**
 * table object
 */

class Cell {
    constructor(type) {
        this.obj = document.createElement(type);
    }
}

Cell.prototype.cellClick = function (){

};

Cell.prototype.cellRightClick = function (){

}

Cell.prototype.cellInputChange = function (){

}

Cell.prototype.cellDataUpdate = function (){

}

/**
 * thead Object
 */

class TheadEdit extends Cell {

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