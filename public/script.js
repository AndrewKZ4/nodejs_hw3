$(document).ready(function(){
    $('.datepicker').datepicker();
  });
$(document).ready(function(){
   $('select').formSelect();
});

  $('#groupSelect').on('change', function() {
    $.ajax({
      url: "/students/",
      type: "POST",
      data: `id=${this.value}`,
      success: function(data){
        data=JSON.parse(data);
        
        if(!data.length)
        {
            $('#studentsTable').html("<p>Нет студентов в группе</p>");
        }
        else
        {
          
          let table=`<table>
              <thead>
              <tr>
                  <th>Id</th>
                  <th>Имя</th>
                  <th>День рождения</th>
                  <th>Группа</th> 
                  <th></th>              
              </tr>
            </thead>`
            data.forEach(element =>{  
              
              let group="";
              if(element.group==null)
              {
                group="Группа не указана";
              }
              else
              {
                group=element.group.groupName;
              } 
                       
              table+=
              `<tr>
              <td>${element.id}</td>
              <td>${element.lastName} ${element.firstName}</td>
              <td>${element.birthDate}</td>
              <td>${group} </td>
              
                <td class="right-align">
                <a href="/students/update/${element.id}" class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons">create</i></a>
                <a href="/students/delete/${element.id}" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">delete</i></a>
    
                </td>
              </tr> 
              
              `});    

           table+=`</tbody>
           </table>` 
           $('#studentsTable').html(table);
          
        }  
        
      }
  });
});

