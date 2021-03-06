/*
 * File: app/view/publication/List.js
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

Ext.define('CON.view.publication.List', {
    extend: 'Ext.Container',
    alias: 'widget.publicationlist',

    requires: [
        'Ext.dataview.DataView',
        'Ext.XTemplate'
    ],

    config: {
        cls: 'con-bgcls',
        id: 'publist',
        itemId: 'publist',
        layout: 'fit',
        items: [
            {
                xtype: 'dataview',
                cls: 'dataview-inline',
                itemId: 'mydataview',
                inline: true,
                itemTpl: [
                    '<div class="img" style="background-image: url({image});"></div>'
                ],
                store: 'PublicationList'
            }
        ]
    }

});