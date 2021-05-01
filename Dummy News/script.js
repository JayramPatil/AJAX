function loadNews(){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            let json = JSON.parse(this.responseText);
            document.getElementById('heading').textContent = json.header;
            document.getElementById('date').textContent = json.date;
            document.getElementById('news').textContent = json.news;
        }
        else{
            document.getElementById('news').textContent = "Unable To Load";
        }
    }
    xhttp.open('GET','news.txt',true);
    xhttp.send();
}