/*
 * File: app/view/PublicationPref.js
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

Ext.define('CON.view.PublicationPref', {
    extend: 'Ext.form.Panel',
    alias: 'widget.publicationpref',

    requires: [
        'Ext.form.FieldSet',
        'Ext.Button'
    ],

    config: {
        cls: 'menu_rightbar',
        style: '',
        items: [
            {
                xtype: 'fieldset',
                itemId: 'prefFieldset',
                instructions: 'Choose publishers',
                title: 'Publications'
            },
            {
                xtype: 'fieldset',
                margin: '',
                padding: '',
                title: '',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'dictionaryiteam',
                        text: 'My Words'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onFormpanelPainted',
                event: 'painted'
            }
        ]
    },

    onFormpanelPainted: function(element, eOpts) {

        var PublicationList=Ext.getStore("publication1");
        var contr=CON.app.getController('Main');
        var fieldsetcon = CON.app.getController('Main').getPrefFieldset();
        var check=false;
        fieldsetcon.items.each(function(item) {
            var itmid=item.id;
            console.log(item.id);
            if(itmid.indexOf("togglefield") >= 0){
              // fieldsetcon.items.remove(item);
              // Ext.destroy(item);
                check=true;
            }

        });
        if(!check){
            var localStore=Ext.getStore("localData");
        var locald=localStore.getAt(0);
        var newsSettings=(locald.get("newssettings"));
        var alltogglefield=[];

        var setup=newsSettings[0];



                var recordItems = PublicationList.data.items;
                for(var i=0;i < PublicationList.getCount();i++){

                    var code=(recordItems[i].getData().code);
                    var name=(recordItems[i].getData().name);
                    var val=0;
                    if(setup[code]){
                        setup[code]=true;
                       val=1;
                    }else if(typeof(setup[code]) == "undefined"){
                    setup[code]=true;
                        val=1;
                    }else{
                        setup[code]=false;
                    }
                     var togglefield={
                        xtype: 'togglefield',
                                            name: code,
                                            label: name,
                         cls:"pref",
                                            labelWidth: '65%',
                        value:val,
                        listeners:{
                                    change:function(togglefield, newValue, oldValue, eOpts){
                                        var tf=togglefield.get("name");
                                        var localStore=Ext.getStore("localData");

        var newsSettings11=(locald.get("newssettings"));

        var setup11=newsSettings11[0];



        if(newValue === 1){

            setup11[tf]=true;
        }else{
            setup11[tf]=false;
        }

         var testAr1=[];
                        testAr1.push(setup11);
                        var newsSettings1={"newssettings":testAr1};
                        var data = Ext.create('CON.model.localData',newsSettings1);
                        localStore.setData(data);
                        localStore.sync();
                        localStore.load();
                      var newsSettings2=(locald.get("newssettings"));
                      var setup1=newsSettings2[0];
                      Ext.getStore("PublicationList").clearFilter();
                      Ext.getStore("PublicationList").filter("active","1",true,false);
                      Ext.getStore("PublicationList").filterBy(function(rec) {

                             var code=  rec.get("code");

                                if(typeof(setup1[code]) == "undefined") {
                                    return true;
                                }else if(setup1[code]){
                                    return true;
                                }else{
                                    return false;
                                }

                        });


                                        //contr.togglePub(tf,newValue);

                                        //CON.app.getController('Main').togglePub(tf,newValue);
                                    }
                                }

                    };

                    fieldsetcon.add(togglefield);
                    if(i === (PublicationList.getCount()-1) ){

                        var testAr=[];
                        testAr.push(setup);
                        //alert(JSON.stringify(setup));
                        var newsSettings1={"newssettings":testAr};
                        var data = Ext.create('CON.model.localData',newsSettings1);
                        localStore.setData(data);
                        localStore.sync();
                        localStore.load();

                    }
                }


        }


    }

});