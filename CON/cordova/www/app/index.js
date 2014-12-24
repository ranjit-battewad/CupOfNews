

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
function test(tf,newValue){
    alert("test");
    CON.app.getController('Main').togglePub(tf,newValue);
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
            currentPubcode:"",
            currentAudiolink:"",
            categoryPublication:'http://192.168.1.127/ranjit/acerest/index.php/category_publications',
            categoryList:'http://192.168.1.127/ranjit/acerest/index.php/publication',
            publicationList:'http://192.168.1.127/ranjit/acerest/index.php/category'
            
          };
		
       })()

});
