/*
 * File: app/view/MainNav.js
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

Ext.define('CON.view.MainNav', {
    extend: 'Ext.navigation.View',

    requires: [
        'CON.view.HomeScreen',
        'Ext.navigation.Bar',
        'Ext.Button',
        'Ext.Toolbar'
    ],

    config: {
        itemId: 'mynavigationview',
        navigationBar: {
            docked: 'top',
            itemId: 'mynavigationbar',
            minHeight: '58px',
            items: [
                {
                    xtype: 'button',
                    siteUrl: '',
                    align: 'right',
                    cls: [
                        'audiobuttoncls',
                        'audioPlay'
                    ],
                    hidden: true,
                    id: 'audioPlay',
                    itemId: 'audioPlay',
                    ui: 'plain',
                    text: ''
                },
                {
                    xtype: 'button',
                    siteUrl: '',
                    align: 'right',
                    cls: 'gotowebsitecls',
                    hidden: true,
                    id: 'gotowebsiteBtn',
                    itemId: 'gotowebsiteBtn',
                    ui: 'plain',
                    text: ''
                },
                {
                    xtype: 'button',
                    align: 'right',
                    id: 'userprefbtn',
                    itemId: 'userprefbtn',
                    ui: 'plain',
                    iconCls: 'settings',
                    text: ''
                }
            ]
        },
        items: [
            {
                xtype: 'homescreen',
                title: 'Cup of News'
            },
            {
                xtype: 'toolbar',
                cls: 'ux-cover',
                docked: 'bottom',
                height: 80,
                hidden: false,
                html: '<div class="admob"><center><a href="javascript:CON.app.openAdmobSite();" ><img src="resources/project-images/senchatutorials.png"/></a></center></div>',
                itemId: 'footer_toolbar',
                style: 'border-top:none;'
            }
        ]
    }

});