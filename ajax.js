<script>
    //原生javascript-->ajax "GET"
    function AjaxSubmit(){
       var xhr = new XMLHttpRequest();
       xhr.onreadstatechange = function(){
           if(xhr.readyState == 4){
		//接收完毕服务器返回的数据
	      console.log(xhr.responseText);
           }
       };
       xhr.open('GET','/url.html?=value');
       
       xhr.send(null);
    }
<script>