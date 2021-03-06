/*
 * File: app/controller/Main.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CON.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainNav: 'navigationview#mynavigationview',
            catNewsList: {
                autoCreate: true,
                selector: 'list#catnewslist',
                xtype: 'catnewslist'
            },
            settingdbtn: 'button#settingdbtn',
            gotowebsiteBtn: 'button#gotowebsiteBtn',
            userprefbtn: 'button#userprefbtn',
            toi: 'togglefield#toitoogle',
            hin: 'togglefield#hindutoggle',
            reut: 'togglefield#reuttoggle',
            iexp: 'togglefield#inetoggle',
            ect: 'togglefield#ecttoggle',
            publicationCatNewsList: '#catnewslist',
            audioPlay: 'button#audioPlay',
            myDictionaryList: 'container#mydictionarycontent',
            mainNavBar: '#mynavigationbar',
            footertoolbar: 'toolbar#footer_toolbar',
            prefFieldset: 'fieldset#prefFieldset',
            topViewdCont: 'container#TopViewCont',
            homeScreen: 'container#HomeScreenLayout'
        },

        control: {
            "container": {
                catItemTapped: 'onContainerCatItemTapped'
            },
            "button#gotowebsiteBtn": {
                tap: 'onGoToSiteBtnTap'
            },
            "navigationview#mynavigationview": {
                back: 'onNavigationviewBack'
            },
            "button#userprefbtn": {
                tap: 'onUserPrefButtonTap'
            },
            "togglefield#toitoogle": {
                change: 'onTOITogglefieldChange'
            },
            "togglefield#hindutoggle": {
                change: 'onHinduTogglefieldChange'
            },
            "togglefield#reuttoggle": {
                change: 'onReutTogglefieldChange'
            },
            "togglefield#inetoggle": {
                change: 'onIndExpTogglefieldChange'
            },
            "togglefield#ecttoggle": {
                change: 'onEconomicsTogglefieldChange'
            },
            "button#dictionaryiteam": {
                tap: 'onDictionaryButtonTap'
            },
            "menu": {
                hide: 'onMenuHide'
            },
            "button#audioPlay": {
                tap: 'onAudioTap'
            },
            "list#dictionarylist": {
                disclose: 'onDictonaryListItemTap'
            },
            "image#topViewed": {
                tap: 'onTopViewimageTap'
            },
            "dataview#dictionarylist": {
                itemtouchend: 'onDictionaryDataviewItemTap'
            }
        }
    },

    onContainerCatItemTapped: function(container) {

    },

    onGoToSiteBtnTap: function(button, e, eOpts) {
        var link = button.siteUrl;
        var touchdevice = ('ontouchstart' in window) ? true : false;
        var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;



        if(!Ext.isEmpty(link)){
           if(app)
           window.open(button.siteUrl,'_blank','location=no');
           else
           window.open(button.siteUrl,'_blank');

        }

    },

    onNavigationviewBack: function(navigationview, eOpts) {
        var goToWebSiteBtn = this.getGotowebsiteBtn();



        if(!Ext.isEmpty(goToWebSiteBtn)){

            goToWebSiteBtn.setHidden(true);

        var audioPlay=Ext.getCmp("audioPlay");
        audioPlay.setHidden(true);

        }





        Ext.select('.con-listitemcls').each(function(el){
                                    el.removeCls("con-listitem-selectedcls");
                                 });
        //alert(this.getPublicationCatNewsList());
        //this.getPublicationCatNewsList().deselectAll();

        Ext.Viewport.remove(panel);
    },

    onUserPrefButtonTap: function(button, e, eOpts) {



        Ext.Viewport.toggleMenu('right');


        /*
        var newsSettings=window.localStorage.getItem("newsSettings");


        var setup=JSON.parse(newsSettings);
        var me=this;

        if(me.getToi()){

           if(setup.toi == true){
              me.getToi().setValue(1);
           }else{
               me.getToi().setValue(0);
           }
        }
        if(me.getHin){
           if(setup.hin == true){
             me.getHin().setValue(1);
           }else{
              me.getHin().setValue(0);
          }
        }
        if(me.getReut()){
           if(setup.ret == true){
             me.getReut().setValue(1);
           }else{
              me.getReut().setValue(0);
           }
        }

        if(me.getIexp()){
          if(setup.ine == true){
             me.getIexp().setValue(1);
          }else{
              me.getIexp().setValue(0);
          }
        }
        if(me.getEct()){

           if(setup.ect == true){

           me.getEct().setValue(1);

          }else{
              me.getEct().setValue(0);
           }
        }

        */

    },

    onTOITogglefieldChange: function(togglefield, newValue, oldValue, eOpts) {
        this.onBeforesetPref(newValue,'toi');
    },

    onHinduTogglefieldChange: function(togglefield, newValue, oldValue, eOpts) {
        this.onBeforesetPref(newValue,'hin');
    },

    onReutTogglefieldChange: function(togglefield, newValue, oldValue, eOpts) {
        this.onBeforesetPref(newValue,'ret');
    },

    onIndExpTogglefieldChange: function(togglefield, newValue, oldValue, eOpts) {
        this.onBeforesetPref(newValue,'ine');
    },

    onEconomicsTogglefieldChange: function(togglefield, newValue, oldValue, eOpts) {
        this.onBeforesetPref(newValue,'ect');
    },

    onDictionaryButtonTap: function(button, e, eOpts) {
        /* var myList = this.getMyDictionaryList();
        if(!myList){

                  myList= Ext.widget('dictionarylist');

                  myList.showBy(button);
                  myList.down('#dictionarylist').setScrollable(false);
                }else{
                myList.down('#dictionarylist').setScrollable(false);
                  myList.showBy(button);

                }*/
         /* Ext.Viewport.remove(panel1);
        panel1=Ext.create('Ext.Panel',{
                                                                       itemId:'floatingPanel',
                                                                       cls:'chartfloatingpanel-cls',
                                                                       top:e.pageY-400,
                                                                       left:e.pageX-300,
                                                                       width: 300,
                                                                       height: 400,
                                                                       layout: 'fit',
                                                                        items: [
                                                                            {
                                                                                xtype: 'list',
                                                                                height: 380,
                                                                                id: 'dictionarylist',
                                                                                itemId: 'dictionarylist',
                                                                                itemTpl: [
                                                                                    '<div>{word}</div>'
                                                                                ],
                                                                                store: 'Dictonary'
                                                                            }
                                                                        ]
                                                                   });

                                                                   Ext.Viewport.add(panel1);
                                                                   */

        var DictionaryView = Ext.create('CON.view.MyDictionaryList',{title:"My Words"});

        CON.app.getController("Main").pushView(DictionaryView, "My Words");
        Ext.Viewport.toggleMenu('right');
    },

    onMenuHide: function(component, eOpts) {
         //Ext.Viewport.remove(panel1);
    },

    onAudioTap: function(button, e, eOpts) {
        button.suspendEvents();
        var ind=button.bodyElement.classList.indexOf("audiobuttoncls");
        if(ind > 0){

        button.removeCls("audiobuttoncls");
        button.addCls("audiobuttoncls1");

        var node = document.getElementById('newsdetail_description'),

        htmlContent = node.innerHTML;
        var shareDesc=htmlContent;
        textContent = node.textContent;
        shareDesc=textContent;
             var msg = new SpeechSynthesisUtterance();
                var voices = window.speechSynthesis.getVoices();
                msg.voice = voices[0]; // Note: some voices don't support altering params
                msg.voiceURI = 'native';
                msg.volume = 1; // 0 to 1
                msg.rate = 1; // 0.1 to 10
                msg.pitch = 0; //0 to 2
                msg.text = shareDesc;
                msg.lang = 'en-US';

                msg.onend = function(e) {
                    button.removeCls('audiobuttoncls1');
                        button.addCls('audiobuttoncls');

                };

                window.speechSynthesis.cancel();
                   window.speechSynthesis.speak(msg);

        }else{
                   window.speechSynthesis.cancel();

        button.removeCls("audiobuttoncls1");
        button.addCls("audiobuttoncls");
        }
        setTimeout(function(){button.resumeEvents();},2000);

    },

    onDictonaryListItemTap: function(list, record, target, index, e, eOpts) {

        var word=record.get("word");
        var wordStore=Ext.getStore("Words");

                wordStore.getProxy().setUrl("resources/data/dict/"+word+".json");

                wordStore.load(function() {
                    var DictionaryDetView = Ext.create('CON.view.Dictionarydetail',{title:record.get("word")});

        CON.app.getController("Main").pushView(DictionaryDetView);

                });


    },

    onTopViewimageTap: function(image, e, eOpts) {


        var selctpub = Ext.create('CON.view.SelectPublication',{"title":"Choose Publication"});


        CON.app.getController("Main").pushView(selctpub, CON.title);

    },

    onDictionaryDataviewItemTap: function(dataview, index, target, record, e, eOpts) {
        setTimeout(function(){Ext.select('.con-listitemcls').each(function(el){
                                            el.removeCls("con-listitem-selectedcls");
                                         });
        },100);

    },

    pushView: function(view, title) {
        var mainNavView = this.getMainNav();

        if(!Ext.isEmpty(mainNavView)){

            if(view.xtype == 'pubdetail'){

                this.enableGotoSiteBtn(view.getData());
          }

            mainNavView.push(view,CON.app.title);

        }
    },

    init: function(application) {
        CON.app.on('catItemTapped', function(cover, idx) {
                this.handleCategoryCoverItemTap(cover, idx);
        }, this);

        //this.changeFavicon('resources/images/favicon.jpg');
    },

    handleCategoryCoverItemTap: function(cover, idx) {
        var cateStore=Ext.getStore("CategoryList");
        var cateStore1=cateStore.getAt(idx);
        var catid=(cateStore1.get("id"));
        var name=(cateStore1.get("name"));
        var categoryPub=Ext.getStore("CategoryPublications");
        categoryPub.clearFilter();
                categoryPub.filterBy(function(rec) {
                    //alert(parseInt(rec.get("categoryId")) +"=="+ parseInt(catid));

                               //alert(parseInt(rec.get("categoryId")) == parseInt(catid));
                                  return  (parseInt(rec.get("categoryId")) == parseInt(catid) && (parseInt(rec.get("isActive")) == 1));
                 });
                var recordItems = categoryPub.data.items;
                var newrecords=[];
                for(var i=categoryPub.getCount()-1; i>=0;i--){

                               newrecords.push(recordItems[i].getData());
                }

        //alert(JSON.stringify(newrecords));

        if(!Ext.isEmpty(categoryPub) && idx > -1){



            var newsPubListView = Ext.create('CON.view.category.PubNewsList',{

                pubData : newrecords,
                title:name
         });


        CON.app.getController("Main").pushView(newsPubListView, name);

        }


    },

    enableGotoSiteBtn: function(data) {
        var goToWebSiteBtn = this.getGotowebsiteBtn();

        if(!Ext.isEmpty(goToWebSiteBtn)){

            goToWebSiteBtn.setHidden(false);
            var publicationNewsLink = data.link;
            goToWebSiteBtn.siteUrl = publicationNewsLink;

        }
    },

    launch: function() {

        var menu = Ext.create('CON.view.MyMenu',{});
        var me=this;

        Ext.Viewport.setMenu(menu, {
                    side: 'right',
                    reveal: false,
                    cover:true
                });
        var touchdevice = ('ontouchstart' in window) ? true : false;
        var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
        if(app){

            document.addEventListener("deviceready", function(){


        document.addEventListener("online", function(){}, false);
        document.addEventListener("offline", function(){me.checkConnection ();}, false);




                                                           }, false);




        }
        Ext.select('.admob').each(function(el){
                 el.dom.innerHTML="";

             });
        var me=this;

        if(!app){
            clearInterval(timerAdmob);
        var inta=0;

         timerAdmob=setInterval(function(){

        me.getFootertoolbar().show();

             Ext.select('.admob').each(function(el){
                 var admobBann=['<center><a href="javascript:CON.app.openAdmobSite();" ><img src="resources/project-images/selectpartneradd.png"></a></center> ','<div class="admob"><center><a href="javascript:CON.app.openAdmobSite();"><img src="resources/project-images/senchatutorials.png"/></a></center></div>','<div class="admob"><center><a href="javascript:CON.app.openAdmobSite();"><img src="resources/project-images/trainingpartneradd.png"/></a></center></div>'];
                 inta++;
                 if(inta === 3){
                    inta=0;
                 }



            el.dom.innerHTML=admobBann[inta];

                                 });

         }, 5000);


        }

        document.addEventListener('mouseup', function(e){
             Ext.Viewport.remove(panel);

                                                             if (window.getSelection) {

                    var val=(window.getSelection().toString());
                                                                 var text=(window.getSelection().toString());

                                                                                                                                                                    if (window.getSelection) {
                                                                                      if (window.getSelection().empty) {  // Chrome
                                                                                        window.getSelection().empty();
                                                                                      } else if (window.getSelection().removeAllRanges) {  // Firefox
                                                                                        window.getSelection().removeAllRanges();
                                                                                      }
                                                                                    } else if (document.selection) {  // IE?
                                                                                      document.selection.empty();
                                                                                    }
                                                                 if(val !== ""){
                                                                      Ext.Viewport.remove(panel);
                                                                     panel=Ext.create('Ext.Panel',{
                                                                       itemId:'floatingPanel',
                                                                       cls:'chartfloatingpanel-cls',
                                                                       top:e.y,
                                                                       left:e.x-100,
                                                                       width: 180,
                                                                       minHeight: 50,
                                                                         items:[
                                                                             {
                                                                                 xtype:"button",

                                                                                 text:"Add to Dictionary",
                                                                                 dock:"bottom",
                                                                                 handler : function(){

                                                                                     Ext.Viewport.remove(panel);
                                                                                    var DictonaryStore= Ext.getStore("Dictonary");
                                                                        var test= Ext.encode(Ext.getStore('Dictonary').getProxy().getReader().rawData);

                                                                         if(test === 'null'){
                                                                         var recordjson=[];

                                                                         var json={"id":new Date().getTime(),"word":text};
                                                                         recordjson.push(json);

                                                                          DictonaryStore.setData(recordjson);

                                                                                        window.localStorage.setItem("DictionaryArray",JSON.stringify(recordjson));


                                                                             }else{
                                                                                var recordjson=JSON.parse(test);
                                                                                  var json={"id":new Date().getTime(),"word":text};
                                                                         recordjson.push(json);

                                                                                 DictonaryStore.setData(recordjson);

                                                                                        window.localStorage.setItem("DictionaryArray",JSON.stringify(recordjson));


                                                                                      }






                                                                                 }

                                                                             }
                                                                         ]

                                                                   });
                                                                     panel.setHtml('<div style="text-align:justify;">'+val+'</div>');
                                                                   Ext.Viewport.add(panel);
                                                               }
                                                             }
                                                              });

        var localStore = Ext.getStore('localData');

         localStore.load();
        //alert(localStorage.getItem('localDataStore'));
        if(localStore.getCount() === 0){

            var newsSettings1={"newssettings":[{"test":true}]};


            var data = Ext.create('CON.model.localData',newsSettings1);
            localStore.add(data);
            localStore.sync();

        //alert(localStorage.getItem('localDataStore'));
            me.onNewsSettings();
        }else{
                 me.onNewsSettings();
        }
        if(app){
            this.initAd();
        }


    },

    initAd: function() {
        if ( window.plugins && window.plugins.AdMob ) {

                            	    var ad_units = {
                        				ios : {
                        					banner: 'ca-app-pub-6938123967733607/9990289776',
                        					interstitial: 'ca-app-pub-6869992474017983/7563979554'
                        				},
                        				android : {
                        					banner: 'ca-app-pub-6938123967733607/3943756175',
                        					interstitial: 'ca-app-pub-6938123967733607/4602367770'
                        				},
                        				wp8 : {
                        					banner: 'ca-app-pub-6869992474017983/8878394753',
                        					interstitial: 'ca-app-pub-6869992474017983/1355127956'
                        				}
                            	    };
                            	    var admobid = "";
                            	    if( /(android)/i.test(navigator.userAgent) ) {
                            	    	admobid = ad_units.android;
                            	    } else if(/(iphone|ipad)/i.test(navigator.userAgent)) {
                            	    	admobid = ad_units.ios;
                            	    } else {
                            	    	admobid = ad_units.wp8;
                            	    }

                                    window.plugins.AdMob.setOptions( {
                                        publisherId: admobid.banner,
                                        interstitialAdId: admobid.interstitial,
                                        bannerAtTop: false, // set to true, to put banner at top
                                        overlap: false, // set to true, to allow banner overlap webview
                                        offsetTopBar: false, // set to true to avoid ios7 status bar overlap
                                        isTesting: false, // receiving test ad
                                        autoShow: true // auto show interstitial ad when loaded
                                    });
                                    this.registerAdEvents();

                                } else {
                                    console.log( 'admob plugin not ready' );
                                }

    },

    registerAdEvents: function() {
         window.plugins.AdMob.createBannerView();
                document.addEventListener('onReceiveAd', function(){});
                                document.addEventListener('onFailedToReceiveAd', function(data){});
                                document.addEventListener('onPresentAd', function(){});
                                document.addEventListener('onDismissAd', function(){ });
                                document.addEventListener('onLeaveToAd', function(){ });
                                document.addEventListener('onReceiveInterstitialAd', function(){ });
                                document.addEventListener('onPresentInterstitialAd', function(){ });
                                document.addEventListener('onDismissInterstitialAd', function(){ });
                window.plugins.AdMob.showAd(true,function(){},function(e){alert(JSON.stringify(e));});

    },

    onNewsSettings: function() {
        var localStore=Ext.getStore("localData");
        var locald=localStore.getAt(0);
        var newsSettings=(locald.get("newssettings"));

        var setup=newsSettings[0];

        Ext.getStore("PublicationList").clearFilter();

        Ext.getStore("PublicationList").filter("active","1",true,false);

        Ext.getStore("PublicationList").filterBy(function(rec) {

                             var code=  rec.get("code");

                                if(typeof(setup[code]) == "undefined") {
                                    return true;
                                }else if(setup[code]){
                                    return true;
                                }else{
                                    return false;
                                }

                        });

    },

    onBeforesetPref: function(newValue, param) {
        var localStore=Ext.getStore("localData");
        var locald=localStore.getAt(0);
        var newsSettings=(locald.get("newssettings"));

        var setup=newsSettings[0];



        if(newValue === 1){

            setup[param]=true;
        }else{
            setup[param]=false;
        }

         var testAr=[];
                        testAr.push(setup);
                        var newsSettings1={"newssettings":testAr};
                        var data = Ext.create('CON.model.localData',newsSettings1);
                        localStore.setData(data);
                        localStore.sync();
                        localStore.load();
        this.onNewsSettings();

    },

    changeFavicon: function(src) {
        var link = document.createElement('link'),
             oldLink = document.getElementById('dynamic-favicon');
         link.id = 'dynamic-favicon';
         link.rel = 'shortcut icon';
         link.href = src;
         if (oldLink) {
          document.head.removeChild(oldLink);
         }
         document.head.appendChild(link);
    },

    togglePub: function(code, val) {

        this.onBeforesetPref(val,code);
    },

    checkConnection: function() {
        var me =this;
        var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'No network connection';
        if(networkState == Connection.NONE || networkState == Connection.UNKNOWN){
            me.getHomeScreen().hide();
            navigator.notification.confirm(
            'CON requires an active internet connection to start.EDGE,3G and Wi-Fi are supported.', // message
             function onConfirm(buttonIndex) {
                 if(buttonIndex == 1){
                     me.checkConnection();
                 }else if(buttonIndex == 2){

                 }
            },            // callback to invoke with index of button pressed
            'Network Required',           // title
            ['Retry','Close']     // buttonLabels
           );
        }else{
            Ext.getStore('CategoryList').load();
            Ext.getStore('PublicationList').load();
            Ext.getStore('publication1').load();
            Ext.getStore('CategoryPublications').load();
            Ext.getStore('TopView').load();
            me.getHomeScreen().show();




        }
            //return (states[networkState]);

    }

});