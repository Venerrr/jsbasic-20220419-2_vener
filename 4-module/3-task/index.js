function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    
    if (table.rows[i].cells[2].innerHTML === 'm') {
      table.rows[i].classList.add('male');
    }
    if (table.rows[i].cells[2].innerHTML === 'f') {
      table.rows[i].classList.add('female');
    }
  } 
  for (let i = 1; i < table.rows.length; i++) {  
    if (table.rows[i].cells[1].innerHTML < 18) {
      table.rows[i].style = "text-decoration: line-through"; 
    }
  }  

  for (let i = 1; i < table.rows.length; i++) {

    if (table.rows[i].cells[3].dataset.available === 'true') {
      table.rows[i].classList.toggle('available'); 
    }
    if (table.rows[i].cells[3].dataset.available === 'false') {
      table.rows[i].classList.toggle('unavailable'); 
    } 
    if (table.rows[i].cells[3].hasAttribute('data-available') == false) {
      table.rows[i].hidden = true;
    } else table.rows[i].hidden = null;

}
}