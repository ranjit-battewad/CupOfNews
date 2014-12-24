/*
 * File: app/store/publication1.js
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

Ext.define('CON.store.publication1', {
    extend: 'Ext.data.Store',

    requires: [
        'CON.model.PublicationList',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        autoLoad: true,
        model: 'CON.model.PublicationList',
        storeId: 'publication1',
        proxy: {
            type: 'jsonp',
            url: 'http://aceconapi.walkingtree.in/acerest/index.php/publication',
            reader: {
                type: 'json'
            }
        },
        listeners: [
            {
                fn: 'onJsonpstoreLoad',
                event: 'load'
            }
        ]
    },

    onJsonpstoreLoad: function(store, records, successful, operation, eOpts) {
        store.filter("active","1",true,false);
    }

});