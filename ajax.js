<script>
    //ԭ��javascript-->ajax "GET"
    function AjaxSubmit(){
       var xhr = new XMLHttpRequest();
       xhr.onreadstatechange = function(){
           if(xhr.readyState == 4){
		//������Ϸ��������ص�����
	      console.log(xhr.responseText);
           }
       };
       xhr.open('GET','/url.html?=value');
       
       xhr.send(null);
    }
<script>