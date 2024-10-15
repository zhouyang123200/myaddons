/** @odoo-module */

import { Component } from "@odoo/owl";
import { OrganizeModel } from "./model"


export class OrganizeRenderer extends Component {
    static template = "myview.organize_render_temp";
    static props = {
        model: OrganizeModel,
    }
}