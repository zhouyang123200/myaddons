# -*- coding: utf-8 -*-
{
    "name": "myview",
    "summary": """
        自定视图模块
        """,
    "description": """
        此模块根据odoo16版本编写
    """,
    "author": "Frank Chow",
    "website": "https://github.com/zhouyang123200",
    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    "category": "Human Resources",
    "version": "0.1",
    # any module necessary for this one to work correctly
    "depends": ["hr"],
    # always loaded
    "data": [
        # "security/ir.model.access.csv",
        "views/views.xml",
        # "views/templates.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "myview/static/src/**/*",
        ],
    },
}
