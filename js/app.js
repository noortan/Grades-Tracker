'use strict'
let form = document.getElementById('gradeForm') ;
let tableBody = document.getElementById('studentTabel') ;

let allStudent = [] ;

function Student(sName ,Course){
    this.sName = sName ;
    this.Course = Course ;
    this.grade = this.randomGrade() ;
    allStudent.push(this) ;
}

Student.prototype.randomGrade = function() {
    return this.age = Math.floor(Math.random() * (100 - 0) + 0) ;
}
  
function eventHandler(event){
    event.preventDefult() 
    let sName = event.target.sName.value ;
    let course = event.target.course.value ;
     let newStudent = new ( sName , course) ;
     newStudent.render() ;
     setLocalStorage() ;

}

form.addEventListener('click', eventHandler) ;

Student.prototype.render = function(){
    let tableRow = document.createElement('tr') ;
    tableBody.appendChild(tableRow) ;
    let tableData = document.createElement('td') ;
    tableRow.appendChild(tableData) ;
    tableData.textContent = this.sName ;
    
    let tableData1 = document.createElement('td') ;
    tableRow.appendChild(tableData1) ;
    tableData1.textContent = this.grade ;

    let tableData2 = document.createElement('td') ;
    tableRow.appendChild(tableData2) ;
    tableData2.textContent = this.course ;

}

 function setLocalStorage(){
     localStorage.setItem('student' ,JSON.stringify(allStudent)) ;
 }
  
 let clarAll = document.getElementById('clearAll') ;
 clarAll.addEventListener('click',removeALL()) ;

 function removeALL(){
     localStorage.clear() ;
     window.location.reload() ;
 }

 function getData(){
     let noor = JSON.parse(localStorage.getItem('student')) ;
     if (noor){
         for (let i = 0; i < noor.length; i++) {
             let newget = new Student(noor[i].sName ,noor[i].course) ;
             
         }
         newget.render() ;
     }
 }
 getData() ; 