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

    //原生javascript-->ajax "POST"
    function AjaxSubmit(){
       var xhr = new XMLHttpRequest();
       xhr.onreadstatechange = function(){
           if(xhr.readyState == 4){
		//接收完毕服务器返回的数据
	      console.log(xhr.responseText);
           }
       };
       xhr.open('POST','/url.html');
       xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset-UTF-8');
       xhr.send("p=456");
    }
<script>