

var panel=Ext.create('Ext.Panel',{
                                                               itemId:'floatingPanel',
                                                               cls:'chartfloatingpanel-cls',
                                                               //top:e.y,
                                                               //left:e.x,
                                                               width: 180


                                                           });
var panel1=Ext.create('Ext.Panel',{
                                                               itemId:'floatingPanel',
                                                               cls:'chartfloatingpanel-cls',
                                                               //top:e.y,
                                                               //left:e.x,
                                                               width: 180


                                                           });

var timerAdmob;

function deleteDictionary(id){
    
  
    var jsondata=[];
    
    Ext.getStore('Dictonary').each(function(record) {
       
    if (record.get('id') === id) {
        Ext.getStore('Dictonary').remove(record);
    }else{
        jsondata.push({"id":record.get("id"),"word":record.get("word")});
    }
    }, this);
    
    
      //  window.localStorage.setItem("DictionaryArray",JSON.stringify(jsondata));
       
   
   
}
function playMusic(){
    
    var audioLink=window.localStorage.getItem("audiolink");
    var audio=new Audio();
    audio.src=audioLink;
    audio.play();
    

}


function openAdmobSite(){
   window.open("http://walkingtree.in/");
}


Ext.define('CON.utils.Global', {
    singleton : true,
    alias : 'widget.global',
    config : {
 
    },
    constructor: function(config) {
        this.initConfig(config);
    },
    api: (function () {
        
       var serviceUrl1='';  
       var serviceUrl='';
       var href=window.location.href.toString();
       var n = href.indexOf("54.67.4.115");
       
       var baseUrl ='http://api.carrumhealth.com/';
        
        if(n >= 0){
           serviceUrl1='http://54.67.4.115:8088/CarrumHealth/rest/';
           serviceUrl='http://54.67.4.115:8088/CarrumHealth/rest/Employer/';
     
        }else{
          serviceUrl1='http://carrumhealthapi.walkingtree.in/CarrumHealth/rest/';
          serviceUrl='http://carrumhealthapi.walkingtree.in/CarrumHealth/rest/Employer/';
     
        }
        
        
        
        return {
            currentPubid:"",
            currentCatid:"",
            categoryPublication:'http://192.168.1.127/ranjit/acerest/index.php/category_publications',
            categoryList:'http://192.168.1.127/ranjit/acerest/index.php/publication',
            publicationList:'http://192.168.1.127/ranjit/acerest/index.php/category'
            
          };
		
       })()

});
