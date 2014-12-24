/*
 * File: app/view/topViewList.js
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

Ext.define('CON.view.topViewList', {
    extend: 'Ext.dataview.List',

    requires: [
        'Ext.XTemplate',
        'Ext.SegmentedButton'
    ],

    config: {
        title: 'Cup of News',
        cls: 'con-bgcls',
        height: '100%',
        id: 'catnewslist1',
        itemId: 'topcatnewslist',
        style: 'bottom:40px;',
        emptyText: 'No News',
        itemCls: 'con-listitemcls',
        selectedCls: 'con-listitem-selectedcls',
        store: 'TopViewsList',
        catData: [
            
        ],
        itemTpl: Ext.create('Ext.XTemplate', 
            '<div class="listtitle-cls">{title}</div>',
            '<div class="listdaysago-cls">',
            '    <B style="color:#FFFFFF;">Viewd: </B>',
            '<tpl>',
            '{count}',
            '</tpl>',
            '</div>',
            {
                getPubDateInHrs: function(pubDate) {
                    var returnValue = '';
                    var newsPubDate;

                    if(pubDate.indexOf('0530') < 0){

                        newsPubDate = pubDate + '+0530';
                    }else{

                        newsPubDate = pubDate;
                    }


                    var hrs = (Math.abs((new Date()).valueOf() - new Date(newsPubDate).valueOf() )) / 1000/60/60;

                    if(!Ext.isEmpty(hrs)){

                        if(Math.round(hrs) < 24){
                            returnValue = Math.round(hrs) + ' hours ago';

                        }else{
                            returnValue = Math.round((hrs)/24) + ' days ago';

                        }
                    }else{

                        returnValue = '';
                    }

                    return returnValue;

                }
            }
        ),
        items: [
            {
                xtype: 'segmentedbutton',
                docked: 'top',
                height: '',
                itemId: 'topviewsseg',
                minHeight: '34px',
                scrollable: 'horizontal',
                pressedCls: 'buttonselect-cls',
                layout: {
                    type: 'hbox',
                    align: 'center'
                }
            }
        ],
        listeners: [
            {
                fn: 'onMylistInitialize',
                event: 'initialize'
            }
        ]
    },

    onMylistInitialize: function(component, eOpts) {

        var pubCategories = this.config.catData;
        var segBtn = this.down('segmentedbutton');

        if(!Ext.isEmpty(pubCategories) && !Ext.isEmpty(segBtn)){

            var defultPressedBtn = [];
            var catSeq = 1;
            for(a in pubCategories){
                var catBtn = Ext.create('Ext.Button',{
                        text:a,
                        pubCategData : pubCategories[a]
                    });

                if( catSeq == 1 ){

                    defultPressedBtn.push(catBtn);
                    catSeq ++;
                    //catBtn.setPressedCls('buttonselect-cls');
                }

                segBtn.add(catBtn);
            }



            segBtn.setPressedButtons(defultPressedBtn);
        }



    },

    GroupBy: function(myjson, attr) {
        var sum ={};

            myjson.forEach( function(obj){
                var catid=obj[attr];
                   var catStore=Ext.getStore("CategoryPublications");
                var catrec=catStore.find("categoryId",catid);
                var findrec=catStore.getAt(catrec);
                var name=findrec.get("catName");
               if ( typeof sum[name] == 'undefined') {

                 sum[name]=[];
                   sum[name].push(obj);
                }
               else {
                 sum[name].push(obj);
               }
            });
            return sum;
    }

});